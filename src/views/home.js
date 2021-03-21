import React from 'react';

import AppEstudio from '../components/home/estudio';
import AppPerfil from '../components/home/perfil';
import AppFeature from '../components/home/feature';
import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppEstudio/>
      <AppPerfil/>
      <AppFeature/>
      <AppContact/>
    </div>
  );
}

export default AppHome;