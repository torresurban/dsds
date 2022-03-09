//! el proposito de este componentes es generar 'tr', osea generador de filas
//? props va ser los datos que vienen desde afuera cuando usemos el componente
//* para evitar escribir el 'return', sacamos las llaves y colocamos parentesis
export const Taskrow = (props) => (
    <tr key={props.task.name}>
        <td>{props.task.name}</td>
        <td>
            <input type="checkbox" checked={props.task.done} onChange={() => props.toggleTask(props.task)} />
        </td>
    </tr>
);
