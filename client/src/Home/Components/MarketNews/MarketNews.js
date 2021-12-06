import NewsCard from "./NewsCard/NewsCard";

import img1 from '../../../static/images/news1.PNG';
import img2 from '../../../static/images/crypto.PNG';
import img3 from '../../../static/images/china.PNG';
import img4 from '../../../static/images/game.PNG';

const NEWS_LIST = [
  { image: img1, title: "Morgan Stanley says these 6 stocks are much cheaper alternatives to Big Tech", link: "https://www.cnbc.com/2021/06/28/morgan-stanley-says-these-stocks-are-cheaper-alternatives-to-big-tech.html" },
  { image: img2, title: "Cramer: Here’s why I bought back into ether instead of bitcoin when crypto stabilized last week", link: "https://www.cnbc.com/2021/06/28/why-jim-cramer-bought-ether-instead-of-bitcoin-when-crypto-stabilized-.html" },
  { image: img3, title: "JPMorgan picks its favorite Chinese stocks on everything from hydrogen to EV batteries", link: "https://www.cnbc.com/2021/06/27/jpmorgan-picks-its-favorite-chinese-stocks-on-everything-from-hydrogen-to-ev-batteries.html" },
  { image: img4, title: "Baird suspends GameStop stock coverage, citing continued Reddit influence and lack of company plan", link: "https://www.cnbc.com/2021/06/28/baird-suspends-gamestop-stock-coverage-reddit-influence-lack-of-plan.html" },
];

const MarketNews = () => {
  const newsDisplay = NEWS_LIST.map((news, i) => {
    return (
      <NewsCard key={i} img={news.image} title={news.title} link={news.link} />
    );
  });

  return newsDisplay;
};

export default MarketNews;
