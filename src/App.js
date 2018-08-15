import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <main>
        <div data-wrapper>
          <div data-container>
            <div data-decor>
              <div data-circle></div>
              <div data-hgroup>
                <h1>swedavia</h1>
                <h2>swedish airports</h2>
              </div>
            </div>

            <div data-form>
              <form>
                <div data-field>
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username" />
                </div>
                <div data-field>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" />
                </div>
                <div data-choice>
                  <input type="submit" value="Отправить" />
                  <a data-link href="#">Forgot password?</a>
                </div>
                
              </form>
            </div>
          </div>

        </div>

      </main>
    );
  }
}

export default App;
