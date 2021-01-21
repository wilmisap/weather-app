import React from 'react'
import { Link } from "react-router-dom"  
import { RoutesPath } from '../config/routes'

const WelcomePage = () => {
  return (
    <div>
      Welcome
            <div>
              <Link to={RoutesPath.main}>Ir a Main</Link>
            </div>      
    </div>
  )
}

export default WelcomePage
