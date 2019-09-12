import React from 'react'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { cloneObject } from 'common/utility'

class Ticker extends React.Component {
    state = {
        items: {
            R_10: '123232',
            R_25: '836485763',
            R_50: '737373',
            R_75: '982349',
        },
    }
    subscribe = array_of_symbols => {
        BinarySocketBase.send(
            {
                ticks: array_of_symbols,
                subscribe: 1,
            },
            { callback: this.updateStateWithResponse },
        )
    }
    updateStateWithResponse = response => {
        const cloned = cloneObject(this.state.items)
        cloned[response.tick.symbol] = response.tick.quote
        this.setState({
            items: cloned,
        })
    }
    componentDidMount() {
        this.subscribe(Object.keys(this.state.items))
    }
    componentWillUnmount() {
        BinarySocketBase.send({
            forget_all: 'ticks',
        })
    }
    render() {
        return <div>Ticker</div>
    }
}

export default Ticker
