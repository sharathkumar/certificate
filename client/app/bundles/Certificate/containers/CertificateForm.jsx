import React, { PropTypes } from 'react';

export default class CertificateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ""};
  }

  onSubmit(e) {
    e.preventDefault()
    debugger
    alert('form submitted!')
  }

  onChange(e){
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="MyForm">
        <div id="tab-1" className="tab-content current"> 
        <h4 className="crt-hdng"> Include Certificate</h4>
        <label className="switch">
          <input className="switch-input" type="checkbox" />
          <span className="switch-label" data-on="On" data-off="Off"></span> 
          <span className="switch-handle"></span> 
        </label>
        <h4 className="crt-hdng"> Add Certificate Name</h4>
        <input type="text" className="srch-bx" placeholder="Search Certificate" ref='name' onChange={this.onChange} value={this.state.name}/>
        
        <h4 className="crt-hdng">Select Template</h4> 
        <ul className="crtfc-lst">
        <li>
          <div className="templ-itm-bx">
          <div className="crt-img">
            <img src="/assets/certf1.png" />
            <label><a href="#"><img src="/assets/img.png" /></a></label>
          </div>
            <div className="dtls-crt">
            <label><input type="radio" /> Defualt</label>
            </div>
          </div>
        </li>
        <li>
          <div className="templ-itm-bx">
          <div className="crt-img">
            <img src="/assets/certf2.png" />
            <label><a href="#"><img src="/assets/img.png" /></a></label>
          </div>
            <div className="dtls-crt">
            <label><input type="radio" /> Traditional</label>
            </div>
          </div>
        </li>
        <li>
          <div className="templ-itm-bx">
          <div className="crt-img">
            <img src="/assets/html&css.png" />
            <label><a href="#"><img src="/assets/img.png" /></a></label>
          </div>
            <div className="dtls-crt">
            <label><input type="radio" /> Custom HTML/CSS</label>
            </div>
          </div>
        </li>
        </ul>
        <button type="submit" className="sve-crt">Save Certificate</button>
        </div>
      </form>
    )
  }

}