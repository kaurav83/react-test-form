import React, { Component } from 'react';
import Login from './components/Login';
import Decor from './components/Decor';

class App extends Component {
  render() {
    return (
      <main>
        <div data-wrapper>
          <div data-container>
            <Decor />
            <Login />
          </div>
        </div>

      </main>
    );
  }
}

export default App;
