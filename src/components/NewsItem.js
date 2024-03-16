import React, { Component } from "react";

export class NewsItem extends Component {
  truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  render() {
    const { title, description, urlToImage, author, url, publishedAt, source } =
      this.props.newsData;

    return (
      <div
        className="container my-2"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="card" style={{ width: "18rem", height: "450px" }}>
          <img
            src={
              !urlToImage
                ? "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
                : urlToImage
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title && !description
                ? title
                : title
                ? this.truncateText(title, 40)
                : ""}
            </h5>
            <span
              className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              style={{ left: "924e5rr54%", zIndex: "1" }}
            >
              {source.name}
              <span className="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">
              {description ? this.truncateText(description, 80) : ""}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
