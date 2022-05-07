/** @format */

import "./App.css";
import Header from "./Components/header/Header";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Spin } from "antd";
import Footer from "./Components/footer/Footer";
import { UserContext } from "./context/itemmovie-context";
import { publicRoutes } from "./routes";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFyxGQCSj2AwOdw-tDuz-DI9LTn4QSMa0",
  authDomain: "movieapp-6291c.firebaseapp.com",
  projectId: "movieapp-6291c",
  storageBucket: "movieapp-6291c.appspot.com",
  messagingSenderId: "121487576331",
  appId: "1:121487576331:web:4f89930e7caed1b8e4a60e",
  measurementId: "G-PTXRVM03RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  const [loading, setLoading] = useState(true);
  const { loadingPage, type } = useContext(UserContext);
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const respon = await axios.get(
          "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR0nJYHjOqJY60a9OJKatwQ8iBP9p6zyTPB9-mfjyLSa5TJGbalHhODluXw",
        );
        const { data } = await respon;
        setData(data);
      } catch (error) {
        console.log("Fail to get products", error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className={`App ${type ? "active" : ""}`}>
      <Header />
      {loading || loadingPage ? (
        <div className='example'>
          <Spin />
        </div>
      ) : (
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Page data={data} />}
              />
            );
          })}
          {/* <Route path='/' element={<Home data={data && data} />} />
          <Route
            path='/phimbo/*'
            element={<SeriesMovie data={data && data} />}
          />
          <Route
            path='/phimchieurap/*'
            element={<MovieTheaters data={data && data} />}
          />
          <Route
            path='/phimhoathinh/*'
            element={<Cartoon data={data && data} />}
          />
          <Route path='/phimle/*' element={<OddMovie data={data && data} />} />
          <Route
            path='/detail/:key/:detailId'
            element={<DetailPage data={data && data} />}
          />
          <Route path='/search' element={<Search data={data && data} />} />
          <Route
            path='/search/:id'
            element={<OthersMovie data={data && data} />}
          /> */}
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
