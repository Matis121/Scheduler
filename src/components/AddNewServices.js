import React, {useRef} from 'react';
import { useServiceStore } from "../stores/store";

const AddNewServices = (props) => {
  const addService = useServiceStore((state) => state.addService);
  const serviceStore = useServiceStore((state) => state.services);

  const serviceNameRef = useRef();
  const servicePriceRef = useRef();
  const serviceTimeRef = useRef();
  const amountOfServices = serviceStore.length;

  const addNewService = () => {
    const newService = {
      id: amountOfServices, 
      serviceName: serviceNameRef.current.value, 
      servicePrice: servicePriceRef.current.value, 
      serviceTime: serviceTimeRef.current.value
    };
    addService(newService);
    console.log(newService);
  }
  
  return (
    <div className={`${props.showAddServiceBox === true ? "flex" : "hidden" } fixed flex-col gap-6 items-center justify-center bg-slate-200 p-24 rounded-xl`}>
        <button className='absolute top-3 right-5 bg-slate-300 p-2 rounded-md hover:cursor-pointer' onClick={() => props.setShowAddServiceBox(false)}>Close</button>
        <p className='text-lg'>Dodaj usługę</p>
        <input type="text" ref={serviceNameRef}  placeholder='nazwa' className='border rounded-md p-2 mr-2' />
        <input type="text" ref={servicePriceRef}  placeholder='cena' className='border rounded-md p-2 mr-2'/>
        <input type="number" ref={serviceTimeRef}  placeholder='czas' className='border rounded-md p-2 mr-2'/>
        <button onClick={addNewService} className='border rounded-md px-6 py-2 hover:cursor-pointer bg-slate-400'>Dodaj</button>
    </div>
  )
}

export default AddNewServices;