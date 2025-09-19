package main

import (
	"bufio"
	"fmt"
	"image"
	"image/color"
	"image/draw"
	_ "image/gif"
	_ "image/jpeg"
	_ "image/png"
	"os"
	"strings"

	"github.com/chai2010/webp"
)

func hexToRGBA(hex string) (color.Color, error) {
	hex = strings.TrimPrefix(hex, "#")
	var r, g, b uint8
	if len(hex) == 6 {
		_, err := fmt.Sscanf(hex, "%02x%02x%02x", &r, &g, &b)
		if err != nil {
			return nil, err
		}
		return color.RGBA{r, g, b, 255}, nil
	}
	return nil, fmt.Errorf("invalid hex color")
}

func makeSquare(inputPath, outputPath string, bgColor color.Color) error {
	file, err := os.Open(inputPath)
	if err != nil {
		return err
	}
	defer file.Close()

	img, _, err := image.Decode(file)
	if err != nil {
		return err
	}

	bounds := img.Bounds()
	w := bounds.Dx()
	h := bounds.Dy()
	maxSide := w
	if h > w {
		maxSide = h
	}

	newImg := image.NewRGBA(image.Rect(0, 0, maxSide, maxSide))
	draw.Draw(newImg, newImg.Bounds(), &image.Uniform{bgColor}, image.Point{}, draw.Src)

	offsetX := (maxSide - w) / 2
	offsetY := (maxSide - h) / 2
	draw.Draw(newImg, image.Rect(offsetX, offsetY, offsetX+w, offsetY+h), img, bounds.Min, draw.Over)

	outFile, err := os.Create(outputPath)
	if err != nil {
		return err
	}
	defer outFile.Close()

	if err := webp.Encode(outFile, newImg, &webp.Options{Lossless: true}); err != nil {
		return err
	}

	fmt.Println("✅ Saved square image:", outputPath)
	return nil
}

func main() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("Enter input image path: ")
	inputPath, _ := reader.ReadString('\n')
	inputPath = strings.TrimSpace(inputPath)

	fmt.Print("Enter output image path (output.webp): ")
	outputPath, _ := reader.ReadString('\n')
	outputPath = strings.TrimSpace(outputPath)
	if outputPath == "" {
		outputPath = "output.webp"
	} else if !strings.HasSuffix(strings.ToLower(outputPath), ".webp") {
		outputPath += ".webp"
	}

	fmt.Print("Enter background color in hex (#FFFFFF): ")
	bgHex, _ := reader.ReadString('\n')
	bgHex = strings.TrimSpace(bgHex)
	if bgHex == "" {
		bgHex = "#FFFFFF"
	}

	bgColor, err := hexToRGBA(bgHex)
	if err != nil {
		fmt.Println("⚠️ Invalid color format, falling back to white (#FFFFFF)")
		bgColor = color.RGBA{255, 255, 255, 255}
	}

	if _, err := os.Stat(inputPath); os.IsNotExist(err) {
		fmt.Println("❌ Error: Input file not found.")
		return
	}

	if err := makeSquare(inputPath, outputPath, bgColor); err != nil {
		fmt.Println("❌ Error:", err)
	}
}
