/** @format */

import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/logo/popcorn.png";

const FooterWrap = styled.div`
  .footer__title {
    color: #989696;
  }
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: #2f2f2f;
  border-top: 1px solid #e5e5e5;
  margin: 0 auto;
  margin-top: 15px;
  .header_logo {
    width: 4.8rem;
    height: 4.8rem;
  }
  .header_logobox {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
  }
  .header_title {
    color: #ffb6c1;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    position: relative;
  }
  .header_title_inner {
    position: absolute;
    font-size: 13px;
    color: #bcdded;
  }
  & > * {
    flex: 1 100%;
  }

  .footer__addr {
    margin-right: 1.25em;
    margin-bottom: 2em;
  }

  .footer__logo {
    font-family: "Pacifico", cursive;
    font-weight: 400;
    text-transform: lowercase;
    font-size: 1.5rem;
  }

  .footer__addr h2 {
    margin-top: 1.3em;
    font-size: 15px;
    font-weight: 400;
  }

  .nav__title {
    font-weight: 400;
    font-size: 15px;
  }

  .nav__item {
    padding-left: 15px;
  }

  & address {
    font-style: normal;
    color: #999;
  }

  .footer__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    max-width: max-content;
    background-color: rgb(33, 33, 33, 0.07);
    border-radius: 100px;
    color: #2f2f2f;
    line-height: 0;
    margin: 0.6em 0;
    font-size: 1rem;
    padding: 0 1.3em;
  }

  & ul {
    list-style: none;
    padding-left: 0;
  }

  & li {
    line-height: 2em;
  }

  & a {
    text-decoration: none;
  }

  .footer__nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* flex: 2 0px; */
    align-items: center;
  }

  .footer__nav > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }

  .nav__ul a,
  .nav__item a {
    color: #999;
  }

  .nav__ul--extra {
    column-count: 2;
    column-gap: 1.25em;
  }

  .legal {
    display: flex;
    flex-wrap: wrap;
    color: #999;
  }

  .legal__links {
    display: flex;
    align-items: center;
  }

  .heart {
    color: #2f2f2f;
  }

  @media screen and (min-width: 24.375em) {
    .legal .legal__links {
      margin-left: auto;
    }
  }
  @media only screen and (max-width: 735px) {
    .footer__title {
      font-size: 1.1rem;
      margin-top: 5px;
    }
  }
  @media screen and (min-width: 40.375em) {
    .footer__nav > * {
      flex: 1;
    }

    .nav__item--extra {
      flex-grow: 2;
    }

    .footer__addr {
      flex: 1 0px;
    }

    .footer__nav {
      flex-direction: column;
      justify-content: center;
      /* flex: 2 0px; */
      align-items: center;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <ul className='footer__nav'>
        <li className='nav__item'>
          <ul className='nav__ul'>
            <li className='header_logobox'>
              <img className='header_logo' src={Logo} alt='logo' />
              <h1 className='header_title'>
                Home19<span className='header_title_inner'>film</span>
              </h1>
            </li>

            <li className='footer__title'>
              <p>
                Copyright 2021 © Home19.net Xem phim mới miễn phí nhanh chất
                lượng cao. Xem Phim online Việt Sub, Thuyết minh, lồng tiếng
                chất lượng HD. Xem phim nhanh online chất lượng cao
              </p>
            </li>
          </ul>
        </li>

        <li className='footer__title'>
          <p>Email liên hệ: ezphimmoi.net@gmail.com</p>
        </li>
      </ul>
    </FooterWrap>
  );
};

export default Footer;
