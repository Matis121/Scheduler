import React, { useRef } from 'react';
import { useClientStore } from "../stores/store";

const AddNewClient = (props) => {
  const addClient = useClientStore((state) => state.addClient);
  const clientStore = useClientStore((state) => state.clients);

  const firstNameRef = useRef();
  const surNameRef = useRef();
  const phoneNumberRef = useRef();
  const amountOfClinets = clientStore.length;


  const addNewClient = () => {
    const newClient = {
      id: amountOfClinets,
      firstName: firstNameRef.current.value,
      surName: surNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value
    };
    addClient(newClient);
    console.log(newClient);
  }

  return (
    <div className={`${props.showAddClientBox === true ? "flex" : "hidden" } fixed flex-col gap-6 items-center justify-center bg-slate-200 p-24 rounded-xl`}>
        <button className='absolute top-3 right-5 bg-slate-300 p-2 rounded-md hover:cursor-pointer' onClick={() => props.setShowAddClientBox(false)}>Close</button>
        <p className='text-lg'>Dodaj klienta</p>
        <input type="text" ref={firstNameRef} placeholder='imie' className='border rounded-md p-2 mr-2' />
        <input type="text" ref={surNameRef}   placeholder='nazwisko' className='border rounded-md p-2 mr-2'/>
        <input type="number" ref={phoneNumberRef}  placeholder='telefon' className='border rounded-md p-2 mr-2'/>
        <button onClick={addNewClient} className='border rounded-md px-6 py-2 hover:cursor-pointer bg-slate-400'>Dodaj</button>
    </div>
  )
}

export default AddNewClient;