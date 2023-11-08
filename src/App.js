import React, {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

function App() {
  const [plan, setPlan] = useState(null)
  const [addOns, setAddOns] = useState([])

  return (
    <Router>
      <div className="app">
        <Route path="/Step1">
          <Step1 />
        </Route>
        <Route path="/Step2">
          <Step2 plan={plan} setPlan={setPlan} />
        </Route>
        <Route path="/Step3">
          <Step3 addOns={addOns} setAddOns={setAddOns} />
        </Route>
        <Route path="/Step4">
          <Step4 plan={plan} addOns={addOns} />
        </Route>
      </div>
    </Router>
  )
}

export default App
