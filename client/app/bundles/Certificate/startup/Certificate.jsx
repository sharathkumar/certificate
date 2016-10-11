import React from 'react';
import ReactOnRails from 'react-on-rails';

import CertificateForm from '../containers/CertificateForm';

const Certificate = (props) => (
  <CertificateForm {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ Certificate });
