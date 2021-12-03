import React from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  return (
    <>
      <SEO title="Contact" description="Contact description goes here" />
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </>
  )
}

export default Contact
