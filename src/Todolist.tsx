import {FilterValueType, TaskType} from "./App";
import {Button} from "./Button";
import {useState} from "react";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTasks: (  taskId: number) => void

}

export const Todolist = ({
                             title,
                             tasks,
                             removeTasks,


                         }: PropsType) => {





    
    const [valForDurshlag, setValForDurshlag] = useState('All')
    
    const changeFilter = (val: FilterValueType) => {
        setValForDurshlag(val)
    }
    
    
    
    const durshlagFoo=()=> {
        switch (valForDurshlag) {
            case'Completed': {
                return tasks.filter(el => el.isDone)
            }
            case'Active': {
                return tasks.filter(el => !el.isDone)
            }
            default:
                return tasks
        }
    }
    
    
    let durshlagVal=durshlagFoo()

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {durshlagVal.map((task) => {
                            return <li key={task.id}>
                                <button onClick={() => removeTasks(task.id)}>X</button>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>

                            </li>
                        })}
                    </ul>
            }
            <div>
                <button onClick={() =>changeFilter('All')}>All</button>
                <button onClick={() =>changeFilter('Active')}>Active</button>
                <button onClick={() =>changeFilter('Completed')}>Completed</button>


                {/*<Button title={'All'}/>*/}
                {/*<Button title={'Active'}/>*/}
                {/*<Button title={'Completed'}/>*/}
            </div>
        </div>
    )
}
