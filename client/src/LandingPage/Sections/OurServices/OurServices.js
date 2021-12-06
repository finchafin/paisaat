import Service from "./Service/Service";

import ImportContactsIcon from "@material-ui/icons/ImportContacts";
// import LocalAtmIcon from "@material-ui/icons/LocalAtm";
// import ShowChartIcon from "@material-ui/icons/ShowChart";
// import BarChartIcon from "@material-ui/icons/BarChart";

import cssClasses from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className={cssClasses.services}>
      <h4 className={cssClasses.header}>Services</h4>
      <div className={cssClasses.container}>
        <Service
          bgcolor="#000"
          textcolor="#fff"
          topic="Financial Empowerment Courses"
          description="Financially educate yourself with our fun and engaging animated videos which teaches you everything from what is inflation, what are the different strategies people use to invest in Stock market and in other markets like real estate, etc. Educate yourself about how to utilize money smartly and create a financial independent base for yourself. Learn more"
        >
          <ImportContactsIcon
            style={{
              color: "#1ab914",
              fontSize: "4rem",
            }}
          />
        </Service>
        {/* <Service
          bgcolor="#68C2FF"
          textcolor="#fff"
          topic="Invest in all Investment Avenue"
          description="Tired of using different platform for buying different asset class? Now worry no more, buy from our single platform , and the best part? You don’t have to pay different premium fees for buying different asset class from different platform. All in one investment platform – Paissat. Learn more"
        >
          <LocalAtmIcon
            style={{
              color: "#ab29d3",
              fontSize: "4rem",
            }}
          />
        </Service>
        <div className={cssClasses.image}></div>
        <Service
          bgcolor="#FFF"
          textcolor="#68C2FF"
          topic="Track Investment"
          description="Are you making profit or loss? Track your investment asset class and how it is performing. Also with our investment management portfolio, manage your investment bag and maintain liquidity so that you don’t lose a good investing opportunity . Manage your investment bag with debt based , equity based financial instruments or with gold and silver. Learn more"
        >
          <ShowChartIcon
            style={{
              color: "#1b3fa3",
              fontSize: "4rem",
            }}
          />
        </Service>
        <div className={cssClasses.image}></div>
        <Service
          bgcolor="#000"
          textcolor="#fff"
          topic="Get Exclusive Reports"
          description="Get Exclusive market reports that would help you understand whats happening in finincial markets in easy to understand words. Learn more"
        >
          <BarChartIcon
            style={{
              color: "#FF8C00",
              fontSize: "4rem",
            }}
          />
        </Service> */}
      </div>
    </div>
  );
};

export default OurServices;
