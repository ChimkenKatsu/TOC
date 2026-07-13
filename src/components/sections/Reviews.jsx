import { SectionHead } from '../ui';

const REVIEWS = [
  {
    text: '"Triangle Outsourcing Corporation provides reliable and professional support for growing businesses."',
    source: 'Verified · Iligan City',
  },
  {
    text: '"Great team, excellent communication, and dependable service."',
    source: 'Verified · Iligan City',
  },
];

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="reviews-top">
          <SectionHead
            eyebrow="CLIENT REVIEWS"
            title="Trusted by the clients we work with"
            style={{ marginBottom: 0 }}
          />
          <div className="rating-badges">
            <div className="rating-pill">
              <span className="score">5.0</span>
              <span className="stars">★★★★★</span>
              <span className="src">Google · 6 reviews</span>
            </div>
            <div className="rating-pill">
              <span className="score">5/5</span>
              <span className="stars">★★★★★</span>
              <span className="src">Trustindex.io</span>
            </div>
          </div>
        </div>
        <div className="review-grid">
          {REVIEWS.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="stars">★★★★★</div>
              <p>{review.text}</p>
              <div className="review-who">
                <div className="avatar">GR</div>
                <div>
                  <div className="name">Google Review</div>
                  <div className="src">{review.source}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
