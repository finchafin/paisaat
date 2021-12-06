import { useState, useEffect, useContext } from "react";

import Post from "../../Components/Post/Post";
import userState from "../../../store/user-state";

const Posts = () => {
  const userCTX = useContext(userState);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  
    fetch(`/trendingPosts`)
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          console.log("Something went wrong");
          return;
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

  return <div>{displayPosts}</div>;
};
export default Posts;
