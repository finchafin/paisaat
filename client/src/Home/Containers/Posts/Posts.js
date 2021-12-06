import { useState, useEffect, useContext } from "react";

import Post from "../../Components/Post/Post";
import userState from "../../../store/user-state";
// import { Button } from "@material-ui/core";

const Posts = () => {
  const userCTX = useContext(userState);
  const [posts, setPosts] = useState([]);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    let userId = localStorage.getItem("userID");

    fetch(`/getfollowerspost/${userId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          console.log("Something went wrong");
          return;
        }
        if (res.following === 0) {
          setIsNewUser(true);
        }
        setPosts(res.posts);
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
        postUserId={post.postedBy._id}
        liked={post.likes.includes(userId)}
      />
    );
  });

  return (
    <div>
      {isNewUser && (
        <div
          style={{
            margin: "10px 0",
            padding: "5px 10px",
            color: "#2BAE66",
            fontWeight: 500,
            fontSize: "1.4rem",
          }}
        >
          Suggested Posts
        </div>
      )}
      {displayPosts}
      {/* <Button onClick={fetchMoreposts} variant="outlined" color="primary" style={{ width: "100%" }}>
        Show More
      </Button> */}
    </div>
  );
};
export default Posts;
