import { useContext, useState } from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import userState from "../../store/user-state";
import cssClasses from "./People.module.css";

const People = (props) => {
  const userCTX = useContext(userState);
  const [following, setFollowing] = useState(props.following);

  const followBtnHandler = () => {

    fetch("/addfollowing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userCTX.user._id, follow: props.id }),
    })
      .then((res) => res.json())
      .then((res) =>{
        if(res.msg === "Done"){
          setFollowing((prevState) => !prevState);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Paper className={cssClasses.People} elevation={3}> 
      <span>{props.name}</span>
      <Button
        style={{ color: following ? "#ae2b2b" : "#2BAE66" }}
        color="primary"
        onClick={followBtnHandler}
      >
        {following? "UnFollow" : "Follow"}
      </Button>
    </Paper>
  );
};

export default People;
