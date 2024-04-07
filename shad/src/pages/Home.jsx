import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Video from './Video';
import Navigation from './Navigation';

const Home = () => {
  useEffect(()=>{
    const x = async()=>{
      const {ethereum} = window
      const account = await ethereum.request({
        method: "eth_requestAccounts"
      })
    }
    x()
  },[])
  return (
    <div className="bg-black min-h-screen ">
      {/* Hero Section */}
      <Video/>
      
      <div className='absolute top-8 right-9 z-10'>

                <button className='bg-indigo-600 text-white rounded-full px-6 py-2'><Link to='/details'>Sell</Link></button>
            </div>

            <div className='absolute top-8 right-32 z-10'>
                <button className='bg-indigo-600 text-white rounded-full px-6 py-2'><Link to='/dashboard'>Buy</Link></button>
            </div>
            
      <div className="h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.jpg')" }}></div>
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navigation className='absolute z-10'/>
        <div className='  lg:text-8xl font-extrabold leading-tight mb-4'>
           
        <span className="bg-clip-text text-transparent bg-gradient-to-r text-white">tessera </span>
        </div>    

        
          <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-blue-300">Fractional </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white">Real Estate</span>
          </h1>
          <p className="text-xl text-white lg:text-2xl font-medium mb-8">Own shareholding in multiple properties, in a fraction of the cost</p>
          <div className="bg-white bg-opacity-10 p- rounded-lg inline-block">
            <p className="text-3xl text-white font-semibold">Democratizing Real Estate Ownership</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className=" relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray- rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center h-20 mb-4">
                  <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Property Tokenization</h3>
                <p className="text-white text-2xl">Convert real estate assets into digital tokens, enabling fractional ownership and liquidity.</p>
              </div>
            </div>
            <div className=" rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center h-20 mb-4">
                  <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl text-white  font-semibold text-whtie mb-2">Token Trading</h3>
                <p className="text-white text-2xl">Buy and sell tokenized real estate assets on our secure and transparent platform.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-center h-20 mb-4">
                  <svg className="h-16 w-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl  font-semibold text-white mb-2">Investor Community</h3>
                <p className="text-white text-2xl">Join our vibrant community of real estate investors and participate in discussions and networking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <header className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
          The future of real estate is here. <br/><span className="text-orange-500">Own a piece of it.</span>
          </h1>
          <p className="text-gray-100 text-2xl">
          Unlock the potential of RWA. Explore our investment options.
          </p>
        </div>
      </header>

      <main className="py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-last">
            <img
              src="/8.png"
              alt="Placeholder"
              className="opacity-80  w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Why <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-blue-200 text-5xl'>tessera?</span>
            </h2>
            <p className=" text-white font-bold text-2xl mb-4">
            Ditch the spreadsheets and unlock the potential of real estate with a tap. <br/><br/>Our platform revolutionizes RWA investing, shattering the traditional barriers to entry.<br/><br/> Now, anyone can become a real estate mogul, owning fractions of iconic properties and earning passive income. Forget locked-in investments and limited options.
            <br/><br/> Invest smarter, not harder, with the future of real estate in your pocket.
            </p>
          </div>
        </section>
      </main>
    </div>
    </div>
  );
};

export default Home;