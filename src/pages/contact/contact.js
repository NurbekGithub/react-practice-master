import React from 'react';

export default class ContactPage extends React.Component {

    static path = '/contact';

    render() {
        return (
            <div>
                <div className="alert alert-warning">Hi from Contacts</div>
            </div>
        );
    }
}
