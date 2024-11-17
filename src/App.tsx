import './App.css';
import {Todolist} from "./Todolist";
import {useState} from "react";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = 'All' | 'Completed' | 'Active'

function App() {
    // let tasks: Array<TaskType> = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS', isDone: true},
    //     {id: 3, title: 'ReactJS', isDone: false},
    //     {id: 4, title: 'Redux', isDone: false},
    //     {id: 5, title: 'Typescript', isDone: false},
    //     {id: 6, title: 'RTK query', isDone: false},
    // ]

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

//      valForDurshlag===val==='Completed'


    const removeTasks = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }


    // const [valForDurshlag, setValForDurshlag] = useState('All')

    // const changeFilter = (val: FilterValueType) => {
    //     setValForDurshlag(val)
    // }



    // const durshlagFoo=()=> {
    //     switch (valForDurshlag) {
    //         case'Completed': {
    //             return tasks.filter(el => el.isDone)
    //         }
    //         case'Active': {
    //             return tasks.filter(el => !el.isDone)
    //         }
    //         default:
    //             return tasks
    //     }
    // }


    // let durshlagVal=durshlagFoo()


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTasks={removeTasks}
                // changeFilter={changeFilter}

            />
        </div>
    );
}

export default App;
