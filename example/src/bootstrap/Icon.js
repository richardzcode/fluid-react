import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';
import { withMediaQuery } from 'fluid-react';

import { Bootstrap } from '../theme';

class _Icon extends Component {
    render() {
        const { name } = this.props;
        return (
            <FontAwesome name={name} {...this.props} />
        )
    }
}
const Icon = withMediaQuery(_Icon, Bootstrap.icon);

export { Icon };
