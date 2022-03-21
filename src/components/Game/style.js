import styled from "styled-components";

const BREAK_POINT_SMALL = 600;
const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  @media only screen and (max-width: ${BREAK_POINT_SMALL}px) {
    flex-direction: column;
  }
  .title {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 0px 30px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  .flex-1 {
    flex: 1;
    overflow: hidden;
    background-color: black;
    position: relative;
  }
  .candidate-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;
    margin: auto;
    transition: 0.5s;
    cursor: pointer;
  }
  .candidate-img:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  .name {
    position: absolute;
    z-index: 3;
    color: #fff;
    bottom: 10%;
    @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
      font-size: 90px;
    }
    @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
      font-size: 36pt;
    }
    -webkit-text-stroke: 1px #000;
    left: 50%;
    transform: translateX(-50%);
  }
`;
