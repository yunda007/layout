import React from 'react';

import { Row, Col } from 'antd';
import { Card } from 'antd';
import ReactPlayer from 'react-player';


function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Presentacion de la FET</h2>
        </div>
        <center>
        <Row gutter={[16, 16]}>
          
          <Col>
            <center>
            <Card
              hoverable
              cover={<ReactPlayer url='https://www.youtube.com/watch?v=lWcHzOHxgrE'
              autoplay center/>}
            >
              
            </Card>
            </center>
          </Col>
          
          
         
        </Row>
        </center>
      </div>
    </div>
  );
}

export default AppFeature;