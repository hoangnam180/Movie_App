/** @format */

import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Logo from "../../Assets/logo/popcorn.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/itemmovie-context";
import Switch from "../switch/Switch";
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 1rem;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
  .header_logo {
    width: 4.8rem;
    height: 4.8rem;
    margin: 0 1.5rem;
  }
  .header_logobox {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .header_title {
    color: #ffb6c1;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    position: relative;
    .header_title_inner {
      position: absolute;
      font-size: 13px;
      color: #bcdded;
    }
  }
  .header_icon {
    font-size: 2.5rem;
    color: #666;
    margin: 0 1rem;
  }
  .header_searchbox {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-radius: 0.6rem;
    margin-left: 2rem;
    width: 40%;
    overflow: hidden;
    input {
      outline: none;
    }
  }
  .input_search {
    flex: 1;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 1023px) {
    .header_searchbox {
      padding: 0.5rem;
      input {
        outline: none;
      }
    }
  }
  @media only screen and (max-width: 735px) {
    .header_title {
      font-size: 2rem;
    }
    .header_logo {
      width: 4.2rem;
      height: 4rem;
      margin: 0 0.5rem;
    }
    .header_searchbox {
      padding: 0.1rem;
      margin-left: 3px;
    }
  }
`;
const Menu = styled.div`
  padding: 0 2rem;
  padding-top: 2rem;
  .navigation {
    list-style: none;
    display: flex;
    gap: 2rem;
  }
  .navigation_link {
    display: block;
    width: 15rem;
    text-align: center;
    border-radius: 3px;
    color: #fff;
    font-size: 2rem;
    padding: 5px;
    transition: all 0.25s linear;
    &.light {
      color: rgb(0 0 0 / 82%);
    }
    &.light:hover {
      background-color: #00000042;
    }
    &.light.active {
      background-color: #00000042;
    }
    &.active {
      background-color: #eaeaea;
      color: #333;
    }
    &:hover {
      background-color: #eaeaea;
      color: #333;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1023px) {
    .navigation_link {
      width: auto;
    }
  }
  @media only screen and (max-width: 735px) {
    .navigation {
      width: 100%;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .navigation_link {
      width: 12rem;
      font-size: 1.5rem;
    }
  }
`;

const Header = props => {
  let navigate = useNavigate();
  const { setInputSearch, setType, type } = useContext(UserContext);
  const [input, setInput] = useState();
  //text Search
  const handleSearch = e => {
    let result = e.target.value.toLowerCase();
    if (result === "") {
      setInputSearch("");
    }
    setInput(result);
  };
  //click on search
  const onSearch = () => {
    navigate("/search");
    setInputSearch(input);
  };
  //onKeySearch
  const onKeySearch = e => {
    if (e.keyCode === 13) {
      navigate("/search");
      setInputSearch(input);
    }
    if (e.keyCode === 27) {
      setInputSearch("");
      setInput("");
    }
  };
  const arrNav = [
    {
      path: "/",
      name: "Trang chủ",
    },
    {
      path: "/phimbo",
      name: "Phim bộ",
    },
    {
      path: "/phimchieurap",
      name: "Phim chiếu rạp",
    },
    {
      path: "/phimhoathinh",
      name: "Phim hoạt hình",
    },
    {
      path: "/phimle",
      name: "Phim lẻ",
    },
  ];
  const handleClick = (id, item) => {};
  const handleType = () => {
    setType(!type);
  };
  return (
    <>
      <HeaderWrapper>
        <div
          onClick={() => {
            navigate("/");
          }}
          className='header_logobox'>
          <img className='header_logo' src={Logo} alt='logo' />
          <h1 className='header_title'>
            Home19<span className='header_title_inner'>film</span>
          </h1>
        </div>
        <div style={{ marginLeft: "auto", marginTop: "auto" }}>
          <Switch onClick={handleType} />
        </div>
        <div className='header_searchbox'>
          <SearchOutlined onClick={onSearch} className='header_icon' />
          <Input
            value={input}
            onKeyDown={onKeySearch}
            onChange={handleSearch}
            placeholder='Tìm tên phim'
            className='input_search'
          />
        </div>
      </HeaderWrapper>
      <Menu>
        <ul className='navigation'>
          {arrNav.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  onClick={() => handleClick(index, item)}
                  className={`navigation_link ${type ? "light" : ""}`}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Menu>
    </>
  );
};

export default Header;
