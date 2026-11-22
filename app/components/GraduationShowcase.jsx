import PhotoGallery from "./PhotoGallery";
export default function GraduationShowcase({ mainPhoto, galleryPhotos }) {
  const photos = [
    ...(mainPhoto
      ? [
          {
            src: mainPhoto,
            alt: "Nipul Yansith celebrating his graduation at the University of Colombo",
          },
        ]
      : []),
    ...galleryPhotos.map((src, i) => ({
      src,
      alt: `Graduation day memory ${i + 1}`,
    })),
  ];
  return (
    <section id="graduation" className="section-block graduation-section">
      <div className="section-shell graduation-layout">
        <div className="graduation-copy">
          <p className="eyebrow">Class of 2026</p>
          <h2 className="section-title">
            A chapter
            <br />
            to remember.
          </h2>
          <p>
            Four years of learning, friendships, and finding my way. Celebrating
            graduation from the University of Colombo School of Computing.
          </p>
          <div className="degree">
            <span className="recognition-text">First Class Honours</span>
            <h3>
              B.Sc. (Hons) in
              <br />
              Information Systems
            </h3>
            <p>
              University of Colombo School of Computing
              <br />
              May 2022 – 2026
            </p>
          </div>
          <dl className="graduation-stats">
            <div>
              <dd>
                3.70<span>/ 4.00</span>
              </dd>
              <dt>Final GPA</dt>
            </div>
            <div>
              <dd>4</dd>
              <dt>Director’s List semesters</dt>
            </div>
          </dl>
          <p className="photo-caption">
            The people. The memories. The beginning of what’s next.
          </p>
        </div>
        <PhotoGallery
          photos={photos}
          label="Graduation"
          className="graduation-photos"
        />
      </div>
    </section>
  );
}
