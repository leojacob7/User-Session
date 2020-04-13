import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Example from '../Modal/Example'
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';

class UserListing extends Component {
    parseData = (data) => {
        return data.map((val) => ({ 'name': val.real_name })) 
        }

      getUserAction = (data) => {
          const { getUser, userData } =  this.props
          const selectedUser = userData.filter(data => userData.real_name === data.real_name)
          console.log("selectedUser1 ",userData.real_name);
          console.log("selectedUser ",selectedUser);
          
          getUser( selectedUser );
      }

    render() {
        const { userData } = this.props;        
        const collatedData = this.parseData(userData);
            return (
                <div>
                    <MaterialTable
                    columns={[
                        { title: 'Name', field: 'name' },
                    ]}
                    data={collatedData}
                    title="User Data"
                    actions={[
                        {
                          icon: 'save',
                          tooltip: 'Save User',
                          onClick: (event, rowData) => this.getUserAction(rowData)
                        }
                      ]}
                    components={{
                        Action: props => (
                          <Button
                            onClick={(event) => props.action.onClick(event, props.data) }
                            color="primary"
                            variant="contained"
                            style={{textTransform: 'none'}}
                            size="small"
                          >
                            Details
                          </Button>
                        ),
                      }}
                    />  
                </div>
            );
    }
}

export default UserListing;