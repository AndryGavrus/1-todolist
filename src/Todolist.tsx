import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import { FilterValuesType, TaskType } from './App'
import { JsxElement } from 'typescript'
import { Button } from './Button'
import { TodolistHeader } from './TodolistHeader'
import { AddForm } from './AddForm'
import { FilterButtons } from './FilterButtons'

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeTodolistFilter: (nextFilter: FilterValuesType) => void
    addTask: (title: string) => void
}

export const TodoList = ({ title, tasks, removeTask, changeTodolistFilter, addTask }: TodolistPropsType) => {

    // const taskInputRef = useRef<HTMLInputElement>(null)

    const [taskTitle, setTaskTitle] = useState('')

    const isAddTaskPossible = taskTitle.length <= 15

    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle('')
    }

    const setTaskTitleHandler = (e:ChangeEvent<HTMLInputElement>)=>setTaskTitle(e.currentTarget.value)

    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>)=> {
        if ((taskTitle.length && isAddTaskPossible) && e.key === 'Enter' ) {
            addTaskHandler()
        }
    }

    const tasksList = tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {tasks.map(t => {
                return (
                    <li>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                        <Button title={'X'} onClickHandler={() => removeTask(t.id)} />
                    </li>
                )
            })}
        </ul>

    return (
        <div className='todolist'>
            <TodolistHeader title={title} />
            {/* <AddForm/> */}
            <div>
                <input
                    value={taskTitle}
                    onChange={setTaskTitleHandler}
                    onKeyDown={onKeyDownHandler}/>
                    {/* placeholder='Max task title 15 charters'
                    ref={taskInputRef}  */}
                    
                <Button 
                    isBtnDisabled={!taskTitle.length || !isAddTaskPossible} 
                    title='+' 
                    onClickHandler={() => {addTaskHandler()}}/>
                {/*   {
                    if (taskInputRef.current) {
                        addTask(taskInputRef.current.value)
                        taskInputRef.current.value = ''
                    }
                 */}
                
            </div>
            {!taskTitle.length && <div>Enter task title (max 15 chars)</div>}
            {!isAddTaskPossible && <div>Task title is too long</div>}
            {tasksList}
            <FilterButtons changeTodolistFilter={changeTodolistFilter} />
        </div>
    )
}
