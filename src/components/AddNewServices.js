import React from 'react';

const AddNewServices = (props) => {
  return (
    <div className={`${props.showAddSericeBox === true ? "flex" : "hidden" } fixed flex-col gap-6 items-center justify-center bg-slate-200 p-24 rounded-xl`}>
        <button className='absolute top-3 right-5 bg-slate-300 p-2 rounded-md hover:cursor-pointer' onClick={() => props.setshowAddSericeBox(false)}>Close</button>
        <p className='text-lg'>Dodaj usługę</p>
        <input type="text" onChange={(e) => props.setName(e.target.value)} value={props.name} name='firstName' placeholder='nazwa' className='border rounded-md p-2 mr-2' />
        <input type="text" onChange={(e) => props.setServicePrice(e.target.value)} value={props.servicePrice} name='surName' placeholder='cena' className='border rounded-md p-2 mr-2'/>
        <input type="number" onChange={(e) => props.setServiceTime(e.target.value)} value={props.serviceTime} name='phone' placeholder='czas' className='border rounded-md p-2 mr-2'/>
        <button onClick={props.addNewService} className='border rounded-md px-6 py-2 hover:cursor-pointer bg-slate-400'>Dodaj</button>
    </div>
  )
}

export default AddNewServices;