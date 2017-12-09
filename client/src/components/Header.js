import React, {Component} from 'react';
import { connect }from 'react-redux';


 class Header extends Component{
   renderContent(){

     switch(this.props.auth)  {
       case null:
        return
       case false:
        return <li><a href = "/auth/google" >Login with Google</a></li>;
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
  console.log(auth)
  return {auth};
}

export default connect(mapsStateToProps)(Header);
