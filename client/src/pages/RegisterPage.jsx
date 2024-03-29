
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/authContex'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


function registerPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })
    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
                {
                    registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white' key={i}>
                            {error}
                        </div>
                    ))
                }
                <form action="" onSubmit={onSubmit}
                >
                    <input type="text"
                        {...register('username', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='username' />
                    {
                        errors.username && (<p className='text-red-500'>Username is required</p>)
                    }
                    <input
                        {...register('email', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='email' />
                    {
                        errors.email && (<p className='text-red-500'>Email is required</p>)
                    }
                    <input type="password"
                        {...register('password', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='password' />
                    {
                        errors.password && (<p className='text-red-500'>Password is required</p>)
                    }
                    <button type='submit'>
                        Register
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between'>
                    Already have an account? <Link to='/login'
                        className='text-sky-500'>Login</Link>
                </p>
            </div>
        </div>
    )
}

export default registerPage
