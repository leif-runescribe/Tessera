import AccountContext from '@/context/accountContext';
import React, { useContext } from 'react';


const Navigation = () => {
  const { account, isConnected, error, connectHandler, disconnectHandler } = useContext(AccountContext);

  return (
    <nav className=''>
      {error ? (
        <div className=' text-red-400 error-message'>{error.message}</div>
      ) : (
        <>
          {isConnected ? (<div className='py-8'><h1 className='text-white'>{account.slice(0, 6) + '...' + account.slice(38, 42)}</h1>
            <button type="button" className='text-white nav__connect bg-indigo-600 rounded-full px-4 py-2 ' onClick={disconnectHandler}>
              Disconnect
            </button></div>
          ) : (
            <button type="button" className='text-white nav__connect bg-indigo-600 rounded-full px-4 py-2 ' onClick={connectHandler}>
              Connect
            </button>
          )}
        </>
      )}
    </nav>
  );
};

export default Navigation;
