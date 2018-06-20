import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
    /**
     * @param props - Comes from your rails view.
     */
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="menu">
                <MenuItem position="top" />
                <MenuItem position="left" />
                <MenuItem position="bottom" />
                <MenuItem position="right" />
            </div>
        );
    }
}


