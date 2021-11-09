import React from 'react'
import '../css/crud.css'

function Crud() {

    const [tarea, setTarea] = React.useState('')

    const agregarTarea = e => {
        e.preventDefault()
     
        e.target.reset()
        agregarTarea('')
    }
    



    


    return (
        <div className="container mt-5">
        <h3 className="text-center">CRUD simple</h3>
        <hr />
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de tareas</h4>

              <ul className="list-group">

                <li className="list-group-item">
                  
  
                  <div className="box-tareas">
                    <span className="lead">Nombre de la tarea</span>
                    <div className="box-btns">
                      <button className="btn btn-danger btn-sm float-left mx-2">Eliminar</button>
                      <button className="btn btn-warning btn-sm float-right">Editar</button>
                    </div>
                  </div>
  
                </li>

              </ul>
              
          </div>
          <div className="col-4">
            <h4 className="text-center">Formulario</h4>
                <form onSubmit={agregarTarea}>
                    <input 
                        type="text"
                        className="formulario-contact form-control mb-2"
                        placeholder="Agregue tarea nueva"
                        onChange={ e => setTarea(e.target.value)}
                    />
                    <button type="submit" className="btn-agregar btn btn-dark btn-block">Agregar</button>
                </form>
          </div>
        </div>
      </div>
    )
}

export default Crud
