import PhotoGallery from "./PhotoGallery";
import Link from "next/link";
const performancePhotos = [1, 2, 3, 4].map((n) => ({
  src: `/images/fun/postman${n}.jpeg`,
  alt: `Live performance at Postman API Day 2023, photograph ${n}`,
}));
const moments = [
  "g1.jpeg",
  "g2.jpeg",
  "g3.jpg",
  "g4.jpeg",
  "g5.jpg",
  "g6.jpeg",
  "g7.jpg",
].map((src, i) => ({
  src: `/images/fun/${src}`,
  alt: `Music, friends, and performances beyond engineering, memory ${i + 1}`,
}));
export default function FunSection() {
  return (
    <>
      <header className="inner-page-heading section-shell">
        <p className="eyebrow">The other side of me</p>
        <h1>
          Beyond
          <br />
          <span className="muted">the code.</span>
        </h1>
        <div className="inner-page-intro">
          <p>
            Some days, it’s code.
            <br />
            Other days, it’s chords.
          </p>
          <p>
            Music is a major part of my life. I perform, collaborate with my
            band, and explore creativity beyond software engineering.
          </p>
        </div>
      </header>
      <section className="section-block fun-performance">
        <div className="section-shell">
          <header className="section-heading">
            <div>
              <p className="eyebrow">Technology meets music</p>
              <h2 className="section-title">
                A different kind
                <br />
                of API call.
              </h2>
            </div>
            <div className="section-heading-aside">
              <h3>Postman API Day · 2023</h3>
              <p>
                I had the opportunity to perform with two of my band members. An
                unforgettable day combining two things I love.
              </p>
            </div>
          </header>
          <PhotoGallery
            photos={performancePhotos}
            label="Postman API Day"
            className="performance-photos"
          />
        </div>
      </section>
      <section className="section-block">
        <div className="section-shell">
          <header className="section-heading">
            <div>
              <p className="eyebrow">Life, in between</p>
              <h2 className="section-title">
                Good company.
                <br />
                Great memories.
              </h2>
            </div>
            <p className="section-heading-aside">
              A few moments away from the screen.
            </p>
          </header>
          <PhotoGallery
            photos={moments}
            label="Beyond code"
            className="moments-photos"
          />
        </div>
      </section>
      <div className="fun-outro section-shell">
        <p>Different instruments. Same curiosity.</p>
        <Link className="text-link" href="/#contact">
          Let’s connect
        </Link>
      </div>
    </>
  );
}
