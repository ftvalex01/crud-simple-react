import React,{useState} from "react";
 import {nanoid} from 'nanoid'; 

function App() {

  const [tarea,setTarea] = useState('')
  const [tareas,setTareas] = useState([])

  const añadirTarea = (e) =>{
    e.preventDefault()
    if(!tarea.trim()){
      console.log("elemento vacio")
     return
    }
      setTareas([
        ...tareas,
        {
          id:nanoid(),nombreTarea:tarea
        }
      ])
      setTarea('')
  }
 


  return (
    <div className="container">
      <h1 className="text-center">CRUD Simple</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
              {
                tareas.map(item =>(
                  <li key={item.id} className="list-group-item">
              <span className="lead">{item.nombreTarea}</span>
              <button className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
              <button className="btn btn-warning btn-sm float-end">Editar</button>
            </li>

                ))
              }


          </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center">Formulario</h4>
        <form onSubmit={añadirTarea}>
          <input 
          className="from-control mb-2" 
          type="text" 
          placeholder="ingrese tarea"
          onChange={(e)=>setTarea(e.target.value)}
          />
          <button className="btn btn-dark btn-block" type="submit">Agregar</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
