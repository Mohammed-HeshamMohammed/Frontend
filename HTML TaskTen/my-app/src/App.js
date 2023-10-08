import React from 'react'
import CopmonentHead from './CopmonentHead'
import ComponentAbout from './ComponentAbout'
import ComponentSkills from './ComponentSkills'
import Portfolio from './Portfolio'
import ComponentFooter from './ComponentFooter'

const App = () => {
  return (
    <div>
      <CopmonentHead/>
      <ComponentAbout/>
      <ComponentSkills/>
      <Portfolio/>
      <ComponentFooter/>
    </div>
  )
}

export default App
