/** @format */

import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import styled from "styled-components";
import MovieItem from "../../Components/MovieItem";
import { Link, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { UserContext } from "../../../../context/itemmovie-context";
import { Navigation, Pagination as Paginationn, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "antd/dist/antd.css";

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  /* padding: 0 20px; */
  margin: 0;
  margin-top: 20px;
  position: relative;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 100%;
    background-color: #fff;
  }
  &.active {
    color: #333;
  }
  &.active::before {
    background-color: #bfbfbf;
  }
  @media only screen and (max-width: 735px) {
    font-size: 2.2rem;
    padding: 0 1rem;
  }
`;
const keyvalue = [
  {
    key: "phimchieurap",
    title: "Phim chiếu rạp",
  },
  {
    key: "phimbo",
    title: "Phim bộ",
  },
  {
    key: "phimhoathinh",
    title: "Phim hoạt hình",
  },
  {
    key: "phimle",
    title: "Phim lẻ",
  },
];

const HomePage = ({ data }) => {
  const { type } = useContext(UserContext);
  const pageSize = 18;
  const [column, setColumn] = useState(5);
  const [current, setCurrent] = useState({
    data: data.phim,
    minIndex: 0,
    maxIndex: pageSize,
    current: 1,
  });

  const onChange = page => {
    setCurrent(prev => {
      return {
        ...prev,
        current: page,
        minIndex: (page - 1) * pageSize,
        maxIndex: page * pageSize,
      };
    });
  };
  const handleClickItem = (id, keyid) => {};
  useEffect(() => {
    const columns = () => {
      if (window.innerWidth < 739) {
        setColumn(1);
      }
      if (window.innerWidth > 739 && window.innerWidth < 1024) {
        setColumn(3);
      }
      if (window.innerWidth > 1023) {
        setColumn(4);
      }
      if (window.innerWidth > 1200) {
        setColumn(5);
      }
    };
    columns();
    window.addEventListener("resize", columns);
    return () => window.removeEventListener("resize", columns);
  }, []);
  return (
    <Container>
      <Outlet />
      {keyvalue.map((item, index) => {
        const { key, title } = item;
        return (
          <div key={key}>
            <Outlet />
            <Title className={`title ${type ? "active" : ""}`}>
              {item.title}
            </Title>
            <Swiper
              spaceBetween={1}
              modules={[Navigation, Paginationn, Autoplay]}
              slidesPerView={column}
              navigation
              autoplay={{ delay: 3000 }}
              // scrollbar={{ draggable: true }}
            >
              <MovieListContainer className='row'>
                {current?.data &&
                  current?.data[key] &&
                  current.data[key].map((item, index) => {
                    return (
                      index >= current.minIndex &&
                      index < current.maxIndex && (
                        <SwiperSlide key={index}>
                          <Link to={`detail/${key}/${index}`}>
                            <MovieItem
                              onClick={handleClickItem}
                              item={item}
                              typemovie={title}
                              slide={true}
                            />
                          </Link>
                        </SwiperSlide>
                      )
                    );
                  })}
              </MovieListContainer>
            </Swiper>
          </div>
        );
      })}
      <Pagination
        pageSize={pageSize}
        current={current.current}
        total={200}
        onChange={onChange}
        showSizeChanger={false}
        size={"big"}
        style={{ textAlign: "right", marginRight: "5%", marginTop: "15px" }}
      />
    </Container>
  );
};

export default React.memo(HomePage);
