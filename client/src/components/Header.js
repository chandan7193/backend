import React, {Component} from 'react';
import { connect }from 'react-redux';


 class Header extends Component{
   renderContent(){
     console.log('auth', this.props.auth)
     switch(this.props.auth)  {
       case null:
        return
       case false:
        return <li><a href = "auth/google" >Login with Google</a></li>;
       default:
        return <li>Logged out</li>;
     }
   }

  render(){

    return(
      <div >
        <nav>
          <div className="nav-wrapper">
            <a className=" left brand-logo">Emaily</a>
            <ul  className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

function mapsStateToProps({auth}){
  console.log('before sending to rendere method', auth);
  return {auth};
}

export default connect(mapsStateToProps)(Header);
