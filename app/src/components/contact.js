import React from 'react'
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from 'react-netlify-forms'
import { useForm } from 'react-hook-form'
import './contact.css'

const Contact = ({}) => {
  const { register, handleSubmit, errors, reset } = useForm()
  const netlify = useNetlifyForm({
    name: 'react-hook-form',
    action: '/thanks',
    honeypotName: 'bot-field',
    onSuccess: (response, context) => {
      console.log(response, context)
      console.log('Successfully sent form data to Netlify Server')
    },
  })
  const onSubmit = data => {
    netlify.handleSubmit(null, data)
    console.log(data)
    reset()
  }

  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  const InputName = (
    <>
      <div className="input">
        <label htmlFor="name">Name* </label>
        {/* use role="alert" to announce the error message */}
        {errors.name && errors.name.type === 'required' && (
          <span role="alert" style={{ color: 'maroon' }}>
            (this is required)
          </span>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <span role="alert" style={{ color: 'maroon' }}>
            (max length exceeded)
          </span>
        )}
        <input
          id="name"
          placeholder="Your name"
          name="name"
          type="text"
          aria-invalid={errors.name ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />
      </div>
    </>
  )

  const InputEmail = (
    <>
      <div className="input">
        <label htmlFor="email">Email* </label>
        {/* use role="alert" to announce the error message */}
        {errors.email && (
          <span role="alert" style={{ color: 'maroon' }}>
            {errors.email.message}
          </span>
        )}
        <input
          id="email"
          name="email"
          placeholder="your.email@domain.com"
          type="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          ref={register({
            required: '(this is required)',
            pattern: {
              value: EMAIL_REGEX,
              message: '(invalid email format)',
            },
          })}
        />
      </div>
    </>
  )

  const InputTextarea = (
    <>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          rows={4}
          cols={45}
          placeholder="Hello!"
        ></textarea>
      </div>
    </>
  )

  return (
    <div style={styles.outer}>
      <NetlifyFormProvider {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
          {netlify.success && (
            <p sx={{ variant: 'alerts.success', p: 3 }}>
              Thanks for contacting me!
            </p>
          )}
          {netlify.error && (
            <p sx={{ variant: 'alerts.muted', p: 3 }}>
              Sorry, we could not reach servers. Because it only works on
              Netlify, our GitHub demo does not provide a response.
            </p>
          )}
          <Honeypot />
          <div style={styles.form}>
            {InputName}
            {InputEmail}
            {InputTextarea}
          </div>
          <input
            style={{ width: '100%', color: 'var(--bg)' }}
            type="submit"
            value="SEND"
          />
        </NetlifyFormComponent>
      </NetlifyFormProvider>
    </div>
  )
}

export default Contact
