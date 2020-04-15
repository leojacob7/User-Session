import React, { Component } from 'react';
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';

class UserListing extends Component {
    parseData = (data) => {
        return data.map((val) => ({ 'name': val.real_name })) 
        }

      getUserAction = (data) => {
          const { getUser, userData } =  this.props
          const selectedUser = userData.filter(obj => obj.real_name === data.name)
          getUser( selectedUser[0] );
      }

    render() {
        const { userData } = this.props;        
        const collatedData = this.parseData(userData);
            return (
                <div className="userListingContainer">
                    <MaterialTable
                    count={ 10 }
                    paginationType='we'
                    columns={[
                        { title: 'Name', field: 'name' },
                    ]}
                    data={collatedData}
                    title="Session Details"
                    actions={[
                        {
                          icon: 'Search',
                          tooltip: 'Save User',
                          onClick: (event, rowData) => this.getUserAction(rowData)
                        }
                      ]}
                    components={{
                        Action: props => { 
                          const styles = { textTransform: 'none', margin: '10px 0px' };
                          return (
                          <Button
                            onClick={(event) => props.action.onClick(event, props.data) }
                            color="primary"
                            variant="contained"
                            style={ styles }
                            size="small"
                          >
                             Get Details
                          </Button>
                        ) },
                        Pagination: props => (
                         null
                      )}}
                    />  
                </div>
            );
    }
}

export default UserListing;