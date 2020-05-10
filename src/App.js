import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import UserDetails from './components/UserDetails';

/**
 * @name App
 * @description The main function component of the app.
 * It contains three parts Header, Login/UserList and Footer
 */
  
const App = () => {
      const styleContainer = {
        padding: '5% 8%',
        backgroundColor: '#efefdf',
        minHeight: '65vh'
      }
  
  const [showUsers, setShowUsers] = useState(false);
    
    return (
      <div>
        <Header />
        <div style={styleContainer}>
          {showUsers ?
            <UserDetails /> :
            <Login goToUsers={() => setShowUsers(true)} />
          }
        </div>
        <Footer />
      </div>
    )
}

export default App;
