import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();

  // Aquí debes obtener la información específica del país utilizando el ID

  return (
    <div>
      <h1>Detail Page</h1>
      <p>ID: {id}</p>
      {/* Mostrar la información específica del país */}
    </div>
  );
};

export default DetailPage;