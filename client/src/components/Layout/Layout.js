import { Fragment } from "react";

import MenuAppBar from '../MenuAppBar/MenuAppBar';
import BottomNav from "../BottomNav/BottomNav";

const Layout = (props) => {
    return <Fragment>
        <MenuAppBar />
        <main>
            {props.children}
        </main>
        <BottomNav />
    </Fragment>
}

export default Layout;