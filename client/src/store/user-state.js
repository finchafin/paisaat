import React from "react";

const userData = React.createContext({
  isAuthenticated: false,
  user: {
    name: "",
    email: "",
    _id: "",
  },
  onLogin: () => {},
  onLogout: () => {},
});

export default userData;
