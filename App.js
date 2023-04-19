import React from "react";
import "./App.css";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction"

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
// return (
//   <div className="App">
//     <FullCalendar
//       defaultView="dayGridMonth"
//       header={{
//         left: "prev,next",
//         center: "title",
//         right: "dayGridMonth,timeGridWeek,timeGridDay"
//       }}
//       themeSystem="Simplex"
//       plugins={[dayGridPlugin]}
//       events={events}
//       dateClick={renderEventContent}
//     />
    
//   </div>
// );


import {Inject,ScheduleComponent,Day,Week,Month,Agenda,} from '@syncfusion/ej2-react-schedule'
import {EventSettingsModel} from '@syncfusion/ej2-react-schedule'
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'
import events from "./events";


class App extends React.Component {
  constructor(params) {
    super(params);
    this.state={
      remoteData:new DataManager({
        url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
        adaptor:new WebApiAdaptor,
        crossDomain:true
      })
    }
  }


 


  render(){
    return (
    <ScheduleComponent currentView="Month" selectedDate={new Date(2017,5,5)} eventSettings={{dataSource:this.remoteData}}>
      <Inject services={[Day,Week,Month,Agenda]} />
      
    </ScheduleComponent>
    )
  }

}

export default App 

