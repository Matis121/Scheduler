import React from 'react';
import Sidebar from '../components/Sidebar';

const Calendar = () => {

  return (
    <div className='flex'>
      <Sidebar />
      {/* <div className='flex flex-col'>
        <div className='flex flex-col mb-8 p-4'>Info o klientach:
          {clients.map((client) => (
            <p key={client.id}><strong>{client.firstName} {client.surName}</strong> tel: {client.phoneNumber}</p>
          ))}
          <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
            {
              clients.map((client) => (
                <option key={client.id}>{client.firstName} {client.surName}</option>
              ))
            }
          </select>
        </div>
        <div className='flex flex-col mb-8 p-4'>Info o usługach:
          {services.map((service) => (
            <p key={service.id}><strong>{service.serviceName}</strong> - {service.servicePrice}zł ({service.serviceTime} minut)</p>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Calendar;