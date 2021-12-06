import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";

import cssClasses from "./Course.module.css";

export default function FixedDeposit() {
  return (
    <Container>
      <h1 className={cssClasses.header}>Fixed deposits (FD)</h1>
      <Divider className={cssClasses.line} />
      <p className={cssClasses.paragraph}>
        Fixed deposit are safe and sound saving investment scheme given by
        Indian Bank to its account holders. FDs give better interest rate to
        depositors on their money then depositors get by depositing their money
        in saving accounts. In FDs, an investor invests a lump sum amount and
        lock in specific time period which can vary from 10 days to 10 years.
        Breaking the FDs before set date of maturity attracts penalty and extra
        charges. During this lock-in period banks gives interest rate on the
        amount.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        How much interest rate a Bank gives on FD depends on the repo rate set
        by Reserve Bank of India (India Fed Reserve) . Repo rate is a term which
        simply means the rate at which RBI gives money to banks as loans and at
        that interest rate the bank had to pay back the loan. For example if the
        repo rate is 5 % , that means RBI has given loans to bank at an interest
        rate of 5 %. The banks while giving loans will charge more than 5 % from
        its borrowers , and the difference between these charging interest rate
        is what generates profit for a bank. Repo rate affect everything like
        interest rate on your car loan, home loan etc. On the basis of repo
        rate, Banks decided its FD interest rate. If the RBI decreases its repo
        rate ( because they want to stimulate demand in marketplace ) the banks
        decreases its FD interest rate too. If the RBI increases its repo rate,
        then banks increases its FDs interest rate in tandem.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        Various banks offer different rates for FD . When choosing an FD compare
        between different bank and decide which banks is offering high FD
        interest rate.
      </p>
      <br />
      <p className={cssClasses.paragraph}>
        FDs are safe , but they in no comparison at all , provide returns as
        much as you can generate by using other investment avenue. FD is more
        like a saving scheme, but just with a higher interest rate.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
