import React, {Fragment} from 'react';
import Days from './Days';
import { Divider, Row, Col} from 'antd';
import styled from 'styled-components';

const CustomDivider = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: #F2B544;
  z-index: 0;
  transform: skewY(10deg);
  transform-origin: top right;
`;

const Calendar = () => {
    return ( 
            <Fragment>
            <CustomDivider/>
            <Row>
                <Col span={12} offset={6}>
                    
                    <Divider style={{'color':'#1D3159'}} orientation="left">Llevamos</Divider>
                    <Days/>
                    <Divider style={{'color':'#1D3159'}} orientation="right">de cuarentena</Divider>
                </Col>
            </Row>
        </Fragment>
     );
}
 
export default Calendar;