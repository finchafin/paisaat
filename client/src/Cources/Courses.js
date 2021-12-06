import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Container from "@material-ui/core/Container";

import CourseTitle from "./CourseTitle/CourseTitle";
import cssClasses from "./Courses.module.css";

const FinincialEmpowerment = React.lazy(() =>
  import("./Cources/FinincialEmpowerment")
);
const FinincialInteligence = React.lazy(() =>
  import("./Cources/FinincialInteligence")
);
const FinincialLitreacy = React.lazy(() =>
  import("./Cources/FinincialLetracy")
);
const Assets = React.lazy(() => import("./Cources/Assets"));
const StockMarket = React.lazy(() => import("./Cources/StockMarket"));
const Trading = React.lazy(() => import("./Cources/Trading"));
const ValueInvesting = React.lazy(() => import("./Cources/ValueInvesting"));
const Bonds = React.lazy(() => import("./Cources/Bonds"));
const MutualFunds = React.lazy(() => import("./Cources/MutualFund"));
const RealState = React.lazy(() => import("./Cources/RealState"));
const Commodities = React.lazy(() => import("./Cources/Commodities"));
const FixedDeposit = React.lazy(() => import("./Cources/FixedDeposit"));
const PPF = React.lazy(() => import("./Cources/PPF"));
const Insurance = React.lazy(() => import("./Cources/Insurance"));
const Diversification = React.lazy(() => import("./Cources/Diversification"));
const AssetBubble = React.lazy(() => import("./Cources/AssetBubble"));
const ForeignMarketExchange = React.lazy(() =>
  import("./Cources/ForeignMarketExchange")
);
const Crypto = React.lazy(() => import("./Cources/CryptoCurrency"));

const COURCES = [
  "Finincial Empowerment",
  "Finincail Intelegence & Finincial IQ",
  "Finincial Letreacy",
  "Asset And Investment Avenue",
  "Stock Market",
  "Trading",
  "Value Investing",
  "Bond & Bond Yield",
  "Mutual Funds",
  "Real State",
  "Commodities",
  "Fixed Deposit",
  "Public Provident Fund(PPF)",
  "Insurane",
  "Diversification And Investment Philosophy",
  "Asset Bubble",
  "Foreign Market Exchange",
  "Crypto Currency",
];

const Courses = () => {
  const history = useHistory();

  const startCourseHandler = (id) => {
    history.push(`/app/courses/${id}`);
  };

  return (
    <Container>
      <Switch>
        <Route path="/app/courses" exact>
          <h2 className={cssClasses.title}>Courses</h2>
          <div className={cssClasses.box}>
            {COURCES.map((course, index) => {
              return <CourseTitle name={course} key={index} clicked={() => startCourseHandler(index+1)} />;
            })}
          </div>
        </Route>
        <Route path="/app/courses/1">
          <FinincialEmpowerment />
        </Route>
        <Route path="/app/courses/2">
          <FinincialInteligence />
        </Route>
        <Route path="/app/courses/3">
          <FinincialLitreacy />
        </Route>
        <Route path="/app/courses/4">
          <Assets />
        </Route>
        <Route path="/app/courses/5">
          <StockMarket />
        </Route>
        <Route path="/app/courses/6">
          <Trading />
        </Route>
        <Route path="/app/courses/7">
          <ValueInvesting />
        </Route>
        <Route path="/app/courses/8">
          <Bonds />
        </Route>
        <Route path="/app/courses/9">
          <MutualFunds />
        </Route>
        <Route path="/app/courses/10">
          <RealState />
        </Route>
        <Route path="/app/courses/11">
          <Commodities />
        </Route>
        <Route path="/app/courses/12">
          <FixedDeposit />
        </Route>
        <Route path="/app/courses/13">
          <PPF />
        </Route>
        <Route path="/app/courses/14">
          <Insurance />
        </Route>
        <Route path="/app/courses/15">
          <Diversification />
        </Route>
        <Route path="/app/courses/16">
          <AssetBubble />
        </Route>
        <Route path="/app/courses/17">
          <ForeignMarketExchange />
        </Route>
        <Route path="/app/courses/18">
          <Crypto />
        </Route>
      </Switch>
    </Container>
  );
};

export default Courses;
