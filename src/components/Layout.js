import React from "react";

function Layout(props) {
  const layout = {
    paddingTop: "4rem",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "calc(100vh - 5rem)",
    alignItems: "strech",
  };
  return <div style={layout}>{props.children}</div>;
}

export default Layout;
