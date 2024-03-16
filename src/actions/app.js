const apiKey = process.env.REACT_APP_API_KEY;

export const getNewsList = async (
  country,
  category,
  pageSize,
  page,
  setProgress
) => {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  try {
    setProgress(20);
    const data = await fetch(url);
    setProgress(40);
    const parsedData = await data.json();
    setProgress(60);
    return parsedData;
  } catch (error) {
    setProgress(100);
    return {
      status: "error",
      message: "something went wrong while fetching news",
    };
  }
};
