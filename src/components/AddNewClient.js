import React from 'react';


const AddNewClient = (props) => {

  return (
    <div className={`${props.showAddClientBox === true ? "flex" : "hidden" } fixed flex-col gap-6 items-center justify-center bg-slate-200 p-24 rounded-xl`}>
        <button className='absolute top-3 right-5 bg-slate-300 p-2 rounded-md hover:cursor-pointer' onClick={() => props.setShowAddClientBox(false)}>Close</button>
        <p className='text-lg'>Dodaj klienta</p>
        <input type="text" onChange={(e) => props.setFirstName(e.target.value)} value={props.firstName} name='firstName' placeholder='imie' className='border rounded-md p-2 mr-2' />
        <input type="text" onChange={(e) => props.setSurName(e.target.value)} value={props.surName} name='surName' placeholder='nazwisko' className='border rounded-md p-2 mr-2'/>
        <input type="number" onChange={(e) => props.setPhone(e.target.value)} value={props.phone} name='phone' placeholder='telefon' className='border rounded-md p-2 mr-2'/>
        <button onClick={props.addNewClient} className='border rounded-md px-6 py-2 hover:cursor-pointer bg-slate-400'>Dodaj</button>
    </div>
  )
}

export default AddNewClient;