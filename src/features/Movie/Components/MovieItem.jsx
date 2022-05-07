/** @format */

import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../context/itemmovie-context";
const MovieItemContainer = styled.div`
  .inneritem {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 4px 0 #aaaaaa94;
    cursor: pointer;
    padding: 10px;
    margin-top: 15px;
  }

  .movie_item_img {
    height: 300px;
    object-fit: cover;
    overflow: hidden;
  }
  .movie_item_title {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 5px;
  }
  .movie_item_title.light {
    color: #000;
  }
  .movie_item_info {
    display: flex;
    flex-direction: column;
  }
  .movie_item_info span {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    text-transform: capitalize;
  }
  .movie_item_info.light span {
    color: #000;
  }
`;

const MovieItem = ({ item, typemovie, onClick, id, keyid, slide }) => {
  const { type } = useContext(UserContext);
  return (
    <MovieItemContainer
      onClick={() => {
        onClick(id, keyid);
      }}
      className={
        slide ? "col c-12 m-12 lm-12 l-2-12" : "col c-12 m-4 lm-3 l-2-4"
      }>
      <li className='inneritem'>
        <img className='movie_item_img' src={item.imageUrl} alt='poster' />
        <h4 className={`movie_item_title ${type ? "light" : ""}`}>
          {item.title}
        </h4>
        <div className={`movie_item_info ${type ? "light" : ""}`}>
          <span>Loại Phim: {typemovie}</span>
          <span>Thể Loại: {item.category}</span>
        </div>
      </li>
    </MovieItemContainer>
  );
};

export default MovieItem;
