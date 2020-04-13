import React, { Component } from 'react';
import UserListing from './UserListing';
import Example from '../Modal/Example'

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
            <div>
                { data === '' ? <UserListing userData={ userData } getUser={ (rowData) => this.getUserData(rowData) }/>:
                <Example modalData={ data } open/>
                } 
            </div>
        );
    }
}

export default UserListingContainer;