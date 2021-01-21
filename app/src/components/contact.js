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
    onSuccess: (response, context) => {},
  })
  const onSubmit = data => {
    netlify.handleSubmit(null, data)
    reset()
  }

  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alert: {
      success: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        padding: '0 2rem',
        margin: '0 auto',
        background: 'linear-gradient(90deg, #007d55, #0fb387)',
      },
      fail: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        padding: '0 2rem',
        margin: '0 auto',
        background: 'linear-gradient(90deg, #953f54,#8f5862)',
      },
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
          ref={register}
        ></textarea>
      </div>
    </>
  )

  return (
    <div style={styles.outer}>
      <NetlifyFormProvider {...netlify}>
        <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
          {netlify.success && (
            <div style={styles.alert.success}>
              <p style={{ color: 'white', margin: 0 }}>
                Sent! Thank you for contacting me.
              </p>
            </div>
          )}
          {netlify.error && (
            <div style={styles.alert.fail}>
              <p>Sorry, we could not reach servers. Please try again.</p>
            </div>
          )}
          <div style={styles.alert.fail}>
            <p style={{ color: 'white', margin: 0 }}>
              Sorry, we could not reach servers. Please try again.
            </p>
          </div>

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
