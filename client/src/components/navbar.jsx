import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContex'

function navbar() {

    const { isAuthenticated, logOut, user } = useAuth()

    return (
        <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <Link to='/'>
                <h1 className='text-2xl font-bold'>Task Manager</h1>
            </Link>
            <ul className='flex gap-x-2'>
                {isAuthenticated ? (<>
                    <li>
                        Welcome {user.username}
                    </li>
                    <li>
                        <Link to='/add-task'>New Task</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={() => {
                            logOut();
                        }} className='bg-indigo-500 px-4 py-1 rounded-sm'>Log Out</Link>
                    </li>
                </>) : (<>
                    <li>
                        <Link to='/login' className='bg-indigo-500 px-4 py-1 rounded-sm'>LogIn</Link>
                    </li>
                    <li>
                        <Link to='/register' className='bg-indigo-500 px-4 py-1 rounded-sm'>Register</Link>
                    </li>
                </>)}

            </ul>
        </nav>
    )
}

export default navbar
