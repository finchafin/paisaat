import { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import Post from "../../Components/Post/Post";
import userState from "../../../store/user-state";
import { Button, Divider, Paper } from "@material-ui/core";

const Posts = () => {
  const userCTX = useContext(userState);
  const [posts, setPosts] = useState([]);
  const [isPostsEmpty, setIsPostsEmpty] = useState(false);

  useEffect(() => {
    let userId = localStorage.getItem("userID");

    fetch(`/usersAllPost/${userId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          console.log("Something went wrong");
          return;
        }
        if (res.length === 0) {
          setIsPostsEmpty(true);
        }
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userId = userCTX.user._id;

  const displayPosts = posts.map((post) => {
    return (
      <Post
        key={post._id}
        id={post._id}
        text={post.postText}
        topics={post.postTopics}
        owner={post.postedBy.name}
        likesCount={post.likesCount}
        imgUrl={post.imageUrl}
        date={post.date}
        liked={post.likes.includes(userId)}
      />
    );
  });

  return (
    <>
      {isPostsEmpty && (
        <>
          <Paper
            style={{
              margin: "10px 0",
              padding: "5px 10px",
              color: "#2BAE66",
              fontWeight: 500,
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            You have no posts to display Here
            <Divider />
            Create your First Post Today
          </Paper>
          <Link to="/app/home/createpost">
          <Button variant="contained" color="primary">
            Create Yout first post today for the finance community
          </Button>
          </Link>
        </>
      )}
      <Fragment>{displayPosts}</Fragment>
    </>
  );
};
export default Posts;
