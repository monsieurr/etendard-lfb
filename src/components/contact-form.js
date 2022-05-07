import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { FormiumForm } from '@formium/react';
import { formium } from '../lib/formium';


const ContactForm = ({ data }) => {
  const [success, setSuccess] = React.useState(false);
  if (success) {
    return <div>Thank you! Your response has been recorded.</div>;
  }
  return (
    <FormiumForm
      style={{background: 'blue'}}
      data={data.formiumForm}
      onSubmit={async (values) => {
        // Send form values to Formium
        await formium.submitForm('contact-form', values);
        setSuccess(true);
      }}
    />
  );
}

/*
export default function MyContactForm(props) {
  return(
    <StaticQuery query={graphql`
    {
      formiumForm(slug: { eq: "contact-form" }) {
        id
        createAt
        name
        projectId
        schema
        slug
      }
    }
    `}render={data => <ContactForm data={data} {...props} />}
    />
  )
}*/
