import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Tecnico',
    content: 'Duracion : 4 semestres',
    content1: 'Título que otorga: Técnico Profesional',
    content2: 'Créditos: 77',

    
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Tecnologo',
    content: 'Duracion : 6 semestres',
    content1: 'Título que otorga: Ténologo Profecional',
    content2: 'Créditos: 109',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Ingenieria',
    content: 'Duracion : 10 semestres',
    content1: 'Título que otorga: Ingeniero de Software',
    content2: 'Créditos: 168',
    
  },
]

function AppPerfil() {
  return (
    <div id="perfil" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Perfil Profecional</h2>
        </div>
        <div className="contentHolder">
          <p>El Profesional de Ingeniería Ambiental estará en capacidad de diagnosticar y aplicar propuestas de solución a problemáticas ambientales mediante estudios ecológicos y de impacto ambiental, aplicando tecnologías endógenas y apropiadas en el desarrollo de actividades productivas y sociales.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  
                  <h5>{item.title}</h5>
                  <p align="left">{item.content}</p>
                  <p align="left">{item.content1}</p>
                  <p align="left">{item.content2}</p>
                  <p align="left">{item.content3}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppPerfil;