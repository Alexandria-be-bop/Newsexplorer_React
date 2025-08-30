import "./NewsCard.css";
import bookmark from "../../assets/bookmark.svg";
import bookmarkFilled from "../../assets/bookmark_blue.svg";
import trashIcon from "../../assets/trash.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function NewsCard({
  article,
  onToggleSave,
  onDeleteArticle,
  isSaved = false,
  isOnSavedPage = false,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const isLoggedIn = Boolean(
    currentUser && (currentUser._id || currentUser.email)
  );
  const {
    source,
    title,
    publishedAt,
    description,
    urlToImage,
    url,
    _id,
    keyword,
  } = article;

  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const image = urlToImage
    ? { backgroundImage: `url("${urlToImage}")` }
    : undefined;

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    isOnSavedPage ? onDeleteArticle?.(_id) : onToggleSave?.(article);
  };

  // Determine bookmark/trash and tooltip behavior
  const button = isOnSavedPage
    ? {
        icon: trashIcon,
        alt: "Delete article",
        title: "Remove from saved",
        className: "card__button",
        tooltip: "Remove from saved",
      }
    : {
        icon: isSaved ? bookmarkFilled : bookmark,
        alt: isSaved ? "Remove bookmark" : "Save article",
        title: isLoggedIn ? "" : "Sign in to save articles",
        className: `card__button ${isSaved ? "card__button--saved" : ""}`,
        tooltip: isLoggedIn
          ? isSaved
            ? "Remove from saved"
            : ""
          : "Sign in to save articles",
      };

  return (
    <article className="card">
      <a
        className="card__overlay"
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={title}
      />

      <div
        className="card__image"
        style={image}
      >
        {isOnSavedPage && <div className="card__keyword">{keyword}</div>}
        <button
          className={button.className}
          onClick={handleButtonClick}
          title={button.title}
        >
          <img
            className="card__button-img"
            src={button.icon}
            alt={button.alt}
          />
        </button>
        {/* conditionally render the tooltip */}
        {button.tooltip && (
          <div className="card__tooltip">{button.tooltip}</div>
        )}
      </div>
      <div className="card__body">
        <p className="card__date">{date}</p>
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <p className="card__source">{source?.name || ""}</p>
      </div>
    </article>
  );
}

export default NewsCard;
