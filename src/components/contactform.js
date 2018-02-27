import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch'
import Promise from 'promise-polyfill'
if (typeof window !== `undefined`) {if (!window.Promise) {window.Promise = Promise;}}

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  input, textarea {
    font-family: inherit;
    font-size: inherit;
   	background: none;
   	border: none;
   	outline: none;
   	-webkit-appearance: none;
   	-moz-appearance: none;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.base};
    border-radius: 2px;
    padding: 1em;
   	&:focus {
   		outline: none;
   	}
    &:required {
   		box-shadow: none;
   	}
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
  }
`

const Name = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 225px;
  resize: vertical;
`

const Submit = styled.input`
  background: ${props => props.theme.colors.base} !important;
  color: white !important;
  cursor: pointer;
  transition: all .2s;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`

const encode = (data) => {
  return Object.keys(data)
   .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
   .join("&");
}

class ContactForm extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
      event.preventDefault();
      this.setState({
        name: '',
        email: '',
        message:''
      });
    };

  render() {

    return (

      <Form name="contact" onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot">

        <input type="hidden" name="form-name" value="contact" />
        <p hidden><label>Don’t fill this out: <input name="bot" /></label></p>

        <Name name="name" type="text" placeholder="Full Name" value={this.state.name} onChange={this.handleInputChange} required/>
        <Email name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required/>
        <Message name="message" type="text" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} required/>
        <Submit name="submit" type="submit" value="Send" />

      </Form>

    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
