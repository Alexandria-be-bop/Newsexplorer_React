import "./NewsCard.css";
import bookmark from "../../assets/bookmark.svg";

export default function NewsCard({ article }) {
  const { source, title, publishedAt, description, urlToImage, url } = article;

  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="card">
      <a
        className="card__overlay"
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={title}
      />
      <div className="card__image-wrap">
        <button className="card__button">
          <img
            className="card__button-img"
            src={bookmark}
            alt="bookmark img"
          />
        </button>
        <img
          className="card__image"
          src={urlToImage}
          alt={title}
        />
      </div>
      <div className="card__body">
        <p className="card__date">{date}</p>
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <p className="card__source">{source?.name}</p>
      </div>
    </article>
  );
}
