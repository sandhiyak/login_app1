import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
const styles = {
    facebookBtn: {
      backgroundColor: 'rgb(51, 89, 157)'
    },
    form: {
      textAlign: 'center'
    }
  }
  
  class Login extends React.Component {
    handleOnSubmit = (e) => {
      e.preventDefault();
      console.log('Submitted!');
    };
    render() {
      return (
          <form className='form' style={styles.form} onSubmit={this.handleOnSubmit}>
            <h4>Login</h4>
            <div className='form-group row'>
              <input className='input' name="password" type='email' placeholder='Email' required/>
            </div>
            <div className='form-group row'>
              <input className='input' name="password" type='password' placeholder='Password' required/>
            </div>
            <div className='form-group row'>
              <button className='button' type='submit'>Log In</button>
            </div>
          </form>
        
      )
    }
  }
  
  class Form extends React.Component {
    render () {
      const {children, title} = this.props
      return (
        <div className='col-md-6 mx-auto'>
          <header>
            <h1>{title}</h1>
          </header>
          {children}
        </div>
      )
    }
  }
  
  
  ReactDOM.render(
    <Form children={ <Login /> } />,
    document.getElementById('root')
  );
  
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
