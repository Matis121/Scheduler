import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddNewClient from '../components/AddNewClient';
import { useContext } from 'react';
import ClientsContext from '../context/ClientsContext';


const Clients = () => {

  const { clients, setClients, idClient, setIdClient, firstName, setFirstName, surName, setSurName, phone, setPhone, showAddClientBox, setShowAddClientBox, handleAddNewClient, handleDeleteClient} = useContext(ClientsContext);

  return (
      <section className='flex'>
        <Sidebar />
        <div className='flex flex-col w-screen items-center justify-center'>
          <AddNewClient addNewClient={handleAddNewClient} setFirstName={setFirstName} setSurName={setSurName} setPhone={setPhone} firstName={firstName} surName={surName} phone={phone} showAddClientBox={showAddClientBox} setShowAddClientBox={setShowAddClientBox}/>
          <div className='h-full w-full flex flex-col justify-start items-start bg-slate-100'>
            <div className='flex items-center justify-center w-full border-2'>
              <p className='p-4 font-bold text-2xl text-center'>KLIENCI</p>
              {clients.length > 0 ? <button className='bg-slate-300 p-2 rounded-xl absolute right-20' onClick={() => setShowAddClientBox(!showAddClientBox)}>Dodaj klienta</button> : null}
            </div>
            {clients.length === 0 ? <span className='flex flex-col gap-8 self-center mt-48 p-12 bg-slate-200 rounded-xl'>Twoja baza klientów jest pusta<button className='bg-slate-300 p-2 rounded-xl' onClick={() => setShowAddClientBox(!showAddClientBox)}>Dodaj klienta</button></span> : <div>
            {clients.map(client => <div className='p-4'><p key={idClient} >{client.firstName} {client.surName} {client.phoneNumber}</p>
            <button className='border py-2 px-4 rounded-md' onClick={() => handleDeleteClient(client.id)}>Usuń</button></div>)}
            </div>}
          </div>
        </div>
      </section>
  )
}

export default Clients;