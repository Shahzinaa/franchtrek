"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';



export default function SignupPage () {
    const [user,setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }

    return (
        <div>
      <div className='py-8 flex flex-col gap-20'>
        <div className="logo w-40">
            <Link href="/">
                < Image src={'/logo.png'} alt='logo' width={300} height={100}/>
            </Link>
        </div>

        <div className='content flex flex-col items-center justify-center'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-4xl text-white'>Sign up</h1>
            <p className='text-md text-white'>To make your own collection.</p>
          </div>

          <div className="w-1/3 mt-10 py-6 flex flex-col gap-14">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-thin text-md mb-2">
                  Username
                </label>
                <input className="w-full px-3 py-2 bg-neutral-700  rounded-lg focus:outline-none focus:border-blue-500"
                  value={user.username}
                  type="text"
                  id="username"
                  onChange={(e)=> setUser ({...user, username: e.target.value}) }
                />
              </div> 

              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-thin text-md mb-2">
                  Email
                </label>
                <input className="w-full px-3 py-2 bg-neutral-700  rounded-lg focus:outline-none focus:border-blue-500"
                value={user.email}
                type="text"
                id="email"
                onChange={(e)=> setUser ({...user, email: e.target.value}) }
                />
              </div>

              <div className="mb-10">
                <label htmlFor="password" className="block text-white font-thin text-md mb-2">
                  Password
                </label>
                <input className="w-full px-3 py-2 bg-neutral-700  rounded-lg focus:outline-none focus:border-blue-500"
                value={user.password}
                type="text"
                id="password"
                onChange={(e)=> setUser ({...user, password: e.target.value}) }
                />
              </div>

              <div className="flex justify-between gap-7 items-center">
                <button
                  onClick={onSignup}  
                  type="submit"
                  className="w-full bg-transparent border border-purple-500 hover:bg-purple-500 ease-in-out duration-300 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Signup
                </button>
              </div>
            </form>
            <div className='text-center '>
              <span className='font-thin'>Already have an account?<Link href="/login" className='mx-2 text-white font-thin ease-in-out duration-300 hover:font-normal'>Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>  
    )
}