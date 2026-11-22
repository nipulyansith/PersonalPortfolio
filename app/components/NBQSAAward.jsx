import { TbAward } from "react-icons/tb";
import PhotoGallery from "./PhotoGallery";
const photos = [
  {
    src: "/images/nb1.jpg",
    alt: "The PitchIQ team holding their Merit Award certificates at NBQSA 2026",
  },
  {
    src: "/images/nb2.jpg",
    alt: "The PitchIQ team celebrating at the National ICT Awards",
  },
  {
    src: "/images/nb3.jpg",
    alt: "A group photograph celebrating PitchIQ’s NBQSA recognition",
  },
];
export default function NBQSAAward() {
  return (
    <article
      id="nbqsa"
      className="award-feature"
      aria-labelledby="nbqsa-heading"
    >
      <div className="award-copy">
        <span className="award-seal" aria-hidden="true">
          <TbAward />
        </span>
        <p className="eyebrow recognition-text">
          28th National ICT Awards · 2026
        </p>
        <h3 id="nbqsa-heading">
          A proud moment.
          <br />
          <span className="recognition-text">A shared achievement.</span>
        </h3>
        <span className="recognition-badge">PitchIQ · Merit Award Winner</span>
        <p>
          Our PitchIQ team received a Merit Award at NBQSA 2026. Seeing our work
          recognised at a national level made this a particularly special
          milestone.
        </p>
        <p>
          Behind the award: research, dedication, and the many small
          improvements that brought a single-video cricket biomechanics platform
          to life.
        </p>
        <blockquote>
          The most rewarding part was getting here together.
        </blockquote>
        <details className="award-thanks">
          <summary>The people behind the work</summary>
          <p>
            My heartfelt thanks to our supervisor,{" "}
            <a
              href="https://www.linkedin.com/in/damitha-sandaruwan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Damitha Sandaruwan
            </a>
            , for his guidance, encouragement, and support, and to my teammates{" "}
            <a
              href="https://www.linkedin.com/in/vidhara-ranujee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vidhara Ranujee
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/tharushimaduhansi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tharushi Maduhansi
            </a>{" "}
            for their commitment and hard work. Proud of what we’ve accomplished
            together, and excited for what comes next.
          </p>
        </details>
      </div>
      <div className="award-gallery">
        <PhotoGallery
          photos={photos}
          label="NBQSA 2026"
          className="award-photos"
        />
        <p className="photo-caption">
          A night to remember, with the people who made it happen.
        </p>
      </div>
    </article>
  );
}
