import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Step3({addOns, setAddOns}) {
  const history = useHistory()
  const addons = [
    {name: 'ONLINE SERVICE', price: '$1/mon'},
    {name: 'LARGER SERVICE', price: '$2/mon'},
    {name: 'CUSTOMIZED PROFILES', price: '$2/mon'},
  ]
  const [selectedAddOns, setSelectedAddOns] = useState([])

  const handleNext = () => {
    setAddOns(selectedAddOns)
    history.push('/Step4')
  }

  return (
    <div>
      <h2>ADD-ONS</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="addon-cards">
        {addons.map((addon, index) => (
          <div key={index} className="addon-card">
            <label>
              <input
                type="checkbox"
                checked={selectedAddOns.includes(addon.name)}
                onChange={() => {
                  if (selectedAddOns.includes(addon.name)) {
                    setSelectedAddOns(
                      selectedAddOns.filter(name => name !== addon.name),
                    )
                  } else {
                    setSelectedAddOns([...selectedAddOns, addon.name])
                  }
                }}
              />
              {addon.name} ({addon.price})
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Step3
