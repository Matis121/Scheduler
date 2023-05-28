import React from 'react'
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
   <>
   <section className='flex'>
    <Sidebar />
    <p>This is our homepage</p>
   </section>
   </>
  )
}

export default Home;