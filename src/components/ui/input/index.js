import React, { PropTypes } from 'react';
import classnames from 'classnames';


export default class Input extends React.Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        divClasses: PropTypes.string,
        error: PropTypes.string
    };

    constructor(props) {
        super(props);

        const { value } = this.props;
        this.state = { value };
    }

    changeHandler(event) {
        const { value } = event.target;
        this.props.onChange(value);
    }

    render() {
        const divClasses = classnames({
            'form-group': true,
            'has-error': this.props.error ? true : false
        });

        const { value } = this.props;

        return (
            <div className={ divClasses }>
                <input
                    type='text'
                    className='form-control'
                    style={ { width: '70%' } }
                    value={ value }
                    onChange={ this.changeHandler.bind(this) }
                />
                { this.props.error ? <span className='help-block'> { this.props.error } </span> : null }
                
            </div>
        );
    }
}
