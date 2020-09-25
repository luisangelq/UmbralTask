import React from "react";

const FormTask = () => {
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name.."
            name="name"
          />
        </div>

        <div className="contenedor-input">
          <button
            type="submit"
            className="btn btn-primario btn-submit btn-block"
          >
            Add Task..
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTask;
