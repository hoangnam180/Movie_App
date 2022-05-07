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
  justify-content: center;
  min-height: 50vh;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
const OddMovie = data => {
  const navigate = useNavigate();
  const handleClickItem = (id, keyid) => {
    navigate(`/detail/${keyid}/${id}`);
  };
  const pageSize = 28;
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
        {data && data.data && data.data.phim.phimle.length > 0 ? (
          data &&
          data.data &&
          data.data.phim.phimle.map((item, index) => {
            return (
              index >= current.minIndex &&
              index < current.maxIndex && (
                <MovieItem
                  onClick={handleClickItem}
                  key={index}
                  id={index}
                  keyid='phimle'
                  item={item}
                  typemovie={"Phim lẻ"}
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
        total={data.data.phim.phimle.length}
        onChange={onChange}
        showSizeChanger={false}
        size={"big"}
        style={{ textAlign: "right", marginRight: "5%", marginTop: "15px" }}
      />
    </Container>
  );
};

export default OddMovie;
