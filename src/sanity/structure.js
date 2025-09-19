// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("meeting-post").title("Meeting Posts"),
      S.documentTypeListItem("banner").title("Banners"),
      S.divider(),
      S.documentTypeListItem("partner").title("Partners"),
      S.documentTypeListItem("sponsor").title("Sponsors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "meeting-post", "banner", "partner", "sponsor"].includes(
            item.getId()
          )
      ),
    ]);
