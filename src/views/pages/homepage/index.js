import React from 'react'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-96 px-8 h-full">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-3xl font-bold mb-4">WEB3 FundMe</h2>
          <p className="text-white text-lg mb-6">Fund 0.1 Ethers</p>
          <a href="#" className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition duration-300">Contribute Now</a>
        </div>
      </div>

    </div>
  )
}

export default HomePage
