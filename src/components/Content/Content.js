import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/action';
import UserListingContainer from '../../components/UserListing/UserListingContainer'
import Loader from 'react-loader-spinner'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './styles.scss';

function loader() {
return <Loader
         type="TailSpin"
         color="#00BFFF"
         height={500}
         width={100}
         timeout={3000}
      />
}

function Content(props) {
  const { userData } = props;
  const { loading, data } = userData;
  useEffect(() => {
    props.fetchUsers()
  }, [])
    return (
        <div className="container">
          { loading ? loader() : <UserListingContainer userData={ data } /> } 
        </div>
    );
}

const mapStateToProps = state => {
    return {
      userData: state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps )(Content);
