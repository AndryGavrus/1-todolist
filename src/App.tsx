import React from 'react';
import './App.css';
import { TodoList } from './Todolist';
import { v1 } from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App() {
    //BLL
    const Title_1 = 'What to learn'
    
    const tasks_1: Array<TaskType> = [
        {id: v1(), title:'HTML&CSS', isDone: true},
        {id: v1(), title:'JS/TS', isDone: true},
        {id: v1(), title:'React', isDone: false}
    ]


    //UI
    return (
        <div className="App">
            <TodoList title={Title_1} tasks={tasks_1}/>
        </div>
    );
}

export default App;
