import React, {Component} from 'react';

export default class Header extends Component{
  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className=" left brand-logo">Emaily</a>
            <ul  className="right">
              <li><a >Login with Google</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
