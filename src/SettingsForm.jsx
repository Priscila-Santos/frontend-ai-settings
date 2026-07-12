import React, { useState } from 'react'

const initialValues = {
  username: '',
  email: '',
  notifications: true,
  frequency: 'daily',
}

function validate(values) {
  const errors = {}
  if (!values.username.trim()) {
    errors.username = 'Username is required.'
  } else if (values.username.trim().length < 3) {
    errors.username = 'Username must be at least 3 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(values.email)) {
      errors.email = 'Email is invalid.'
    }
  }

  if (!values.frequency) {
    errors.frequency = 'Please choose an update frequency.'
  }

  return errors
}

export default function SettingsForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, type, value, checked } = e.target
    setValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, ...validate(values) }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    setTouched({ username: true, email: true, frequency: true })
    if (Object.keys(validation).length === 0) {
      setSubmitted(true)
      // emulate saving
      setTimeout(() => setSubmitted(false), 2500)
      console.log('Saved settings:', values)
    }
  }

  const isValid = Object.keys(validate(values)).length === 0

  return (
    <form className="settings-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={errors.username ? 'true' : 'false'}
          aria-describedby={errors.username ? 'username-error' : undefined}
        />
        {touched.username && errors.username && (
          <div className="error" id="username-error">{errors.username}</div>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {touched.email && errors.email && (
          <div className="error" id="email-error">{errors.email}</div>
        )}
      </div>

      <div className="field checkbox-field">
        <label htmlFor="notifications">Enable notifications</label>
        <input
          id="notifications"
          name="notifications"
          type="checkbox"
          checked={values.notifications}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="frequency">Update frequency</label>
        <select
          id="frequency"
          name="frequency"
          value={values.frequency}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        {touched.frequency && errors.frequency && (
          <div className="error">{errors.frequency}</div>
        )}
      </div>

      <div className="actions">
        <button type="submit" disabled={!isValid}>Save settings</button>
      </div>

      {submitted && <div className="saved">Settings saved!</div>}
    </form>
  )
}
