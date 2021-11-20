/* eslint-disable import/no-unresolved */
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Loading from '../layouts/loading/loading';
import PropTypes from 'prop-types'; // ES6
import { withTracker } from 'meteor/react-meteor-data';

class Index extends Component {
  /**
   * Decides route when user is authenticated or not
   */
  getChildView() {
    const user = this.props.currentUser;
    let childView = this.props.children;

    // undefined - there is a cached user but not yet verified
    // null - no cached user and not authenticated
    if (user === undefined) {
      childView = <Loading />;
    }

    return childView;
  }

  render() {
    return (
      <div className="app-layout">
        {this.getChildView()}
      </div>
    );
  }
}

Index.propTypes = {
  children: React.PropTypes.object,
  currentUser: React.PropTypes.object,
};

export default createContainer(() => ({
  currentUser: Meteor.user(),
}), Index);
