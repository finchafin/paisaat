import { Fragment, useState } from "react";
import { Route, useHistory } from "react-router-dom";

import Home from '../Home/Home';

import Modal from '../components/UI/Modal/Modal';
import CreatePost from '../Home/Components/CreatePost/CreatePost';

const HomePage = () => {
    const [updateposts, setUpdateposts] = useState(true);
    const histoty = useHistory();

    const closeModalHandler = () => {
        histoty.replace("/app/home");
        setUpdateposts(prev => !prev );
    }

    return (
        <Fragment>
            <Home postcreated={updateposts} />
            <Route path="/app/home/createpost">
                <Modal closeModal={closeModalHandler}>
                    <CreatePost />
                </Modal>
            </Route>
        </Fragment>
    );
};

export default HomePage;