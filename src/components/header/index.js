import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

    static path = '/';

    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a href='#' className='navbar-brand'>Brand</a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contacts</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

