import PropTypes from 'prop-types';
import React from 'react';

export default class MenuItem extends React.Component {
    /**
     * @param props - Comes from your rails view.
     */
    constructor(props) {
        super(props);
    }

    renderMenuItem() {
        const { position, visibleScreen } = this.props;

        switch (position) {
            case 'top':
                if ( visibleScreen == 'home') {
                    return <div>Home</div>
                } else {
                    return null
                }
            case 'right':
                if (visibleScreen !== 'projects') {
                    return <div>Projects</div>
                }
            case 'bottom':
                if (visibleScreen !== 'contact') {
                    return <div>Contact</div>
                }
            case 'left':
                if (visibleScreen !== 'process') {
                    return <div>Process</div>
                }
            default:
                return null
        } 
    }

    render() {
        const { position } = this.props;

        return (
            <div className={"menu-item menu-item-" + position}>
                {this.renderMenuItem()}
            </div>
        );
    }
}


