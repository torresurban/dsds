import taskItems from './src/components/TaskRow.js'
import { Taskrow } from './src/components/TaskRow';


const taskTableRows = () =>
      taskItems.map(task => (
        <Taskrow task={task} key={task.name}  />
))






      console.log(taskTableRows());