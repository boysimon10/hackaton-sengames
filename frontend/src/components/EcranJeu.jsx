import React from 'react';
import Paysage from './Paysage';

function EcranJeu() {
  return (
    <div className='border border-gray-500 rounded w-full min-h-128 overflow-hidden'> {/* Assurez-vous que le div parent a aussi overflow-hidden */}
      <Paysage/>
    </div>
  );
}

export default EcranJeu;