import PropTypes from 'prop-types';
import React from 'react';

export default class Pages extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired, // this is passed from the Rails view
    };

    /**
     * @param props - Comes from your rails view.
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="home-content-left">
                    <h2>I use</h2>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </section>
        );
    }
}