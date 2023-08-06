import React, {useRef, useState} from 'react';
import { useEffect } from 'react';
import { useClientStore, useServiceStore } from "../stores/store";

const AddNewEventToCalendar = (props) => {


const clients = useClientStore((state) => state.clients);
const services = useServiceStore((state) => state.services);
const [eventTitle, setEventTitle] = useState("");
const [eventDescription, setEventDescription] = useState("");


const addNewEvent = () => {
  if(eventTitle === ""){
    return;
  }
    setTimeout(() => {
      props.handleAddEvents();
    }, 300);
    setEventTitle("");
    setEventDescription("");
    props.setShowAddNewEvent(false);
}

useEffect(() => {
  props.setNewEvent({...props.newEvent, title: eventTitle});
}, [eventTitle]);

useEffect(() => {
  props.setNewEvent({...props.newEvent, description: eventDescription});
}, [eventDescription]);


  return (
    <div class={`${props.showAddNewEvent === true ? "flex" : "hidden" } fixed w-full h-full bg-slate-500/60 items-center justify-center z-10`}>
      <div class="fixed flex flex-col gap-6 items-center justify-center bg-white p-24 rounded-xl z-10 drop-shadow-md">
          <button onClick={() => props.setShowAddNewEvent(false)} type="button" class="absolute top-3 right-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Close</button>
          <p className='text-lg'>Create new visit:</p>
          <select name="clients" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)}>
            <option>choose client</option>
            {clients.map(client => <option key={client.id}>{client.firstName} {client.surName}</option>)}
          </select>
          <select name="services" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}>
            <option>choose service</option>
            {services.map(service => <option key={service.id}>{service.serviceName}</option>)}
          </select>
          <button onClick={addNewEvent} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Confirm</button>
      </div>
    </div>
  )
}

export default AddNewEventToCalendar;