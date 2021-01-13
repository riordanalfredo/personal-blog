import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 500,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input type="name" id="name" ref={register({ required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                ref={register({ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows={4} cols={45}></textarea>
          </div>
        </div>
        <input
          style={{ width: '100%', backgroundColor: 'var(--textLink)' }}
          type="submit"
          value="SEND"
        />
      </form>
    </div>
  )
}

export default Form
