import React, { PropTypes } from 'react';
	
// var schema = (
//   <Schema>
//     <Property
//       name="description"
//       required
//       label="Message"
//       input={<textarea placeholder="Give us details here..." />}
//     />
//     <Property
//       name="email"
//       label="Email"
//       required
//       input={<input type="email" />}
//       validate={function(v) { return /.+\@.+\..+/.test(v) }}
//     />
//   </Schema>
// )

export default class EditCertificate extends React.Component {
  render() {

    // render Form as <div /> and transfer all props to it
    // var form = this.transferPropsTo(
    //   <Form ref="form" component={React.DOM.div} />
    // )

    // return <form /> component with rendered form and a submit button
    return (
        <form onSubmit={this.onSubmit} className="MyForm">
        <input
		      name="description"
		      required
		      label="Message"
		      input={<textarea placeholder="Give us details here..." />} />

		    <input
		      name="email"
		      label="Email"
		      required
		      input={<input type="email" />}
		      validate={function(v) { return /.+\@.+\..+/.test(v) }} />

          <button type="submit">Submit</button>
        </form>
    )
  }

  onSubmit(e) {
    e.preventDefault()

    // check if form is valid
    // var validation = this.refs.form.value().validation
    // if (ReactForms.validation.isFailure(validation)) {
    //   console.log('invalid form')
    //   return
    // }

    alert('form submitted!')
  }

}