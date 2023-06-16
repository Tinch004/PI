import React from 'react';

const FormPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario y crear la actividad turística
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="difficulty">Dificultad</label>
          <input type="text" id="difficulty" name="difficulty" required />
        </div>
        <div>
          <label htmlFor="duration">Duración</label>
          <input type="text" id="duration" name="duration" required />
        </div>
        <div>
          <label htmlFor="season">Temporada</label>
          <input type="text" id="season" name="season" required />
        </div>
        <div>
          <label htmlFor="countries">Países</label>
          <select id="countries" name="countries" multiple required>
            {/* Opciones para seleccionar/agregar varios países */}
          </select>
        </div>
        <button type="submit">Crear Actividad</button>
      </form>
    </div>
  );
};

export default FormPage;