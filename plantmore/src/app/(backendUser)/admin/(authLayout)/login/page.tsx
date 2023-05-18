import Input from '@/app/inputs/Input'
import React from 'react'

const Login = () => {
  return (
    <div className='border-2 border-gray-300 p-10 w-[500px] rounded-md'>
      <h2 className='font-bold text-gray-600 text-3xl text-center'>Login For Admin</h2>
      <p className='text-center text-gray-600 text-sm font-light'>Please login here to manage store like an admin</p>
      <div className='flex flex-col gap-4 mt-10'>
       <Input id="email" label='Email address'></Input>
       <Input id="password" label='Password' type='password'></Input>
       <button className='bg-lime-600 py-3 text-white mt-3 hover:bg-gray-900 rounded-md'>Login</button>
      </div>
      <p className='text-center font-light mt-3'>Don't have account yet? <a href="/admin/register" className='text-gray-900 font-semibold hover:text-lime-600'>Register here</a></p>
    </div>
  )
}

export default Login