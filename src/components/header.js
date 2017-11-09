import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

   class Header extends Component {

      headerLinks() {
         if(this.props.authenticated) {
            return[
               <li className="nav-item" key={1}>
                  <Link classNme="nav-link" to="/signout">Signout</Link>
               </li>,
               <li className="nav-item" key={2}>
                  <Link classNme="nav-link" to="/feature">Feature</Link>
               </li>
            ]
         }else{
            return[
               <li className="nav-item" key={1}>
                  <Link classNme="nav-link" to="/signin">Signin</Link>
               </li>,
               <li className="nav-item" key={2}>
                  <Link classNme="nav-link" to="/signup">Signup</Link>
               </li>
            ]
         }
      }

      render() {
         return (
            <nav className="navbar navbar-default">
               <Link to="/" className="navbar-brand">App Home</Link>
               <ul className="nav navbar-nav">
                     {this.headerLinks()}
               </ul>
            </nav>
         )
      }
   }

   function mapStateToProps(state) {
      return{
         authenticated: state.auth.authenticated
      }
   }

export default connect(mapStateToProps)(Header);
