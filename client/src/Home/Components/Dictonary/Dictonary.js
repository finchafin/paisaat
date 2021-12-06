import { useState } from "react";

import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";

import Meanings from "./Meanings/Meanings";
import cssClasses from "./Dictonary.module.css";

const Dictonary = () => {
  const [word, setWord] = useState("");

  const wordChangeHandler = (e) => {
    setWord(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(word);
  }

  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.label}>Search for meanings</div>
      <form noValidate autoComplete="off" onSubmit={formSubmitHandler} className={cssClasses.form}>
        <Input
          onChange={wordChangeHandler}
          value={word}
          placeholder="Enter a word"
          inputProps={{ "aria-label": "description" }}
        />
        <SearchIcon className={cssClasses.search} onClick={formSubmitHandler} />
      </form>
      <Meanings word={word} />
    </div>
  );
};

export default Dictonary;
