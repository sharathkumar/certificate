import React from 'react';
import ReactOnRails from 'react-on-rails';

import EditCertificate from '../containers/EditCertificate';

const Certificate = (props) => (
  <EditCertificate {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ Certificate });
