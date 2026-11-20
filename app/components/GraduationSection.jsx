import { readdirSync } from "node:fs";
import path from "node:path";
import GraduationShowcase from "./GraduationShowcase";

export default function GraduationSection() {
  const imageFiles = readdirSync(path.join(process.cwd(), "public", "images"), { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name);
  const findPhoto = (filename) => {
    const match = imageFiles.find((name) => name === filename)
      || imageFiles.find((name) => name.toLowerCase() === filename.toLowerCase());
    return match ? `/images/${encodeURIComponent(match)}` : null;
  };
  const mainPhoto = findPhoto("graduationMain.jpg");
  const galleryPhotos = Array.from({ length: 5 }, (_, index) => findPhoto(`grad${index + 1}.jpg`)).filter(Boolean);

  return <GraduationShowcase mainPhoto={mainPhoto} galleryPhotos={galleryPhotos} />;
}
