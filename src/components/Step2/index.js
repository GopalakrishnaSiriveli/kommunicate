import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Step2({plan, setPlan}) {
  const history = useHistory()
  const plans = [
    {name: 'ARCADE', price: '$9/mon'},
    {name: 'ADVANCED', price: '$12/mon'},
    {name: 'PRO', price: '$15/mon'},
  ]
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [billingCycle, setBillingCycle] = useState('monthly')

  const handleNext = () => {
    if (selectedPlan) {
      setPlan(selectedPlan)
      history.push('/step3')
    }
  }

  return (
    <div>
      <h2>SELECT PLAN</h2>
      <p>You have monthly and yearly billing options.</p>
      <div className="plan-cards">
        {plans.map((p, index) => (
          <div
            key={index}
            className={`plan-card ${selectedPlan === p.name ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(p.name)}
          >
            <div className="plan-name">{p.name}</div>
            <div className="plan-price">{p.price}</div>
          </div>
        ))}
      </div>
      <div className="billing-toggle">
        <button
          className={`toggle-button ${
            billingCycle === 'monthly' ? 'selected' : ''
          }`}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          className={`toggle-button ${
            billingCycle === 'yearly' ? 'selected' : ''
          }`}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly
        </button>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Step2
