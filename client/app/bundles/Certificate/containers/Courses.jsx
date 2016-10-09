import React, { PropTypes } from 'react';
import Course from '../components/Course';

export default class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {courses: []};
  }

  componentDidMount() {
    $.get(this.props.source, function (result) {
      this.setState({courses: result});
    }.bind(this));
  }

  render() {
    return (
      <div><pre>{JSON.stringify(this.state.courses, null, 2) }</pre></div>  
    )
  }

}