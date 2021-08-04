import React from 'react';

const Item = ({ usuario }) => {
  return <li>{usuario.nombre} {usuario.apellido}</li>;
};

export default Item;