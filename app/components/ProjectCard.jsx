import Image from "next/image";
import { TechnologyBadges } from "./TechnologyBadge";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies = [], dates }) => (
  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#181818] text-white">
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image src={imgUrl} alt={`${title} project`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-300 hover:scale-105" />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-xl font-semibold">{title}</h3>
      {dates && <p className="mt-2 text-sm text-purple-300">{dates}</p>}
      <p className="mt-4 leading-relaxed text-[#ADB7BE]">{description}</p>
      <TechnologyBadges items={technologies} label="Project technologies" className="mt-5" />
      <div className="mt-auto flex flex-wrap gap-4 pt-6">
        {gitUrl && <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-medium text-purple-300 underline-offset-4 hover:underline">View code<span className="sr-only"> for {title}</span></a>}
        {previewUrl && <a href={previewUrl} className="inline-flex min-h-11 items-center font-medium text-purple-300 underline-offset-4 hover:underline">Explore PitchIQ</a>}
      </div>
    </div>
  </article>
);

export default ProjectCard;
