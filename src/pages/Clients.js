import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddNewClient from '../components/AddNewClient';
import { useClientStore } from "../stores/store";


const Clients = () => {

  const clients = useClientStore((state) => state.clients);
  const removeClient = useClientStore((state) => state.removeClient);
  const [showAddClientBox, setShowAddClientBox] = useState(false);

  console.log(clients);


  const handleDeleteClient = (id) => {
    removeClient(id);
  }

  return (
      <section className='flex'>
        <Sidebar />
        <div className='flex flex-col w-screen items-center justify-center'>
          <AddNewClient showAddClientBox={showAddClientBox} setShowAddClientBox={setShowAddClientBox} />
          <div className='h-full w-full flex flex-col justify-start items-start bg-slate-100'>
            <div className='flex items-center justify-center w-full border-2'>
              <p className='p-4 font-bold text-2xl text-center'>KLIENCI</p>
              {clients.length > 0 ? <button className='bg-slate-300 p-2 rounded-xl absolute right-20' onClick={() => setShowAddClientBox(!showAddClientBox)}>Dodaj klienta</button> : null}
            </div>
            {clients.length === 0 ? <span className='flex flex-col gap-8 self-center mt-48 p-12 bg-slate-200 rounded-xl'>Twoja baza klientów jest pusta<button className='bg-slate-300 p-2 rounded-xl' onClick={() => setShowAddClientBox(!showAddClientBox)}>Dodaj klienta</button></span> : <div>
            {clients.map(client => <div className='p-4'><p>{client.firstName} {client.surName} {client.phoneNumber}</p>
            <button className='border py-2 px-4 rounded-md' onClick={() => handleDeleteClient(client.id)} >Usuń</button></div>)}
            </div>}
          </div>
        </div>
      </section>
  )
}

export default Clients;