import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './general.scss';
import Header from './component/header/header';
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <section>
            <div className="container">
              <div className="row">
                {this.props.children}
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
export default withRouter(App);
