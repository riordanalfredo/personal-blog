import React from 'react'
import Form from './form'
import { useForm } from 'react-hook-form'
import './form.css'

import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from 'react-netlify-forms'

const MessageMe = () => {
  //style
  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  const successMessage = 'Sent! Thank you for contacting me.'
  const errorMessage = 'Sorry, we could not reach servers. Please try again.'
  const { handleSubmit, reset } = useForm()
  const netlify = useNetlifyForm({
    name: 'react-hook-form',
    action: '/thanks',
    honeypotName: 'bot-field',
    onSuccess: (response, context) => {},
  })
  const onSubmit = data => {
    netlify.handleSubmit(null, data)
    reset()
  }
  return (
    <div style={styles.outer}>
      <NetlifyFormProvider {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
          {netlify.success && (
            <div className="alert-success">
              <p style={{ color: 'white', margin: 0 }}>{successMessage}</p>
            </div>
          )}
          {netlify.error && (
            <div className="alert-fail">
              <p style={{ color: 'white', margin: 0 }}>{errorMessage}</p>
            </div>
          )}
          <Honeypot />
          <Form />
        </NetlifyFormComponent>
      </NetlifyFormProvider>
    </div>
  )
}

export default MessageMe
