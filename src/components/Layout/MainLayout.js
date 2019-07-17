import React from "react";
import Appbar from "./Appbar";
const MainLayout = props => {
  const { children, history } = props;
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
};

export default MainLayout;
