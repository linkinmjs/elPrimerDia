import React from "react";
import Days from "../Days/Days";
import { Divider, Row, Col } from "antd";
// import styled from "styled-components";

// const CustomDivider = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 100%;
//   height: 40%;
//   background: #f2b544;
//   z-index: 0;
//   transform: skewY(10deg);
//   transform-origin: top right;
// `;

const Calendar = () => {
  return (
    <>
      {/* <CustomDivider/> */}
      <Row justify="center" align="middle">
        <Col span={4}>
          <Divider style={{ color: "#FFFFFF" }} orientation="right">
            Llevamos
          </Divider>
        </Col>
        <Col span={12}>
          <Days />
        </Col>
        <Col span={4}>
          <Divider style={{ color: "#FFFFFF" }} orientation="left">
            de cuarentena
          </Divider>
        </Col>
      </Row>
    </>
  );
};

export default Calendar;
