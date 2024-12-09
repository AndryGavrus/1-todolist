import React, { useState } from 'react';
import './App.css';
import { TodoList } from './Todolist';
import { v1 } from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterValuesType = 'all'| 'active' | 'completed'

function App() {
    //BLL
    const Title = 'What to learn'
    
    const [tasks,setTasks ]= useState<Array<TaskType>>([
        {id: v1(), title:'HTML&CSS', isDone: true},
        {id: v1(), title:'JS/TS', isDone: true},
        {id: v1(), title:'React', isDone: false}
    ])

    const removeTask = (taskId: string) =>{
        const nextState: Array<TaskType> = tasks.filter(t => t.id !== taskId)
        setTasks(nextState)
    }


    //UI
    const [filter, setFilter] = useState<FilterValuesType>('all')

    const changeTodolistFilter = (nextFilter: FilterValuesType) =>{
        setFilter(nextFilter)
    }

    let filteredTasks: Array<TaskType> = tasks
    if (filter === 'active') {
        filteredTasks= tasks.filter(t => !t.isDone)
    }
    if (filter === 'completed') {
        filteredTasks= tasks.filter(t => t.isDone)
    }

    return (
        <div className="App">
            <TodoList title={Title} 
            tasks={filteredTasks} 
            removeTask={removeTask} 
            changeTodolistFilter={changeTodolistFilter}/>
        </div>
    );
}

export default App;
