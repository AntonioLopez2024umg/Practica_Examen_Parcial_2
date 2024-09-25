import { useState } from "react";

function Crear() {
  
  const [Nombre, setNombre] = useState({
    Alumno: "",
    Credito: 0,
    Descripción: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); 
    console.log(Nombre);
  };

  const handleNombreAlumno = (e) => {
    setNombre({ ...Nombre, Alumno: e.target.value });
  };

  const handleCredito = (e) => {
    setNombre({ ...Nombre, Credito: e.target.value });
  };

  //Consumo del API con la petición HTTP Post
  const fetchData = async () => {
    fetch("https://test-deploy-12.onrender.com/cursos", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Nombre: Nombre.Alumno,
        Credito: Nombre.Credito,
      }),
    }).then((response) => response.json());
  };
  return (
    <div className="container-sm border border-3 rounded-1">
      <h1>Creación de Alumnos</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ej. Pedro"
            onChange={handleNombreAlumno}
            value={Nombre.Alumno}
          />
          <label htmlFor="name">Nombre de Alumno</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Ej. 35"
            onChange={handleCredito}
            value={Nombre.Credito}
          />
          <label htmlFor="Credito">Credito</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-25"
          onClick={fetchData}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Crear;