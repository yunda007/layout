import React from 'react';
import { Carousel } from 'antd';
import image1 from '../../assets/images/software.jpg'
import imagen1 from '../../assets/images/ambiental.jpg'
import image2 from '../../assets/images/salud.jpg'

const items = [
  {
    key: '1',
    image: image1 
  },
  {
    key: '2',
    image: imagen1
  },
  {
    key: '3',
    image: image2
  },
]

function AppEstudio() {
  return (
    <div id="estudio" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid" col="col-12">
              <div className="content" col="col-12">
                <img alt="Modern Design" src={item.image} height="300%" width="200%"/>
                
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppEstudio;
