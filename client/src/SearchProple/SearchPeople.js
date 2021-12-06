import { useState, useContext } from "react";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import UserState from '../store/user-state';
import People from "./Peoples/Peoples";
import cssClasses from "./SearchPeople.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    border: "2px solid #fff",
    // "& > *": {
    //   margin: theme.spacing(2),
    //   width: theme.spacing(25),
    //   height: theme.spacing(7),
    // },
  },
}));

const SearchPeople = () => {
  const [searchText, setSearchText] = useState("");
  const [peoplesList, setPeoplesList] = useState([]);
  const classes = useStyles();
  const userCTX = useContext(UserState);

  const searchTextChangedHandler = (e) => {
    setSearchText(e.target.value);
  };

  const formSubmitHandker = (e) => {
    e.preventDefault();

    const userId = userCTX.user._id;

    if (searchText.trim() === "") {
      return;
    }

    fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId, searchText: searchText }),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.msg){
          throw new Error("Server Failed");
        }
        setPeoplesList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const peoplesEL = peoplesList.map(people => {
    return <People key={people.id} name={people.name} id={people.id} following={people.following}/>
  });

  return (
    <Container>
      <div className={cssClasses.centre}>
        <Paper className={classes.root} elevation={3}>
          <form
            className={cssClasses.searchForm}
            onSubmit={formSubmitHandker}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              className={cssClasses.searchInput}
              label="Search"
              variant="outlined"
              value={searchText}
              onChange={searchTextChangedHandler}
            />
            <SearchIcon type="submit" className={cssClasses.searchBtn} />
          </form>
        </Paper>
      </div>
      <div className={cssClasses.people}>
        {peoplesEL}
      </div>
    </Container>
  );
};

export default SearchPeople;
