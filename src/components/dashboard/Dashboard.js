import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        // console.log(this.props);
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard)