import React from 'react';
import 'react-responsive-modal/styles.css';
import "react-responsive-modal/styles.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Modal } from 'react-responsive-modal';
import { isEmpty } from "lodash";
import { newDate, dateSortSasc } from '../../Utils'
import './styles.scss'; 
 
export default class SessionDetails extends React.Component {
  state = {
    open: this.props.open,
    day: '',
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleDayClick = (day, { selected })  => {
    debugger;
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  onDayClick = (day, modifiers, event) => { 
    this.setState({ day: day })
   }

   renderSessionDetails = () => {
    const { modalData: { activity_periods } } = this.props
    const { day } = this.state;
    const dat = activity_periods.filter( data => new Date(data.start_time.split(" ").splice(0,3).toString()).toDateString() == new Date(day.toString()).toDateString() );
    debugger;
    
    if( dat.length > 0 ) return (
      <div className="activityContainer">Active From:
      <div className="startTime ">{ `Start Time: ${dat[0].start_time }` }</div>
      <span className=" endTime ">{ `End Time: ${ dat[0].end_time }`}</span>
      </div>
    );
    if( day !== '' ) return (
      <div className="activityContainer">Not active today </div>
    );
   }
 
  render() {
    const { modalData: { real_name, activity_periods } } = this.props;    
    const selectedDays = (activity_periods.map( day => newDate(day.start_time) )).sort(dateSortSasc);

    return (
      <div className='calendarContainer'>
        <div className="title">{ `${ real_name } login details` }</div>
        { this.renderSessionDetails() }
        <DayPicker
          month={ selectedDays[0] }
          onDayClick={ this.onDayClick }
          selectedDays={ selectedDays }
        />
      </div>
    );
  }
}