import React from 'react'
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
}

export const TodoList = ({ title, tasks, removeTask, changeTodolistFilter }: TodolistPropsType) => {

    const tasksList = tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {tasks.map(t => {
                return (
                    <li>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                        <Button title={'X'} onClickHandler={()=>removeTask(t.id)}/>
                    </li>
                )
            })}
        </ul>

    return (
        <div className='todolist'>
            <TodolistHeader title={title}/>
            <AddForm/>
            {tasksList}
            <FilterButtons changeTodolistFilter={changeTodolistFilter}/>
        </div>
    )
}
