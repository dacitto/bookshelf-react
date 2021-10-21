import React from "react";
export const myBookContext = React.createContext();
export const ContextBooks = () => {
  return <myBookContext.Provider title="daci"></myBookContext.Provider>;
};
