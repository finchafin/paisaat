import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import cssClasses from "./NewComment.module.css";

const newComment = (props) => {
  return (
    <form className={cssClasses.from} onSubmit={props.submit} noValidate autoComplete="off">
      <TextField
        className={cssClasses.comment}
        style={{ margin: "0 5% 10px 30px" }}
        value={props.val}
        onChange={props.change}
        id="outlined-basic"
        label="Add a comment"
        variant="outlined"
      />
      <Button
        className={cssClasses.btn}
        style={{ marginTop: "8.5px" }}
        type="submit"
        variant="outlined"
        color="secondary"
      >
        Post
      </Button>
    </form>
  );
};

export default newComment;
