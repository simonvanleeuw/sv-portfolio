import React, {Component} from 'react';
import Menu from './img/menu.svg';
import X from './img/x.svg';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../data/Data';

class Header extends Component {

    state = {
        visible: false,
        menuItems: menuItems,
    }

    toggleMenu = () => {
        console.log('onclick triggered');
        this.setState( prevState => ({ 
            visible: !prevState.visible,
        }))
    }

    render() {

        const isVisible = this.state.visible;
        return (
            <nav className={isVisible ? "collapsed" : "expanded"}>
                <div className="menu-container">
                    <h1><NavLink to="/">Simon Vanleeuw</NavLink></h1>
                    <div id="menu-button" onClick={this.toggleMenu}><img src={isVisible ? X : Menu}/></div>
                </div>
                    <div id="menu" className={isVisible ? "visible" : "hidden"}>
                        <ul>
                            {this.state.menuItems.map(menuItem => {
                                return (
                                    <li key={menuItem.id}><NavLink to={menuItem.path}>{menuItem.value}</NavLink></li>
                                    )
                            })}
                        </ul>
                        <button className="primary">Get in touch</button>
                    </div>
            </nav>
        )
    }
}

export default Header;