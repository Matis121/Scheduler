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
    if(serviceNameRef.current.value === "" || servicePriceRef.current.value === "" || serviceTimeRef.current.value === ""){
      return;
    }
    const newService = {
      id: amountOfServices, 
      serviceName: serviceNameRef.current.value, 
      servicePrice: servicePriceRef.current.value, 
      serviceTime: serviceTimeRef.current.value
    };
    addService(newService);
    props.setShowAddServiceBox(false);
    serviceNameRef.current.value = "";
    servicePriceRef.current.value = "";
    serviceTimeRef.current.value = "";
  }
  
  return (
    <div class={`${props.showAddServiceBox === true ? "flex" : "hidden" } fixed w-full h-full bg-slate-500/60 items-center justify-center z-10`}>
      <div class="fixed flex flex-col gap-6 items-center justify-center bg-white p-24 rounded-xl z-10 drop-shadow-md">
          <button onClick={() => props.setShowAddServiceBox(false)} type="button" class="absolute top-3 right-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Close</button>
          <p class='text-lg'>Add your new service</p>
          <input type="text" ref={serviceNameRef}  placeholder='name' class='border rounded-md p-2 mr-2' />
          <input type="number" ref={servicePriceRef}  placeholder='price' class='border rounded-md p-2 mr-2'/>
          <input type="number" ref={serviceTimeRef}  placeholder='amount of time' class='border rounded-md p-2 mr-2'/>
          <button onClick={addNewService} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Confirm</button>
      </div>
    </div>
  )
}

export default AddNewServices;