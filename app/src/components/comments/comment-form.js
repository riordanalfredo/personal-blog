import React from 'react'
import Form from './form'
import { useForm } from 'react-hook-form'
import '../form.css'

const CommentForm = () => {
  //style
  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  const successMessage = 'Sent! Thank you for sharing an idea!'
  const errorMessage = 'Sorry, we could not reach servers. Please try again.'
  const { handleSubmit, reset } = useForm()
  const onSubmit = data => {
    netlify.handleSubmit(null, data)
    reset()
  }
  return (
    <div style={styles.outer}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Form />
      </form>
    </div>
  )
}

export default CommentForm
