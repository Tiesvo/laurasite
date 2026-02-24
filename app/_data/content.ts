export const content = {
  name: "Laura",
  title: "Model & Creator",
  tagline: "You’re favorite Belgian girl 😊",
  ctas: [
    { label: "Onlyfans", href: "https://onlyfans.com/lauraclauw", brand: "onlyfans" },
    { label: "F2F", href: "https://f2f.com/s/srKpPh", brand: "f2f" },
  ],
  gallery: Array.from({ length: 19 }).map((_, i) =>
    `/gallery/${String(i + 1).padStart(3, "0")}.jpg`
  ),
};
