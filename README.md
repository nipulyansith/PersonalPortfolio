This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Graduation photos

Place your photos in `public/images/` using these filenames:

- `graduationMain.jpg`: the featured portrait.
- `grad1.jpg` through `grad5.jpg`: optional gallery photos; four or five are both supported.

Only existing files are displayed. Without the main photo, the section shows a styled Class of 2026 illustration. Click any photo to open the full-size viewer, use Previous/Next or the arrow keys to browse, and Escape to close.

Refresh the page after adding files during development. Include the images before running a production build and deploying.

## Blog

The journal listing is at `/blog`; articles are stored in `app/blog/posts.js` and rendered at `/blog/[id]`. The first article is `/blog/1`. Reading time is estimated from the article text at 220 words per minute.

The article uses an editorial reading layout with serif headings, four pull quotes from the author, section navigation, reading progress, local-device bookmarks, and link copying. Bookmarks stay in the visitor's browser; no account or service is required.

### Archived first-draft cover

Asset: `public/images/blog/production-full-stack-cover.png`. Generated using the built-in ImageGen tool. This illustration is retained as an archive and is no longer displayed. The current article uses the revised ten-lesson draft, with its original stories and closing reflection. The AI-review paragraph is phrased as a personal reflection, and the temporary database flag is explicitly described as a workaround.

Final generation prompt:

> Use case: stylized-concept. Asset type: wide editorial cover illustration for a personal software engineering blog article titled What I Learned from Working on a Production Full-Stack Application. Create an elegant, high-end 3D still-life metaphor of a production application: three offset floating glass and matte graphite architectural layers connected by delicate luminous paths, a restrained browser-window-like top layer, a middle logic module, and a small database cylinder at the base. This is a conceptual editorial illustration, not a screenshot or a labeled technical diagram. Dark near-black studio background, tactile materials, fine grain, soft violet and electric cyan edge lighting, a subtle warm-white highlight. Wide landscape composition, central sculptural object with generous breathing room; readable as a small blog thumbnail and as a panoramic article hero. Quiet, thoughtful, precise, refined. No humans, no text, no logos, no watermark, no busy particles or decorative code strings.
