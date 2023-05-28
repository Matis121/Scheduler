import React, {  useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddNewServices from '../components/AddNewServices';
import { useContext } from 'react';
import ServicesContext from '../context/ServicesContext';


const Services = () => {

  const { services, setServices, idServices, setidServices, handleAddNewService, handleDeleteService, name, setName, servicePrice, setServicePrice, serviceTime, setServiceTime, setshowAddSericeBox, showAddSericeBox} = useContext(ServicesContext);

  return (
    <>
    <section className='flex'>
        <Sidebar />
        <div className='flex flex-col w-screen items-center justify-center'>
        <AddNewServices name={name} setName={setName} servicePrice={servicePrice} setServicePrice={setServicePrice} serviceTime={serviceTime} setServiceTime={setServiceTime} showAddSericeBox={showAddSericeBox} setshowAddSericeBox={setshowAddSericeBox} addNewService={handleAddNewService} />
          <div className='h-full w-full flex flex-col justify-start items-start bg-slate-100'>
            <div className='flex items-center justify-center w-full border-2'>
              <p className='p-4 font-bold text-2xl text-center'>Usługi</p>
              {services.length > 0 ? <button className='bg-slate-300 p-2 rounded-xl absolute right-20' onClick={() => setshowAddSericeBox(!showAddSericeBox)}>Dodaj usługę</button> : null}
            </div>
            {services.length === 0 ? <span className='flex flex-col gap-8 self-center mt-48 p-12 bg-slate-200 rounded-xl'>Dodaj pierwszą usługe<button className='bg-slate-300 p-2 rounded-xl' onClick={() => setshowAddSericeBox(!showAddSericeBox)}>Dodaj klienta</button></span> : <div>
            {services.map(service => <div className='p-4'><p key={idServices} >{service.serviceName} {service.servicePrice} {service.serviceTime}</p>
            <button className='border py-2 px-4 rounded-md' onClick={() => handleDeleteService(service.id)}>Usuń</button></div>)}
            </div>}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services;