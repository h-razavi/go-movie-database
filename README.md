# GO! Movie Database
![preview](/website-screenshot.jpg)
---
## Overview
This web app was designed and developed as the final project for the *Junior Frontend Developer* coding bootcamp I attended with [Coding Front](https://codingfront.dev/).
In this movie database you can find popular as well as trending movies and tv shows and read about their synopses, watch trailers and much more.
All data is provided by [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction).

## The Process
After building two smaller project with Vanilla JS, and grasping the basics of React JS, it was assigned to us by the bootcamp instructors that we will be designing and developing a movie database based on the data provided by the API. The general design as well as various features to be included in this project was left to our own discretion.
For the design and main features my main insparation was [this website](https://30nama.com/).
I designed a logo and chose my color pallette to give this website a more unique feel.

## Sections & Pages
In addition to placing a *Hero* component with some CSS animation and general description of the site I put the search section at the top of the homepage because in my experience this is the part of movie databases that users find most handy.
Aside from search section, the Homepage is divided into five parts as follows:
 - **What Movies People Are Watching** (Popular movies)
 - **Coming Up to Your Screens Soon** (Upcoming movies)
 - **Popular on TV**
 - **Now Showing on TV**
 - **Entertainment News**  

Movies and TV shows in the first four sections are presented as cards placed in a slider. Clicking on each card will take you the details page for that movie/tv show. Also when hovering over cards a short overview and genres for that movie/tv show will appear.
The last section is Entertainment News which shows 4 cards with latest entertainment news headlines and details. The news data is provided by [GNews](https://gnews.io/docs/v4#introduction).

In Movies and TV pages which is linked in the Navbar you can find movies/tv shows and sort them by popularity/user ratings/release date. You can also select the genres with the menu on the top right.

In the details you will find all the information related to that movie/tv show as well as a link to watch the trailer. You can also find information about cast and crew and find similar movies/tv shows based on the current one.
In TV details page you can also find buttons for each season of the show which lead you to the information page for that season.

## Technologies, Libraries & Packages.
- Semantic HTML5 markup
- React.js
- [Material UI](https://mui.com/material-ui/getting-started/overview/)
- Styled Components
- [Swiper.js](https://swiperjs.com/swiper-api)
- [Axios](https://axios-http.com/docs/intro)

## Author
[Hossain Razavi](mailto:hossain.razavi@gmail.com)
