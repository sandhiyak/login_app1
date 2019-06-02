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
    handleSingUp = (e) => {
        ReactDOM.render(
            <Form children={ <Reg /> } />,
            document.getElementById('root')
          );
          
    };
    render() {
        

            return (
                <div>
                    <div>
                        <form className='form' style={styles.form} onSubmit={this.handleOnSubmit}>
                            <h4>Login</h4>
                            <div className='form-group row'>
                            <input className='input' name="email" type='email' placeholder='Email' required/>
                            </div>
                            <div className='form-group row'>
                            <input className='input' name="password" type='password' placeholder='Password' required/>
                            </div>
                            <div className='form-group row'>
                            <button className='button' type='submit'>SIGN IN</button>
                            </div>
                            <div className='form-group row'>
                            <button className='button' type='button' onClick={this.handleSingUp}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>

                
            )
        }
       
  }

  class Reg extends React.Component {
    
  handleOnSubmit = (e) => {
    var w= e.preventDefault();
    console.log(e);
  };
  
  render() {
      

          return(

            <div>
            <form className='form' style={styles.form} onSubmit={this.handleOnSubmit}>
                <h4>Register</h4>
                <div className='form-group row'>
                <input className='input' name="f_name" type='text' placeholder='First Name' required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="l_name" type='text' placeholder='Last Name' required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="p_no" type='number' placeholder='Phone No' required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="email" type='email' placeholder='Email' required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="password" type='password' placeholder='Password' required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="c_password" type='password' placeholder='Confirm Password' required/>
                </div>
                <div className='form-group row'>
                <button className='button' type='submit'>Save</button>
                </div><br />
                              </div>
                <div className='form-group row'>
                <button className='button' type='submit'>Back to Login</button>
                </div>
            </form>
        </div>
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
