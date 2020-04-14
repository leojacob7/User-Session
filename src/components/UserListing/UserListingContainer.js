import React, { Component } from 'react';
import UserListing from './UserListing';
import SessionDetails from '../Modal/SessionDetails'
import './styles.scss'; 

class UserListingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    getUserData = (rowData) => {
        this.setState({ data: rowData })
    }

    render() {
        const { userData } = this.props;
        const { data } = this.state;
        return (
            <div className="contentWrapper">
                <UserListing userData={ userData } getUser={ (rowData) => this.getUserData(rowData) }/>
                 { data !== '' && <SessionDetails modalData={ data } open/> }
            </div>
        );
    }
}

export default UserListingContainer;