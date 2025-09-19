from PIL import Image, ImageColor

def make_square(input_path, output_path, bg_color="#FFFFFF"):
    try:
        bg_color = ImageColor.getrgb(bg_color)
    except ValueError:
        print("⚠️ Invalid color format, falling back to white (#FFFFFF)")
        bg_color = (255, 255, 255)

    # Open image
    img = Image.open(input_path)
    w, h = img.size

    max_side = max(w, h)
    new_img = Image.new("RGB", (max_side, max_side), bg_color)
    paste_position = ((max_side - w) // 2, (max_side - h) // 2)
    new_img.paste(img, paste_position)

    new_img.save(output_path)
    print(f"✅ Saved square image: {output_path}")

if __name__ == "__main__":
    import os

    input_path = input("Enter input image path: ").strip().strip('"').strip("'")
    output_path = input("Enter output image path (output.webp): ").strip()
    if not output_path:
        output_path = "output.webp"

    bg_color = input("Enter background color in hex (#FFFFFF): ").strip()
    if not bg_color:
        bg_color = "#FFFFFF"

    if not os.path.exists(input_path):
        print("❌ Error: Input file not found.")
    else:
        make_square(input_path, output_path, bg_color)
