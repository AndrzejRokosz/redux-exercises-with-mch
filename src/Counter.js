import React from 'react'

import { connect } from 'react-redux'
import { inc, dec } from './state/counter'

const Counter = (props) => (
    <div>
        <h1>
            {props._counterValue}
        </h1>
        <button
            onClick={props._inc}
        >
            +
    </button>
        <button
            onClick={props._dec}
        >
            -
    </button>
    </div>
)

// mapStateToProps receives whole state
const mapStateToProps = state => ({
    _counterValue: state.counter.number
})

const mapDispatchToProps = dispatch => ({
    _inc: () => dispatch(inc()),
    _dec: () => dispatch(dec())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)