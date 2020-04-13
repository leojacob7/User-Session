import React from 'react';
import 'react-responsive-modal/styles.css';
import "react-responsive-modal/styles.css";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { Modal } from 'react-responsive-modal';
import './styles.scss'; 
 
export default class Example extends React.Component {
  state = {
    open: this.props.open,
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
 
  render() {
    const { open } = this.state;
    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center",
        width: "200px"
      };
    const { modalData } = this.props;
    console.log(modalData);
    
    
    return (
      <div className='calendarContainer'>
        {/* <button onClick={this.onOpenModal}>User attendance log</button> */}
        <Modal open={open} onClose={this.onCloseModal} center styles={ styles } className='modalContainer'>
          <div className="dayPicker">
            <DayPicker
              selectedDays={[
                new Date(2020, 3, 12),
                new Date(2020, 3, 2),
                {
                  after: new Date(2020, 3, 20),
                  before: new Date(2020, 3, 25),
                },
              ]}
           />
          </div>
        </Modal>
      </div>
    );
  }
}