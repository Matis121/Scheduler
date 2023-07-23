import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AddNewEventToCalendar from '../components/AddNewEventToCalendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function renderEventContent(eventInfo) {
  return (
    <>
      <strong>{eventInfo.timeText}</strong>
      <p>{eventInfo.event.title}</p>
      {eventInfo.event.extendedProps.description && (
        <p>{eventInfo.event.extendedProps.description}</p>
      )}
    </>
  );
}

const Calendar = () => {

  const events = [
    {
      title: "Our first client",
      start: "2023-07-22T08:00:00",
      end: "2023-07-22T10:00:00",
      description: "This is the description for Event 1.",
    },
    {
      title: "Our first client",
      start: "2023-07-22T11:00:00",
      end: "2023-07-22T12:00:00",
    },
  ];

  const [showAddNewEvent, setShowAddNewEvent] = useState(false);
  const [allEvents, setAllEvents] = useState(events);
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: "", description: ""});

  const handleAddEvents = () => {
    setAllEvents([...allEvents, newEvent])
  }

  const eventContent = (arg) => {
    return (
      <div className="overflow-hidden h-full">
        {arg.timeText}
        <br></br>
        <strong>{arg.event.title}</strong>
        <br></br>
        <i>{arg.event.extendedProps.description}</i>
      </div>
    )
  }

  return (
    <div className='flex'>
      <Sidebar/>
      <div class="w-full"> 
      <AddNewEventToCalendar setShowAddNewEvent={setShowAddNewEvent} showAddNewEvent={showAddNewEvent} setNewEvent={setNewEvent} newEvent={newEvent} handleAddEvents={handleAddEvents}/>   
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          initialView="timeGridWeek"
          allDaySlot={false}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
          height={"100vh"}
          events={allEvents}
          selectable={true}
          eventContent={eventContent}
          select ={function(start, end){
            console.log("siema");
            setNewEvent({
              ...newEvent,
              start: start.startStr,
              end: start.endStr,
            });
            setShowAddNewEvent(true);
          }}
          editable={true}
          eventDrop={function(event){
            console.log(event);
          }}
        />
      </div>
    </div>
  )
}

export default Calendar;