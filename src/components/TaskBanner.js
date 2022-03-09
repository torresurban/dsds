export const TaskBanner = props => (
    <h4 className="bg-primary text-white text-center p-4" >
        Aplicacion de tareas de {props.nombre} ({props.tareas.filter(t => !t.done).length} tareas por hacer)
    </h4>
)