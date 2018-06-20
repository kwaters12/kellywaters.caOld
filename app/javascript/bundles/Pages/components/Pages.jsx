import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Home from './Home';

export default class Pages extends React.Component {
    /**
     * @param props - Comes from your rails view.
     */
    constructor(props) {
        super(props);

        // How to set initial state in ES6 class syntax
        // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
        this.state = { name: this.props.name };
    }

    updateName = (name) => {
        this.setState({ name });
    };

    render() {
        return (
            <div>
                <Header />
                <Menu screenVisible={this.state.screenVisible}/>
                <Home />
                {/* <h3>
                    Hello, {this.state.name}!
                </h3>
                <hr />
                <form >
                    <label htmlFor="name">
                        Say hello to:
          </label>
                    <input
                        id="name"
                        type="text"
                        value={this.state.name}
                        onChange={(e) => this.updateName(e.target.value)}
                    />
                </form> */}
            </div>
        );
    }
}
