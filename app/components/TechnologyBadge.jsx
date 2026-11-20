import { FaEye, FaJava } from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiPython, SiPhp, SiC, SiAngular,
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs,
  SiExpress, SiFlask, SiMongodb, SiPostgresql, SiMysql, SiSqlite,
  SiRedis, SiOpenai, SiLangchain, SiOpencv, SiMediapipe, SiNumpy,
  SiPandas, SiDocker, SiBitbucket, SiGit, SiGithub, SiJira,
  SiPostman, SiJest, SiLaravel,
} from "react-icons/si";
import {
  TbDatabase, TbApi, TbBraces, TbLambda, TbBucket, TbWorld,
  TbActivity, TbMail, TbBell, TbPackage, TbGitBranch, TbCloud,
  TbUsers, TbBrandAws, TbCode, TbPresentation,
} from "react-icons/tb";


const technologyIcons = {
  "typescript": [SiTypescript, "#60a5fa"],
  "javascript": [SiJavascript, "#facc15"],
  "python": [SiPython, "#fcd34d"],
  "sql": [TbDatabase, "#7dd3fc"],
  "php": [SiPhp, "#a5b4fc"],
  "java": [FaJava, "#fb923c"],
  "c": [SiC, "#93c5fd"],
  "angular": [SiAngular, "#f87171"],
  "react": [SiReact, "#67e8f9"],
  "next.js": [SiNextdotjs, "#f1f5f9"],
  "react native": [SiReact, "#67e8f9"],
  "html": [SiHtml5, "#fb923c"],
  "css": [SiCss3, "#60a5fa"],
  "tailwind css": [SiTailwindcss, "#22d3ee"],
  "node.js": [SiNodedotjs, "#4ade80"],
  "express.js": [SiExpress, "#e2e8f0"],
  "flask": [SiFlask, "#e2e8f0"],
  "rest apis": [TbApi, "#c084fc"],
  "json logic": [TbBraces, "#facc15"],
  "mongodb": [SiMongodb, "#4ade80"],
  "postgresql": [SiPostgresql, "#93c5fd"],
  "mysql": [SiMysql, "#38bdf8"],
  "sqlite": [SiSqlite, "#7dd3fc"],
  "redis": [SiRedis, "#f87171"],
  "openai api": [SiOpenai, "#6ee7b7"],
  "langchain": [SiLangchain, "#a7f3d0"],
  "opencv": [SiOpencv, "#4ade80"],
  "yolo": [FaEye, "#c084fc"],
  "mediapipe": [SiMediapipe, "#67e8f9"],
  "numpy": [SiNumpy, "#60a5fa"],
  "pandas": [SiPandas, "#c4b5fd"],
  "aws api gateway": [TbBrandAws, "#fbbf24"],
  "lambda": [TbLambda, "#fb923c"],
  "s3": [TbBucket, "#86efac"],
  "cloudfront": [TbWorld, "#c4b5fd"],
  "cloudwatch": [TbActivity, "#f9a8d4"],
  "sqs": [TbPackage, "#f472b6"],
  "ses": [TbMail, "#fbbf24"],
  "sns": [TbBell, "#f472b6"],
  "codebuild": [TbCloud, "#86efac"],
  "ecr": [TbPackage, "#fb923c"],
  "docker": [SiDocker, "#38bdf8"],
  "ci/cd": [TbGitBranch, "#c084fc"],
  "bitbucket pipelines": [SiBitbucket, "#60a5fa"],
  "git": [SiGit, "#fb923c"],
  "github": [SiGithub, "#f1f5f9"],
  "bitbucket": [SiBitbucket, "#60a5fa"],
  "jira": [SiJira, "#60a5fa"],
  "postman": [SiPostman, "#fb923c"],
  "jest": [SiJest, "#fda4af"],
  "studio 3t": [TbDatabase, "#86efac"],
  "mongodb compass": [SiMongodb, "#4ade80"],
  "agile/scrum": [TbUsers, "#c084fc"],
  "laravel": [SiLaravel, "#f87171"],
  "pptxgenjs": [TbPresentation, "#f9a8d4"],
  "full-stack development": [TbCode, "#c4b5fd"],
};

const aliases = { "yolov8": "yolo", "express": "express.js", "node": "node.js", "openai": "openai api" };

export default function TechnologyBadge({ name, compact = false }) {
  const key = name.toLowerCase();
  const [Icon, color] = technologyIcons[aliases[key] || key] || [TbCode, "#c4b5fd"];

  return (
    <span className={`inline-flex max-w-full items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] text-sm font-medium text-white/75 transition-colors hover:border-purple-400/35 hover:bg-white/[0.065] ${compact ? "min-h-8 px-2.5 py-1" : "min-h-10 px-3 py-2"}`}>
      <Icon aria-hidden="true" className={`${compact ? "h-4 w-4" : "h-5 w-5"} shrink-0`} style={{ color }} />
      <span className="min-w-0 leading-snug">{name}</span>
    </span>
  );
}

export function TechnologyBadges({ items, label = "Technologies used", compact = true, className = "" }) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((name) => <li key={name} className="min-w-0 max-w-full"><TechnologyBadge name={name} compact={compact} /></li>)}
    </ul>
  );
}
