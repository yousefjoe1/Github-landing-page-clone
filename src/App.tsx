import * as React from 'react'
import Firstsection from './comp/Firstsection';
import Nav from './comp/TopNav';

const App = () => {

return (
    <div className="app">
        <div className="nav-__first-section">
          <div className="nav-firstSection container">
            <Nav />
            <Firstsection />
          </div>
        </div>
    </div>
  );
}

export default App;
