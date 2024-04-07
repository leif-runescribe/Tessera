import { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null); // State for error handling
    
  useEffect(() => {
    const checkConnection = async () => {
        try {
          const { ethereum } = window;
      
          if (ethereum && ethereum.selectedAddress) {
            console.log("Connected");
            setAccount(ethereum.selectedAddress);
            setIsConnected(true);
            return; // Early exit if already connected
          }
      
          // Don't request accounts if disconnected and user explicitly disconnected
          if (!isConnected) {
            console.log("Connect please");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(ethers.utils.getAddress(accounts[0]));
            setIsConnected(true);
          }
        } catch (error) {
          console.error('Error checking connection:', error);
          setError(error); // Store error for handling
        }
      };
      

    checkConnection();

  }, [isConnected]); // Only re-run on connection state change

  const connectHandler = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.request({ method: 'eth_requestAccounts' });
        setAccount(ethers.utils.getAddress(accounts[0]));
        setIsConnected(true);
        setError(null); // Clear error on successful connection
      } else {
        console.error('No Ethereum wallet detected');
        setError(new Error('No Ethereum wallet detected')); // Set custom error
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setError(error);
    }
  };

  const disconnectHandler = async () => {
      console.log("Disconnecting")
    setAccount(null);
    setIsConnected(false);
    
  };

  return (
    <AccountContext.Provider
      value={{
        account,
        isConnected,
        error,
        connectHandler,
        disconnectHandler,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
