import React,{useState} from "react";
 import {nanoid} from 'nanoid'; 

function App() {

  const [tarea,setTarea] = useState('')
  const [tareas,setTareas] = useState([])
  const [modoEdicion,setModoEdicion] = useState(false)
  const [id , setId] = useState('')
  const [error,setError] = useState(null)



  const añadirTarea = (e) =>{
    e.preventDefault()
    if(!tarea.trim()){
      console.log("Elemento vacio")
      setError("Escriba la tarea")
     return
    }
      setTareas([
        ...tareas,
        {
          id:nanoid(),nombreTarea:tarea
        }
      ])
      setTarea('')
      setError(null)
  }
 const eliminarTarea = (id) =>{
   const tareasFiltradas = tareas.filter(item=> item.id !== id)

  setTareas(tareasFiltradas)
 }
const editarTareas = item =>{
  setModoEdicion(true)
  setTarea(item.nombreTarea)
  setId(item.id)
}

const editarTarea = (e) =>{
  e.preventDefault()
  if(!tarea.trim()){
    console.log('Elemento vacio')
    setError("Escriba la tarea")
    return
  }
  const arrayEditado = tareas.map(item => item.id === id ? {id,nombreTarea:tarea} : item)

  setTareas(arrayEditado)
  setModoEdicion(false)
  setTarea('')
  setId('')
  setError(null)

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
                tareas.length === 0 ? (
                  <li className="list-group-item">'No hay tareas'</li>) :   tareas.map(item =>(
                  <li key={item.id} className="list-group-item">
              <span className="lead">{item.nombreTarea}</span>
              <button className="btn btn-danger btn-sm float-end mx-2" onClick={()=> eliminarTarea(item.id)}>Eliminar</button>
              <button className="btn btn-warning btn-sm float-end" onClick={()=>editarTareas(item)}>Editar</button>
            </li>

                ))
              
              }


          </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center">
          {
            modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
          }
        </h4>

        <form onSubmit={modoEdicion ? editarTarea : añadirTarea}>

          {
            error ? <span className="text-danger">{error}</span> : null
          }
          <input 
          className="from-control mb-2" 
          type="text" 
          placeholder="ingrese tarea"
          onChange={(e)=>setTarea(e.target.value)}
          value={tarea}
          />
          {
            modoEdicion ? (
              <button className="btn btn-warning btn-block mx-2" type="submit">Editar</button> 
            ) : (
              <button className="btn btn-dark btn-block" type="submit">Agregar</button>
            )
          }
         
        </form>

        </div>
      </div>
    </div>
  );
}

export default App;
