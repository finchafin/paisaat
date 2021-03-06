import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '200px'
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={props.fileUpload}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span"  startIcon={<CloudUploadIcon />}>
          Add Image
        </Button>
      </label>
    </div>
  );
}
