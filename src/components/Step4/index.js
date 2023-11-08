import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function Step4({plan, addOns}) {
  const history = useHistory()

  return (
    <div>
      <h2>SUMMARY</h2>
      <p>Double-check everything to make sure it looks okay.</p>
      <div className="plan-summary">
        <h3>Selected Plan</h3>
        <p>{plan}</p>
      </div>
      <div className="addons-summary">
        <h3>Selected Add-Ons</h3>
        <ul>
          {addOns.map((addon, index) => (
            <li key={index}>{addon}</li>
          ))}
        </ul>
      </div>
      <Link to="/Step2">
        <button>Change</button>
      </Link>
      <button onClick={() => history.push('/confirm')}>Confirm</button>
    </div>
  )
}

export default Step4
