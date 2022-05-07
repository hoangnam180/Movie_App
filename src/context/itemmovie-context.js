/** @format */

import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const UserContext = createContext();
function WrapperProvider({ children }) {
  // let retrievedObject = localStorage.getItem("parentValueKey") || "{}";
  // const [movie, setMovie] = useState(JSON.parse(retrievedObject));
  const [type, setType] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const location = useLocation();
  const [loadingPage, setLoadingPage] = useState(false);
  useEffect(() => {
    // localStorage.setItem("parentValueKey", JSON.stringify(movie));
    setLoadingPage(true);
    const timeloading = setTimeout(() => {
      setLoadingPage(false);
    }, 500);
    return () => {
      clearTimeout(timeloading);
    };
  }, [location.pathname, inputSearch]);
  return (
    <UserContext.Provider
      value={{
        loadingPage,
        setLoadingPage,
        type,
        setType,
        inputSearch,
        setInputSearch,
      }}>
      {children}
    </UserContext.Provider>
  );
}
export default WrapperProvider;
