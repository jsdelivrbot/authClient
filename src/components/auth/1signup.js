import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router';
import * as actions from '../../actions';
import { connect } from 'react-redux';

   class Signup extends Component {


      render() {
            const { handleSubmit, fields: {email, password, passwordConfirm}} = this.tprops;
         return (
            <div className="row">
               <div className="col-md-4 col-md-offset-4">
            <form>
               <div className="form-group">
                  <label>Email</label>
                  <div>
                     <Field
                     className="form-control"
                     name="email"
                     component="input"
                     type="email"
                     placeholder="Email"
                     />
                  </div>
               </div>
               <div lassName="form-group">
                  <label>Password</label>
                  <div >
                     <Field
                     className="form-control"
                     name="password"
                     component="input"
                     type="password"
                     placeholder="Password"
                     />
                  </div>
               </div>
               <br/>
               <div lassName="form-group">
                  <label>Confirm Password</label>
                  <div >
                     <Field
                     className="form-control"
                     name="passwordConfirm"
                     component="input"
                     type="password"
                     placeholder="Confirm Password"
                     />
                  </div>
                  {password.touched && password.error && <div className="error">{password.error}</div>}
               </div>
               <br/>
               {/* {this.renderAlert()} */}
               <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
            </div>
            </div>
         )
      }
   }

   function validate(formProps){
      const errors ={};
      if (formProps.passwordConfirm !== formProps.password){
         errors.password2 = "Passwords must match";
      }
      console.log(formProps);

      return errors;
   }


   function mapStateToProps(state) {
      return {errorMessage: state.auth.error}
   }

   // Wrap Signin with redux Form
   const reduxFormSignup = reduxForm({
     form: 'signup',
     fields: ['email', 'password', 'passwordConfirm'],
     validate
  })(Signup);

   // Export wrapped Signin container with connect helper
   export default
   withRouter(connect(mapStateToProps, actions)(reduxFormSignup));
