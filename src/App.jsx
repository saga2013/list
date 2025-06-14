import React from 'react'
import Card from './components/Card';
import data from './data.json'; 


const App = () => {
  return (
    <div className=' w-[1400px] h-[1200px] mx-auto '>
        <h1 className=' ml-[135px] mt-[19px] mb-[64px] text-4xl font-bold '>Users</h1>
      <div className='flex flex-wrap gap-[79px] w-[1400px] h-[1200px] mx-auto px-[80px] justify-center '>
              {data.map((el)=> <Card key={el.id} {...el}/> )}

      </div>

    </div>
  )
}

export default App