import React from 'react'
import DrawerAppBar from './container/DrawerAppBar'
import Bodycontent from './container/Bodycontent'
import LowFooter from './container/LowFooter';
import Explore from './container/Explore';
import LowerContainer from './container/LowerContainer';
import Lastfoot from './container/Lastfoot';
import './App.css';

const App = () => {
  return (
    <div>
      <DrawerAppBar/>
      <Bodycontent/>
      <LowerContainer/>
      <Explore/>
      <LowFooter/>
      <Lastfoot/>
    </div>
  )
}

export default App