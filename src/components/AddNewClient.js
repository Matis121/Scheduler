import React, { useRef, useState } from 'react';
import { useClientStore } from "../stores/store";

const AddNewClient = (props) => {
  const addClient = useClientStore((state) => state.addClient);
  const clientStore = useClientStore((state) => state.clients);

  const firstNameRef = useRef();
  const surNameRef = useRef();
  const phoneNumberRef = useRef();
  const amountOfClinets = clientStore.length;

  const [client, setClient] = useState({id, firstName, lastName, gender, phoneNumber, mail, birthday, visits})



  const addNewClient = () => {
    if(firstNameRef.current.value === "" || surNameRef.current.value === "" || phoneNumberRef.current.value === ""){
      return;
    }
    const newClient = {
      id: amountOfClinets,
      firstName: firstNameRef.current.value,
      surName: surNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value
    };
    addClient(newClient);
    props.setShowAddClientBox(false);
    firstNameRef.current.value = "";
    surNameRef.current.value = "";
    phoneNumberRef.current.value = "";
  }

  return (
    <div class={`${props.showAddClientBox === true ? "flex" : "hidden" } fixed w-full h-full bg-slate-500/60 items-center justify-center z-10`}>
      <div class="fixed flex flex-col gap-6 items-center justify-center bg-white p-24 rounded-xl z-10 drop-shadow-md">
          <button onClick={() => props.setShowAddClientBox(false)} type="button" class="absolute top-3 right-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Close</button>
          <p className='text-lg'>Add your new client</p>
          <input type="text" ref={firstNameRef}  placeholder='firstname' className='border rounded-md p-2 mr-2' />
          <input type="text" ref={surNameRef}  placeholder='surname' className='border rounded-md p-2 mr-2'/>
          <input type="number" ref={phoneNumberRef}  placeholder='phone number' className='border rounded-md p-2 mr-2'/>
          <button onClick={addNewClient} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Confirm</button>
      </div>
    </div>
  )
}

export default AddNewClient;