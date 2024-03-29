import React from 'react'
import { useTasks } from '../context/TaskContext'
import { Link } from 'react-router-dom'

function taskCard({ task }) {

    const { deleteTask } = useTasks()

    return (
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <h1 className='text-2xl font-bold'>{task.title}</h1>
            <div className='flex gap-x-2 items-center'>
                <button onClick={() => {
                    deleteTask(task._id)
                }}>Delete</button>
                <Link to={`/task/${task._id}`}>Edit</Link>
            </div>
            <p className='text-slate-300'>{task.description}</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
    )
}

export default taskCard
