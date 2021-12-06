import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";

import cssClasses from "./Course.module.css";

export default function StockMarket() {
  return (
    <Container>
      <h1 className={cssClasses.header}>Direct Stock market Investment</h1>
      <Divider className={cssClasses.line} />
      <p className={cssClasses.paragraph}>
        What is stock market? What are stocks? What are shares?
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        Imagine you started a new company or business of selling apple juice.
        You start selling the apple juice and now you want to expand your juice
        brand by opening another outlet or let’s say increasing the production
        of your juice to sell more. You can invest slowly by what you profit
        from your business and invest it in expanding your company. Another way
        of expanding your business is taking loans from bank. Another way of
        expanding is , the company you formed , you divide the company into
        let’s say 30 parts. Then you sell these parts of business or company to
        people in marketplace. The marketplace for selling and buying of these
        companies part is called Stock market. Parts of a company are called
        Shares. A collection of shares is called stocks.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        But how can you divide a company? It sounds confusing to you? A company
        issue paper (shares) , recognised by SEBI – Securities & Exchange board
        of India , a body which recognises and regulate the stock market of
        India. Your company is illegitimate, if you don’t register in SEBI. Only
        if you register in SEBI, you can issue shares.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        A company divide itself into various parts via these papers called
        shares. If I divide my company into 30 parts , that means that I have
        divided the company in 30 shares. Now I can sell let’s say 10 shares in
        marketplace to those who would like to buy these shares. I sold my
        shares at 1 shares = 20 Rupees. Total amount of money that I would have
        if I would sell all my shares in the marketplace at a share price of 20
        would be 600 rupees. This 600 rupees is called market valuation or
        capitalisation of company. A stock or shares price determined the value
        or capitalisation of a company. So when you hear somebody says Apple is
        the most valuable company in the world or Saudi Aramco is the most
        valuable company in the world, they are actually saying that their total
        amount of rupees of shares are equal to worth the most money in the
        marketplace.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        A company which issue shares is often called promoter. Promoters can
        issue as many shares as they can and divide their company in as many
        parts as they want. When initially for the first time, any company issue
        shares to general public to buy and sell , its termed as IPO , initial
        public offering.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        People who buy shares are called shareholders. Being a shareholder gives
        the shareholders voting power. Shareholders, along with promoters ,
        constitute what is called as Board of directors of an company. If the
        Shareholder total holding in the company is more than 50 % then they can
        overturn any decisions that the promoter takes. Because being
        shareholder means being the owner of the company but in per cent or
        partially, not wholly.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        A marketplace where selling and buying of these shares and stocks happen
        is called Stock market. By law, every company is required to publish its
        “ Annual report” which includes all about company sales , profit made or
        loss made, revenue generation , etc. It contains all the facts and
        figures of a company. If the company grows good or shows the promise of
        growth , the share price increases. If the company goes into loss or
        shows poor growth promises , the share price decreases. Its simple
        demand and supply principle which we would talk about later as to why
        this happens.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        In India, NSE – National Stock Exchange and BSE – Bombay Stock Exchange
        are two of the most popular stock markets. There is a third stock
        exchange MSEI i.e. Metropolitan Stock Exchange of India (earlier known
        as MCX-SX), however, the same is less popular as compared to the other 2
        exchanges.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        Lots of selling and buying take place in these stock markets. According
        to a company valuation , it is classified in stock market as small-cap ,
        mid –cap and large cap. The meaning is obvious, small cap means
        companies whose market capitalisation is small. Medium cap whose market
        capitalisation is medium in stock market and large cap meaning whose
        market capitalisation is large in stock market.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        Market capitalisation means in simple terms that what is the price of
        all the stocks of a company. For example 600 Rupees is the market
        valuation and capitalisation of my company in stock market. It is
        important to note that since the share price keeps fluctuating, the
        market cap of a company keeps changing too.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        The following table demonstrates large –cap, mid –cap and small –cap as
        per their market capitalisation
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        <Grid container spacing={5} className={cssClasses.gridContainer} >
          <Grid item sm={4} className={cssClasses.border} >
            Large-cap companies
          </Grid>
          <Grid item sm={4} className={cssClasses.border}>
            Mid-cap companies
          </Grid>
          <Grid item sm={4} className={cssClasses.border}>
            Small-cap companies
          </Grid>
          <Grid item sm={4} className={cssClasses.border}>
            Market Capitalisation above Rs. 20,000 Crore.
          </Grid>
          <Grid item sm={4} className={cssClasses.border}>
            Market capitalisation in between Rs. 5,000 – 20,000 Crore.
          </Grid>
          <Grid item sm={4} className={cssClasses.border}>
            Market Capitalisation below Rs. 5,000Crore.
          </Grid>
        </Grid>
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        There are two terms that are called Nifty 50 (or simply NIFTY) and
        Sensex. What is nifty 50 and Sensex? Nifty 50 is just a collection of
        top 50 stocks in the marketplace from NSE. It is those stocks which
        gives an average view of how the market is performing. These stocks span
        across 12 sectors of the Indian economy which include – information
        technology, financial services, consumer goods, entertainment and media,
        metals, pharmaceuticals, telecommunications, cement and its products,
        automobiles, pesticides and fertilizers, energy, and other services
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        Sensex is the same, but for BSE. Sensex is collection of top 30 Stock of
        BSE. Some of the companies under it include Axis Bank, Asian Paints,
        Bajaj Finance, Bharti Airtel, Coal India, HCL Technologies, Hindustan
        Unilever, ICICI Bank, IndusInd Bank, Tata Consultancy Services, Larsen
        &amp;Toubro, etc.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        NIFTY and Sensex are often called indices or index in general term.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        People use 2 type of methods which are popular , to create money or earn
        money from these markets. These are Trading and Value investing.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
