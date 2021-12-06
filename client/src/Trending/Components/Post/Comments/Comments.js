import { Fragment, useState, useContext, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import NewComment from "./NewComment/NewComment";
import UserState from "../../../../store/user-state";
import cssClasses from "./Comments.module.css";

const useStyles = makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function Comment(props) {
  const [cmtText, setCmtText] = useState("");
  const [cmts, setCmts] = useState([]);
  const userCTX = useContext(UserState);
  const classes = useStyles();

  useEffect(() => {
    fetch("/getComments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId: props.id }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCmts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  const commentTextChangeHandler = (e) => {
    setCmtText(e.target.value);
  };

  const commentsSubmitHandler = (e) => {
    e.preventDefault();

    if (cmtText.trim() === "") {
      console.log("Comment empty");
      return;
    }

    const data = {
      text: cmtText,
      postId: props.id,
      userId: userCTX.user._id,
    };
    console.log(data);

    fetch("/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCmtText("");
        if(res.msg === "success") {
          const newCmt = {
            text: data.text,
            user: {
              imageUrl: userCTX.user.imageUrl,
              name: userCTX.user.name
            }
          }
          setCmts((prevCmts) => {
            const updatedCmts = [newCmt, ...prevCmts];
            return updatedCmts;
          });
        } else {
          console.log("comment failed");
        }

      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const cmts = [{name: "Swaraj Das", text: "This is a comment"}, {name: "Swaraj Das", text: "This is a comment"}];

  const comments = cmts.map((comment) => {
    return (
      <div className={cssClasses.Comment}>
        <Divider />
        <div className={cssClasses.top}>
          <Avatar className={[classes.purple, cssClasses.avatar].join(" ")}>
            {comment.user.name[0]}
          </Avatar>
          <div>
            <Typography
              className={cssClasses.name}
              style={{ padding: "0", margin: "0" }}
              variant="subtitle2"
              component="p"
              paragraph
            >
              {comment.user.name}
            </Typography>
            <Typography
              variant="body2"
              paragraph
              style={{ padding: "0", margin: "0" }}
            >
              {comment.text}
            </Typography>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <NewComment
        val={cmtText}
        change={commentTextChangeHandler}
        submit={commentsSubmitHandler}
      />
      {comments}
      <Divider className={cssClasses.lastLine} />
    </Fragment>
  );
}
