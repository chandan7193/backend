import React, {Component} from 'react';
import { connect }from 'react-redux';


 class Header extends Component{
   renderContent(){
    
     switch(this.props.auth)  {
       case null:
        return 'Still deciding'
       case false:
        return 'im loggedout'
       default:
        return 'i  logged in';
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
  return {auth};
}

export default connect(mapsStateToProps)(Header);
