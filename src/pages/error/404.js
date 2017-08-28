import React from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends React.Component {

    render() {
        return (
            <div className='alert alert-info'>
                <h3>Page not found</h3>
                <p>Перейти на <Link to='/'>главную</Link> </p>
            </div>
        );
    }
}
