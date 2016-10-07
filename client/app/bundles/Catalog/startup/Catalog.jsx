import React from 'react';
import ReactOnRails from 'react-on-rails';

import Courses from '../containers/Courses';

const Catalog = (props) => (
  <Courses {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ Catalog });
