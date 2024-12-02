import { error } from "console";
import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";
import {useRef, KeyboardEvent, useState, ChangeEvent} from "react";

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (newTitle: string) => void
    changeTaskStstus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export const Todolist = ({
                             title,
                             tasks,
                             removeTask,
                             changeFilter,
                             addTask,
                             changeTaskStstus,
                             filter
                         }: PropsType) => {

    const [newTitle, setNewTitle] = useState("");
    const [error, setError] = useState<null | string>(null);


    const changeFilterAllHandler = () => changeFilter('all')
    const changeFilterActiveHandler = () => changeFilter('active')
    const changeFilterCompletedHandler = () => changeFilter('completed')

    const changeFilterHandler = (value: FilterValuesType) => {
        changeFilter(value)
    }

    // const removeTaskHandler = (taskId: string) => {
    //     removeTask(taskId)
    // }

    const addTaskHandler = () => {
        if (newTitle.trim() !== '') {
            addTask(newTitle.trim());
            setNewTitle('')
        }
        else {
            setError('Title is requried')
        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === "Enter") {
            addTaskHandler()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    const mappedTasks = tasks.map(task => {
        const removeTaskHandler = () => {
            removeTask(task.id)
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeTaskStstus(task.id, e.currentTarget.checked)
        return (
            <li className={task.isDone ? "is-done" : ''} key={task.id}>
                <input onChange={onChangeHandler} type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={removeTaskHandler}>X</button>
            </li>
        )
    })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    value={newTitle}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                    className={error ? "error" : ''}
                />
                <Button onClick={addTaskHandler} title={'+'}/>
                {error && <div className="error-message">{error}</div>}
            </div>
            {
                tasks.length === 0
                    ? <p>Тасок нет</p>
                    : <ul>
                        {mappedTasks}
                    </ul>
            }
            <div>
                <Button className={filter === 'all' ?'active-filter' : ''} onClick={() => changeFilterHandler('all')}title="All"/>
                <Button className={filter === 'active' ?'active-filter' : ''} onClick={() => changeFilterHandler('active')}title="Active"/>
                <Button className={filter === 'completed' ?'active-filter' : ''} onClick={() => changeFilterHandler('completed')}title="Completed"/>
                {/*<button onClick={changeFilterCompletedHandler}>Completed</button>*/}
                {/*<button onClick={() => changeFilter('completed')}>Completed</button>*/}
            </div>
        </div>
    )
}


//--------------------------------------------------------------------------------------
//
// import {FilterValuesType, TaskType} from "./App";
// import {Button} from "./Button";
// import {useRef} from "react";
//
// type PropsType = {
//     title: string
//     tasks: TaskType[]
//     removeTask: (taskId: string) => void
//     changeFilter: (filter: FilterValuesType) => void
//     addTask: (newTitle:string) => void
// }
//
// export const Todolist = ({
//                              title,
//                              tasks,
//                              removeTask,
//                              changeFilter,
//                              addTask
//                          }: PropsType) => {
//
//
//
//     const inputRef=useRef<HTMLInputElement>(null);
//     console.log(inputRef)
//
//
//     return (
//         <div>
//             <h3>{title}</h3>
//             <div>
//                 <input ref={inputRef}/>
//                 <button onClick={()=>{
//                     if(inputRef.current){
//                         addTask(inputRef.current.value)
//                         inputRef.current.value=''
//                     }}}>+</button>
//                 {/*<Button title={'+'}/>*/}
//             </div>
//             {
//                 tasks.length === 0
//                     ? <p>Тасок нет</p>
//                     : <ul>
//                         {tasks.map(task => {
//                             return (
//                                 <li key={task.id}>
//                                     <input type="checkbox" checked={task.isDone}/>
//                                     <span>{task.title}</span>
//                                     <Button title={'x'} onClick={() => removeTask(task.id)}/>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//             }
//             <div>
//                 <Button title={'All'} onClick={() => changeFilter('all')}/>
//                 <Button title={'Active'} onClick={() => changeFilter('active')}/>
//                 <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
//             </div>
//         </div>
//     )
// }
