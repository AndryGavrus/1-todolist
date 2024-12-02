import React from 'react'
import { TaskType } from './App'
import { JsxElement } from 'typescript'
import { Button } from './Button'
import { TodolistHeader } from './TodolistHeader'
import { AddForm } from './AddForm'
import { FilterButtons } from './FilterButtons'

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

export const TodoList = ({ title, tasks }: TodolistPropsType) => {

    const tasksList = tasks.length === 0
        ? <span>Your todolist is empty</span>
        : <ul>
            {tasks.map(t => {
                return (
                    <li>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                    </li>
                )
            })}
        </ul>

    return (
        <div className='todolist'>
            <TodolistHeader title={title}/>
            <AddForm/>
            {tasksList}
            <FilterButtons/>
        </div>
    )
}
