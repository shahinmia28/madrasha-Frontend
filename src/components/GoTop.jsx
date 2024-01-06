import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GoTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <a
        data-aos="zoom-in-up"
        href="#top"
        className={scrollPosition > 500 ? "go-top active" : "go-top "}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s linear;
  z-index: 15;

  .go-top {
    display: none;
    opacity: 0;
    text-decoration: none;
    color: #fff;
    background: #062a4d;
    font-size: 20px;
    padding: 12px 20px;
    box-shadow: 0 0 10px -2px #fff;
    transition: all 0.4s linear;

    &:hover {
      color: #d0df56;
      background: #041a30;
    }
    &.active {
      display: block;
      opacity: 1;
    }
  }
`;
export default GoTop;
