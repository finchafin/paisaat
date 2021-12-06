const MEANINGS = {
  rbi : " A Institution which regulates all Commercial banks in India like SBI, HDFC, ICICI, etc. All Banks come under the purview of Central bank and have to follow the directives that RBI issues in India.",
  reporate: "The Interest rate that RBI charges to commercial banks. Here RBI act as a depositor. Just as when you deposit your money to banks, they give you a interest rate which is decided by banks, here RBI deposit or give loans to Banks and RBI decide the Interest rate charge on those loan.",
  dollarreserve: " RBI has an account in which Dollar as a reserve are held. Dollar is the International currency of the world, what that means is that if you have to buy and sell something in International market , only dollars would be accepted for transaction. So every country central bank keeps a reserve of dollars in case of emergency. ",
  foreignmarketexchange: "The market of currencies. Here people buy and sell dollars in lots in derivative market and when the dollar in relation to rupees fluctuate and go up and down then loss and profits are made. It also affect the cost of import and export . For example a company may import something, and if dollar goes up in relation to rupee then it will cost more to import and profits would be cut. ",
  inflation: "Many people defined inflation as increase in the prices of Goods and services in market. A perfect example to understand inflation is you have to give 2 Rupees to buy 2 samosa back in the 1970s. Now to buy 2 samosa you need to give 20 rupees. So your purchasing power has decreased. Why this happened? There are not one, but many reason attributed to it.",
  cashreserve: "It is the requirement set by Central bank on the country and imposed on commercial banks. It stipulates that if a depositor deposit 100 Rupees in the bank, and if Cash reserve requirement is 10 %, then bank has to keep the 10% of 100 rupees as a reserve and rest 90 Rupees, bank can loan out. ",
  debttogdpratio: "The debt-to-GDP ratio is a simple way of comparing a nation's economic output (as measured by gross domestic output) to its debt levels. 1 In other words, this ratio tells analysts how much money the country earns every year, and how that compares to the money that country owes.",
  bubble: " A Disproportionate increase of price of Asset is roughly called bubble. It’s a market condition or stage when any asset, stock, real estate, etc prices are at an all time high and market can crash anytime from that all time high price to its mean value. ",
  resession: " When negative sentiments prevail in market and demand gets plummeted then industries are hit hard and economic activity declines. A recession is a significant decline in economic activity, lasting more than a few months. In the business cycle, a recession is the period between the peak and the trough. "
};

const Meanings = (props) => {

  const meaningDisplay = MEANINGS[props.word];


  return (<p>{meaningDisplay}</p>);
};

export default Meanings;