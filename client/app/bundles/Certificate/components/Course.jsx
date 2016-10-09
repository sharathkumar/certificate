import React, { PropTypes } from 'react';

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {course: this.props.course};
    debugger
  }

  render() {
    return (
      <div><pre>{JSON.stringify(this.state.course, null, 2) }</pre></div>
    );
  }
}
