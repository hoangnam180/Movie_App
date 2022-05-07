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
