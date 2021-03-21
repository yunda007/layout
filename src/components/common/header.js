import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';
import image1 from '../../assets/images/logo.png';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <img alt="Modern Design" src={image1} />
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#estudio" title="Estudio" />
            <Link href="#perfil" title="Perfil" />
            <Link href="#feature" title="Features" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#estudio" title="Estudio" />
              <Link href="#perfil" title="Perfil" />
              <Link href="#feature" title="Features" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;