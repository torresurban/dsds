import { useEffect, useState } from "react";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import {Taskrow} from './components/TaskRow'
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  //* quien es el propietario de estas tareas
  //* y guardar las tareas mismas
  //! para definir el estado de la aplicacion vamos usar useState, la cual nos
  //! permite definir el nombre del estado y luego agregar una funcion que nos
  //! va permitir alterar ese estado, de esta manera vamos a poder usar un estado
  //! dentro de una funcion, vamos usar este metodo para poder alterar el estado
  //? userName: este estado es para poder definir el nombre del estado
  //? setUserName: este es para poder alterarlo
  //* al colocar 'Tommy', estoy diciendo que es el propietario de las tareas
  const [userName, setUserName] = useState("Tommy");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: true },
    { name: "Task Four", done: false }
  ]);
  //TODO: con esto ya tenemos algunos datos en el estado de la aplicacion
  //TODO: luego vamos a mostrarlo en pantalla, creamos una tabla

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if(data != null) {
      setTaskItems(JSON.parse(data))
    }else{
      setUserName('Tommy Example')
      setTaskItems([
        { name: "Task One Example", done: false },
        { name: "Task Two Example", done: false },
        { name: "Task Three Example", done: true },
        { name: "Task Four Example", done: false }
      ])
      setShowCompleted(true)
      }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  },[taskItems])


const agregarTask = taskName => {
  if(!taskItems.find(t => t.name === taskName)) {
    setTaskItems([...taskItems, {name: taskName, done: false}])
  }
}


  const toggleTask = tarea =>
    setTaskItems(taskItems.map(t => (t.name === tarea.name ? {...t, done: !t.done} : t)))

  const taskTableRows = (doneValue) =>
      taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <Taskrow task={task} key={task.name} toggleTask={toggleTask} />
      ))

  return (
    <div>
      <TaskBanner nombre={userName} tareas={taskItems} />
      <TaskCreator callback={agregarTask} />

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>

        {/* vamos hacer un recorrido de los datos, y una vez recorrido vamos a ir pintando los datos en filas */}
        <tbody>{taskTableRows(false)}</tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2" >
        <VisibilityControl 
          description='Tarea Completada'
          isChecked={showCompleted}
          llamando={checked => setShowCompleted(checked)}
        />
      </div>

      {
        showCompleted && (
          <table className="table table-striped table-bordered" >
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>

          </table>
        )
      }
    </div>
  );
}

export default App;
