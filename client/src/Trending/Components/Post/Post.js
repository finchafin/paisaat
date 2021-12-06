import React, { useState, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import UserState from "../../../store/user-state";
import Comments from "./Comments/Comments";
import cssClasss from "./Post.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
    marginBottom: 15,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(props.liked);
  const [likesCount, setLikesCount] = useState(props.likesCount);

  const userCTX = useContext(UserState);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const displayTopics = props.topics.map((topic, index) => {
    return (
      <Typography
        key={index}
        variant="h6"
        component="p"
        style={{ color: "#2BAE66" }}
        gutterBottom
      >
        #{topic}
      </Typography>
    );
  });

  const fulldate = props.date;
  const date = fulldate.slice(0, 10);

  let likedClasses = "";
  if (liked) {
    likedClasses = cssClasss.red;
  }

  const likePostHandler = () => {
    if (!liked) {
      setLiked(true);
      setLikesCount((prevCount) => prevCount + 1);

      const data = {
        postId: props.id,
        userId: userCTX.user._id,
      };
      fetch("/likePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.msg === "Server Error") {
            setLiked(false);
            setLikesCount((prevCount) => prevCount - 1);
          }
        })
        .catch((err) => {
          console.log("err");
          setLiked(false);
          setLikesCount((prevCount) => prevCount - 1);
        });
    } else {
      setLiked(false);
      setLikesCount((prevCount) => prevCount - 1);

      const data = {
        postId: props.id,
        userId: userCTX.user._id,
      };
      fetch("/unlikePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.msg === "Server Error") {
            setLiked(true);
            setLikesCount((prevCount) => prevCount + 1);
          }
        })
        .catch((err) => {
          console.log("err");
          setLiked(true);
          setLikesCount((prevCount) => prevCount + 1);
        });
    }
  };

  

  return (
    <Paper className={classes.root} style={{margin: "auto"}} elevation={3}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.owner[0]}
            </Avatar>
          }
          title={props.owner}
          subheader={date}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {props.text}
          </Typography>
          {displayTopics}
        </CardContent>
        {props.imgUrl && (
          <img
            className={cssClasss.postImage}
            src={`/${props.imgUrl}`}
            alt="Post upload"
          />
        )}
        <CardActions disableSpacing>
          <IconButton onClick={likePostHandler} aria-label="add to favorites">
            <ThumbUpIcon className={likedClasses} />
          </IconButton>{" "}
          &nbsp; {likesCount} Likes
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <QuestionAnswerIcon />
          </IconButton>
          Comments &nbsp;
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Comments id={props.id} />
          </CardContent>
        </Collapse>
      </Card>
    </Paper>
  );
}
