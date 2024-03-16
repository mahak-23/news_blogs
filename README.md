# news_blogs

## DailyNews [Live](https://daily-news-blogs.netlify.app/)
DailyNews is a web application that allows users to fetch top headlines from various news sources.

## Introduction

DailyNews provides users with a convenient way to stay updated with the latest news. With a simple and intuitive interface, users can easily navigate through different news categories and read articles of interest.

## Features

- Browse top headlines from various news sources.
- Get news by category (e.g., general, business, entertainment, health, science, sports, technology).
- Infinite scrolling for seamless browsing.
- Mobile responsive design for optimal viewing on all devices.

## Technologies Used

- React.js: Frontend framework for building the user interface. (Class components)
- React Router: Library for declarative routing within the React application.
- React Infinite Scroll Component: Component for implementing infinite scrolling.
- Bootstrap: Frontend framework for styling the application and creating responsive layouts.
- CSS: Styling language for customizing the appearance of components.
- NewsAPI: REST API for fetching news data.

## Usage
Upon launching the application, you will see the top headlines from various news categories.

- Click on a category to view headlines specific to that category.
- Scroll down to load more news articles dynamically.
- Click on a news article to read the full story.

## APIs Used

### NewsAPI

DailyNews utilizes the NewsAPI to fetch top headlines and news articles from various sources. The API provides endpoints for retrieving news data based on parameters such as country, category, and keyword.

For more information about NewsAPI and its usage, visit [NewsAPI Documentation](https://newsapi.org/docs).

### Node version - 14.17.1

## How to Run

To run this project locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.


## Set up Environment Variables

1. **Create a `.env` file in the root directory:**

   Create a file named `.env` in the root directory of your project.

2. **Add your NewsAPI key to the `.env` file:**

   In the `.env` file, add the following line and replace `your_api_key_here` with your actual NewsAPI key:

   ```bash
   REACT_APP_API_KEY=your_api_key_here
