import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    

    render() {
        return (
        <nav className="d-flex justify-content-between">
            <div className='left-logo'>      
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
              </button>
            </div>
            <ul className="d-flex list-unstyled">
                <li className="px-3">About</li>
                <li className="px-3">Pricing</li>
                <li className="px-3">Contact</li>
            </ul>
        </nav>
    )}
}

export default Header;