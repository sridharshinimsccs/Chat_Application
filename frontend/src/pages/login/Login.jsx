import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <h1 className='text-5xl font-bold text-center' style={{ color: '#F4D03F' }}>
        Convo Connect
      </h1>
      
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70'> {/* Darker background */}
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-lg label-text text-white'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className='w-full input input-bordered h-10 text-blue-500'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-lg label-text text-white'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10 text-blue-500'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className='text-center mt-2'>
            <Link
              to='/signup'
              className='text-lg hover:underline hover:text-sand-500'
              style={{ color: '#F4D03F' }} // Inline style for sand color
            >
              {"Don't"} have an account?
            </Link>
          </div>

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
