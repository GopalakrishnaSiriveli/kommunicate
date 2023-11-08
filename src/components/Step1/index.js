import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Step1() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})

  const handleNext = () => {
    if (!name || !email || !phone) {
      setErrors({
        name: !name ? 'This field is required' : '',
        email: !email ? 'This field is required' : '',
        phone: !phone ? 'This field is required' : '',
      })
    } else {
      history.push('/Step2')
    }
  }

  return (
    <div>
      <h2>YOUR INFO</h2>
      <p>Provide your name, email address, and phone number.</p>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <span className="error">{errors.name}</span>
      </div>
      <div>
        <label>Email Address:</label>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <span className="error">{errors.email}</span>
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <span className="error">{errors.phone}</span>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Step1
