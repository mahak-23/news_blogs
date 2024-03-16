import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { getNewsList } from "../actions/app";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      error: null,
    };
  }

  componentDidMount() {
    this.updateNews();
  }

  updateNews = async () => {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;

    this.props.setProgress(0);
    const parsedData = await getNewsList(
      country,
      category,
      pageSize,
      page,
      this.props.setProgress
    );
    if (parsedData.status === "error") {
      this.setState({
        loading: false,
        error: parsedData.message,
      });
    } else {
      this.setState({
        articles: [...this.state.articles, ...parsedData.articles],
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }
    this.props.setProgress(100);
  };

  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { articles, loading, error, totalResults } = this.state;
    return (
      <div className="container my-4">
        <h2
          className="text-center"
          style={{ margin: "25px 0px", marginTop: "90px" }}
        >
          NewsApp - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="text-center" style={{ color: "red" }}>
            {error}
          </div>
        ) : articles.length !== 0 ? (
          <InfiniteScroll
            dataLength={articles.length}
            next={this.fetchMoreData}
            hasMore={articles !== totalResults}
            loader={<Spinner />}
          >
            <div className="container d-flex">
              <div className="row">
                {articles.map((element, index) => (
                  <div className="col-md-4" key={index}>
                    <NewsItem newsData={element} />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        ) : (
          <div className="text-center">No News available</div>
        )}
      </div>
    );
  }
}

export default News;
