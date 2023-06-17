import React, {  useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddNewServices from '../components/AddNewServices';
import { useServiceStore } from "../stores/store";

const Services = () => {

  const removeService = useServiceStore((state) => state.removeService);
  const services = useServiceStore((state) => state.services);
  const [showAddServiceBox, setShowAddServiceBox] = useState(false);

  const handleDeleteService = (id) => {
    removeService(id);
  }

  return (
    <>
    <section className='flex'>
        <Sidebar />
        <div className='flex flex-col w-screen items-center justify-center'>
        <AddNewServices showAddServiceBox={showAddServiceBox} setShowAddServiceBox={setShowAddServiceBox} />
          <div className='h-full w-full flex flex-col justify-start items-start bg-slate-100'>
            <div className='flex items-center justify-center w-full border-2'>
              <p className='p-4 font-bold text-2xl text-center'>Usługi</p>
              {services.length > 0 ? <button className='bg-slate-300 p-2 rounded-xl absolute right-20' onClick={() => setShowAddServiceBox(!showAddServiceBox)}>Dodaj usługę</button> : null}
            </div>
            {services.length === 0 ? <span className='flex flex-col gap-8 self-center mt-48 p-12 bg-slate-200 rounded-xl'>Dodaj pierwszą usługe<button className='bg-slate-300 p-2 rounded-xl' onClick={() => setShowAddServiceBox(!showAddServiceBox)}>Dodaj klienta</button></span> : <div>
            {services.map(service => <div className='p-4'><p key={service.id} >{service.serviceName} {service.servicePrice} {service.serviceTime}</p>
            <button className='border py-2 px-4 rounded-md' onClick={() => handleDeleteService(service.id)}>Usuń</button></div>)}
            </div>}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services;