/** @format */
import { Empty, Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MovieItem from "../../Components/MovieItem";
const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  min-height: 50vh;
  justify-content: center;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
const SeriesMovie = data => {
  const navigate = useNavigate();

  const handleClickItem = (id, keyid) => {
    navigate(`/detail/${keyid}/${id}`);
  };
  const pageSize = 30;
  const [current, setCurrent] = useState({
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
  return (
    <Container>
      <MovieListContainer className='row'>
        {data && data.data && data.data.phim.phimbo.length > 0 ? (
          data &&
          data.data &&
          data.data.phim.phimbo.map((item, index) => {
            return (
              index >= current.minIndex &&
              index < current.maxIndex && (
                <MovieItem
                  onClick={handleClickItem}
                  key={index}
                  id={index}
                  keyid='phimbo'
                  item={item}
                  typemovie={"Phim bộ"}
                />
              )
            );
          })
        ) : (
          <Empty description={<span>Phim này hiện chưa có...!!</span>} />
        )}
      </MovieListContainer>
      <Pagination
        pageSize={pageSize}
        current={current.current}
        total={data && data.data && data.data.phim.phimbo.length}
        onChange={onChange}
        showSizeChanger={false}
        size={"big"}
        style={{ textAlign: "right", marginRight: "5%", marginTop: "15px" }}
      />
    </Container>
  );
};

export default SeriesMovie;
