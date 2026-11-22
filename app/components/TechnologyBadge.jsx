import { FaEye, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPhp,
  SiC,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiOpenai,
  SiLangchain,
  SiOpencv,
  SiMediapipe,
  SiNumpy,
  SiPandas,
  SiDocker,
  SiBitbucket,
  SiGit,
  SiGithub,
  SiJira,
  SiPostman,
  SiJest,
  SiLaravel,
} from "react-icons/si";
import {
  TbDatabase,
  TbApi,
  TbBraces,
  TbLambda,
  TbBucket,
  TbWorld,
  TbActivity,
  TbMail,
  TbBell,
  TbPackage,
  TbGitBranch,
  TbCloud,
  TbUsers,
  TbBrandAws,
  TbCode,
  TbPresentation,
} from "react-icons/tb";

const technologyIcons = {
  typescript: [SiTypescript, "#3178c6"],
  javascript: [SiJavascript, "#ad8500"],
  python: [SiPython, "#ab7e18"],
  sql: [TbDatabase, "#297e9f"],
  php: [SiPhp, "#7162aa"],
  java: [FaJava, "#c76824"],
  c: [SiC, "#376fa2"],
  angular: [SiAngular, "#c63d4e"],
  react: [SiReact, "#12809a"],
  "next.js": [SiNextdotjs, "#294137"],
  "react native": [SiReact, "#12809a"],
  html: [SiHtml5, "#c76824"],
  css: [SiCss3, "#3178c6"],
  "tailwind css": [SiTailwindcss, "#058ba3"],
  "node.js": [SiNodedotjs, "#3a8b52"],
  "express.js": [SiExpress, "#456255"],
  flask: [SiFlask, "#456255"],
  "rest apis": [TbApi, "#8460a6"],
  "json logic": [TbBraces, "#ad8500"],
  mongodb: [SiMongodb, "#3a8b52"],
  postgresql: [SiPostgresql, "#376fa2"],
  mysql: [SiMysql, "#1589ba"],
  sqlite: [SiSqlite, "#297e9f"],
  redis: [SiRedis, "#c63d4e"],
  "openai api": [SiOpenai, "#17816c"],
  langchain: [SiLangchain, "#36785f"],
  opencv: [SiOpencv, "#3a8b52"],
  yolo: [FaEye, "#8460a6"],
  mediapipe: [SiMediapipe, "#12809a"],
  numpy: [SiNumpy, "#3178c6"],
  pandas: [SiPandas, "#7d69a5"],
  "aws api gateway": [TbBrandAws, "#b47711"],
  aws: [TbBrandAws, "#b47711"],
  lambda: [TbLambda, "#c76824"],
  s3: [TbBucket, "#43875b"],
  cloudfront: [TbWorld, "#7d69a5"],
  cloudwatch: [TbActivity, "#ad4e80"],
  sqs: [TbPackage, "#bb4e81"],
  ses: [TbMail, "#b47711"],
  sns: [TbBell, "#bb4e81"],
  codebuild: [TbCloud, "#43875b"],
  ecr: [TbPackage, "#c76824"],
  docker: [SiDocker, "#1589ba"],
  "ci/cd": [TbGitBranch, "#8460a6"],
  "bitbucket pipelines": [SiBitbucket, "#3178c6"],
  git: [SiGit, "#c76824"],
  github: [SiGithub, "#294137"],
  bitbucket: [SiBitbucket, "#3178c6"],
  jira: [SiJira, "#3178c6"],
  postman: [SiPostman, "#c76824"],
  jest: [SiJest, "#b85264"],
  "studio 3t": [TbDatabase, "#43875b"],
  "mongodb compass": [SiMongodb, "#3a8b52"],
  "agile/scrum": [TbUsers, "#8460a6"],
  laravel: [SiLaravel, "#c63d4e"],
  pptxgenjs: [TbPresentation, "#ad4e80"],
  "full-stack development": [TbCode, "#7d69a5"],
};

const aliases = {
  yolov8: "yolo",
  express: "express.js",
  node: "node.js",
  openai: "openai api",
};

export default function TechnologyBadge({ name, compact = false }) {
  const key = name.toLowerCase();
  const [Icon, color] = technologyIcons[aliases[key] || key] || [
    TbCode,
    "#4f8170",
  ];
  return (
    <span
      className={`tech-badge ${compact ? "is-compact" : ""}`}
      style={{ "--tech-color": color }}
    >
      <span className="tech-badge-icon">
        <Icon aria-hidden="true" />
      </span>
      <span>{name}</span>
    </span>
  );
}
export function TechnologyBadges({
  items,
  label = "Technologies used",
  compact = true,
  className = "",
}) {
  return (
    <ul aria-label={label} className={`tech-badges ${className}`}>
      {items.map((name) => (
        <li key={name}>
          <TechnologyBadge name={name} compact={compact} />
        </li>
      ))}
    </ul>
  );
}
