import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import cssClasses from './TopicList.module.css';

const TopicLIsts = (props) => {

    const topicList = props.topics.map((topic, index) => {
        return (
            <ListItem key={index} button style={{paddingTop: 0, paddingBottom: 0}} >
                <ListItemIcon>
                    <DeleteForeverIcon onClick={props.removeTopic.bind(null, index)} />
                </ListItemIcon>
                <ListItemText primary={topic} />
            </ListItem>
        );
    });

    return (
        <List className={cssClasses.List} component="nav" aria-label="main mailbox folders">
            {topicList}
        </List>
    );
};

export default TopicLIsts;

