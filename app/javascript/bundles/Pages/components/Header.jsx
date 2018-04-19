import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Home from './Home';

export default class Pages extends React.Component {
    /**
     * @param props - Comes from your rails view.
     */
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <h1>KW <span className="green">Creative Consulting</span></h1>
                </div>

                <div className="intro">
                    <p>
                        Web / Software Development<br />
                        by Kelly Waters
                        </p>
                </div>
            </div>
        );
    }
}


