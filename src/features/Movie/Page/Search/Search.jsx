/** @format */
import { Empty, Pagination } from "antd";
import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../../../context/itemmovie-context";
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
const Search = data => {
  const { inputSearch } = useContext(UserContext);
  const navigate = useNavigate();

  const merge = () => {
    let datatemp = [];
    for (let property in data?.data?.phim) {
      datatemp.push(...data?.data?.phim[property]);
    }
    return datatemp;
  };
  const merged = merge();
  const filterData =
    merged &&
    merged.filter(item => {
      if (inputSearch === "") {
        return item;
      } else {
        return item.title.toLowerCase().includes(inputSearch);
      }
    });

  const handleClickItem = id => {
    navigate(`/search/${id}`);
  };
  const pageSize = window.innerWidth < 1200 ? 28 : 30;
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
        {filterData.length > 0 ? (
          filterData.map((item, index) => {
            return (
              index >= current.minIndex &&
              index < current.maxIndex && (
                <MovieItem
                  onClick={handleClickItem}
                  key={index}
                  id={index}
                  item={item}
                  typemovie={"Tổng hợp"}
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
        total={filterData.length}
        onChange={onChange}
        showSizeChanger={false}
        size={"big"}
        style={{ textAlign: "right", marginRight: "5%", marginTop: "15px" }}
      />
      <Outlet />
    </Container>
  );
};

export default Search;
