import React, { Component } from "react"
import _ from "lodash";
import { configObj } from "./configObj";

export const getConfigFunction = () => path => {
    const value = _.at(configObj, path)
    const response = (value[0] !== undefined) ? value : `<<${path}>>`;
    return response
}

export default function config(WrappedComponent) {
    class ConfiguratedComponent extends Component {
        render() {
            return <WrappedComponent {...this.props} c={getConfigFunction()} />
        }
    }
    return ConfiguratedComponent;
}