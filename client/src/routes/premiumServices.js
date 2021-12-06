import React, { Fragment } from "react";
import { Route } from "react-router-dom";

const InvestmentAvenue = React.lazy(() =>
  import("../PremiumServices/RelatedPages/InvestmentAvenue/InvestmentAvenue")
);

const ValueInvsting = React.lazy(() =>
  import(
    "../PremiumServices/RelatedPages/InvestmentAvenue/ValueInvesting/ValueInvesting"
  )
);

const Trading = React.lazy(() =>
  import("../PremiumServices/RelatedPages/InvestmentAvenue/Trading/Trading")
);

const Bonds = React.lazy(() =>
  import("../PremiumServices/RelatedPages/InvestmentAvenue/Bonds/Bonds")
);

const Commodities = React.lazy(() =>
  import(
    "../PremiumServices/RelatedPages/InvestmentAvenue/Commodities/Commodities"
  )
);

const CryptoCurrency = React.lazy(() =>
  import(
    "../PremiumServices/RelatedPages/InvestmentAvenue/CryptoCurrency/Cryptocurrency"
  )
);

const FixedDeposit = React.lazy(() =>
  import(
    "../PremiumServices/RelatedPages/InvestmentAvenue/FixedDeposit/FixedDeposit"
  )
);

const MutualFunds = React.lazy(() =>
  import(
    "../PremiumServices/RelatedPages/InvestmentAvenue/MutualFunds/MutualFunds"
  )
);

const RealState = React.lazy(() =>
  import("../PremiumServices/RelatedPages/InvestmentAvenue/RealState/RealState")
);

const Report = React.lazy(() =>
  import("../PremiumServices/RelatedPages/Reports/Report")
);

const FinincialCources = React.lazy(() =>
  import("../PremiumServices/RelatedPages/FinanceCources/FinanceCources")
);

const PremiumServices = () => {
  return (
    <Fragment>
      <Route path="/service/investmentavenue">
        <InvestmentAvenue />
      </Route>
      <Route path="/service/trading">
        <Trading />
      </Route>
      <Route path="/service/valueinvesting">
        <ValueInvsting />
      </Route>
      <Route path="/service/mutualfunds">
        <MutualFunds />
      </Route>
      <Route path="/service/bonds">
        <Bonds />
      </Route>
      <Route path="/service/fixeddeposit">
        <FixedDeposit />
      </Route>
      <Route path="/service/commodities">
        <Commodities />
      </Route>
      <Route path="/service/realstate">
        <RealState />
      </Route>
      <Route path="/service/cryptocurrency">
        <CryptoCurrency />
      </Route>
      <Route path="/service/reports">
        <Report />
      </Route>
      <Route path="/service/cources">
        <FinincialCources />
      </Route>
    </Fragment>
  );
};

export default PremiumServices;
