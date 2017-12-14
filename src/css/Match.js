import React, { Component } from 'react';

import MediaQuery from '../media';

export default class Match extends Component {
    constructor(props) {
        super(props);

        this.onBreakpoint = this.onBreakpoint.bind(this);

        this.state = { mq: '' }
    }

    componentDidMount() {
        MediaQuery.listenBreakpoint(this.onBreakpoint);
    }

    componentWillUnmount() {
        MediaQuery.unlistenBreakpoint(this.onBreakpoint);
    }

    onBreakpoint(query_name) {
        this.setState({
            mq: query_name
        });
    }

    render() {
        const { show } = this.props;
        const { mq } = this.state;

        if (show && show.split(',').filter(name => name.trim() === mq).length == 0) {
            return null;
        }

        return (
            <div className="fluid-react-breakpoint" {...this.props}>
                {this.props.children}
            </div>
        )
    }
}
