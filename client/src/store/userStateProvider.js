import { useState } from "react";

import UserState from "./user-state";

const UserStateProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const loginHandler = (user) => {
    
    setIsAuthenticated(true);
    setUserData(user);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setUserData(null);

    document.cookie = "";
    localStorage.clear();
  };

  return (
    <UserState.Provider
      value={{
        isAuthenticated: isAuthenticated,
        user: userData,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </UserState.Provider>
  );
};

export default UserStateProvider;
