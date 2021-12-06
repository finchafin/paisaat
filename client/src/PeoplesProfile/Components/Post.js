import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import Avatar from '@material-ui/core/Avatar';

const post={
    textAlign:'left',
    color:'#2BAE66',
    marginBottom:'15px'
};

const Post=(props)=>{
    return (
        props.totals.map((total, index) =>{
            return (
                <Card style={post} key={index} >
                        <CardContent>
                        <div style={{display:'flex',textAlign:'center',padding:'10px'}} >
                        <Avatar src="/broken-image.jpg" />
                            <h3 style={{margin:'5px',cursor:'pointer'}}>{total.name}</h3>
                        </div>
                        <h4 >Trends followed</h4>
                        <Typography >
                            {total.post}
                        </Typography>
                        </CardContent>
                    
                    <CardActions>
                        <Button size="small" color="primary">
                        <ThumbUpAltIcon style={{color:'#2BAE66'}}></ThumbUpAltIcon> 
                        </Button>
                        <Button size="small" color="primary">
                        <CommentIcon style={{color:'#2BAE66'}}></CommentIcon>
                        </Button>
                    </CardActions>
                </Card>
            );
        })
    )
};

export default Post;