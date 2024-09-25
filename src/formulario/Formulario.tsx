import { useForm, SubmitHandler } from "react-hook-form";
import boton from "./boton.tsx";


interface Datos {
  Nombre: string;
  credito: number;
  descripcion: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Datos>();

  const onSubmit: SubmitHandler<Datos> = (data) => console.log(data);

  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Registro de Datos</h1>
      </div>
      <div className="mb-3 form-group col-sm-4">
        <label htmlFor="txtNombre" className="form-label">
          Nombre:
        </label>
        <input
          //id="txtNombre"
          type="text"
          className="form-control"
          {...register("Nombre", {
            required: true,
            minLength: 2,
            maxLength: 20,
          })}
        />
        {errors.Nombre?.type === "required" && (
          <span className="badge text-bg-info">
            {" "}

          </span>
        )}
        {errors.Nombre?.type === "minLength" && (
          <span className="badge text-bg-info">
            {" "}
            
          </span>
        )}
      </div>

      <div className="mb-3 form-group col-sm-4">
        <label htmlFor="txtdescripcion" className="form-label">
          descripcion:
        </label>
        <input
          //id="txtdescripcion"
          type="text"
          className="form-control"
          {...register("descripcion", {
            required: {
              value: true,
              message: "descripcion requerida",
            },
            minLength: {
              value: 2,
              message: "la descripción debe contener más carácteres",
            },
            maxLength: {
              value: 50,
              message: "El valor máximo para descripción carácteres",
            },
          })} 
        />
        {errors.descripcion && (
          <span className="badge text-bg-info">
            {" "}
            Debe ingresar la descripcion
          </span>
        )}
      </div>

      <div className="mb-3 form-group col-sm-4">
        <label htmlFor="txtncredito" className="form-label">
          credito:
        </label>
        <input
          //id="txtncredito"
          type="text"
          className="form-control"
          {...register("ncredito")} 
        />
        {errors.ncredito && (
          <span className="badge text-bg-info">
            {" "}
            Debe ingresar los creditos
          </span>
        )}
      </div>
      <Button texto="Guardar" />
    </form>
  );
}