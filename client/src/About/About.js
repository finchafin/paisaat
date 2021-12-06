import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <Container>
      <Accordion style={about}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is Paisaat?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Paisaat is the world first social media for finance only.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={about}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What do we do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We connect like minded finance enthusiast people to drive high
            engagement and give better social media experience to our users.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={about}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Our Vision.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our vision is to financially empower people and spread financial
            wisdom among the general masses for the empowerment of individuals
            while at the same time creating a global community of finance.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
const about = {
  color: "white",
  backgroundColor: "#4280c7",
  border: "1px solid white",
};
