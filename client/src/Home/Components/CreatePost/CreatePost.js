import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

import UploadButton from "./UploadButton/UploadButton";
import TopicsList from "./TopicsList/TopicsList";
import UserState from "../../../store/user-state";
import cssClasses from "./CreatePost.module.css";

const CreatePost = () => {
  const userCTX = useContext(UserState);
  const history = useHistory();

  const [postData, setPostData] = useState("");
  const [curTopic, setCurTopic] = useState("");
  const [topics, setTopics] = useState([]);
  const [file, setFile] = useState('');
  // const [fileName, setFileName] = useState('');

  const postDataChangeHandler = (event) => {
    setPostData(event.target.value);
  };

  const addTopicsHandler = (event) => {
    if(curTopic.trim() === "") {
      return;
    }
    setTopics((prevState) => {
      const newTopics = [...prevState];
      newTopics.push(curTopic);
      setCurTopic("");
      return newTopics;
    });
  };

  const deleteTopicHandler = (i) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(i, 1);
    setTopics(updatedTopics);
  };

  const currentTopicChangeHandler = (event) => {
    setCurTopic(event.target.value);
  };

  const fileInputChangeHandler = (event) => {
    setFile(event.target.files[0]);
    // setFileName(event.target.files[0].name);
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    //Checking for postData - cant be empty
    if (postData.trim() === "") {
      history.replace('/app/home');
      return;
    }

    const finaltopics = topics;
    
    if(curTopic.trim() !== ""){
        finaltopics.push(curTopic);
    } 

    const formData = new FormData()

    formData.append('postText', postData);
    formData.append('topics', finaltopics);
    formData.append('user', userCTX.user._id ? userCTX.user._id : " no user " );
    formData.append('image', file);

    try{
      const res = await axios.post('/createpost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res);
    } catch(err) {
      console.log(err);
    }
    // history.replace('/app/home');
    history.push('app/profile');
  };

  return (
    <React.Fragment>
      <Paper
        elevation={3}
        style={{ backgroundColor: "#4280c7" }}
        className={cssClasses.card}
      >
        <Typography variant="h5" gutterBottom className={cssClasses.header}>
          Share Something
        </Typography>
        <Divider />
        <form
          noValidate
          autoComplete="off"
          className={cssClasses.form}
          onSubmit={formSubmitHandler}
        >
          <div className={cssClasses.topicsContainer}>
            <TextField
              className={cssClasses.topicInput}
              label="Topics"
              value={curTopic}
              onChange={currentTopicChangeHandler}
              variant="filled"
            />
            <LibraryAddCheckIcon
              className={cssClasses.addtopic}
              onClick={addTopicsHandler}
            />
          </div>

          <TopicsList topics={topics} removeTopic={deleteTopicHandler} />

          <TextField
            id="filled-basic"
            className={cssClasses.postText}
            label="Write Something to Share"
            variant="filled"
            multiline
            rows={4}
            value={postData}
            onChange={postDataChangeHandler}
            placeholder="Write Something to Share"
          />

          <div className={cssClasses.buttons}>
            <UploadButton fileUpload={fileInputChangeHandler} />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<SendIcon />}
            >
              Post
            </Button>
          </div>
        </form>
      </Paper>
    </React.Fragment>
  );
};

export default CreatePost;
