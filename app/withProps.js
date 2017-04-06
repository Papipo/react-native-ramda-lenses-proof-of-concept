import React from 'react'
import R from 'ramda'
import flyd from 'flyd'

export default (WrappedComponent, streamNames) => {

  return class extends React.Component {
    constructor(props) {
      super(props)

      this.streams = R.pipe(
        R.map(name => [name, this.props.store.streamFor(name)]),
        R.fromPairs
      )(streamNames)

      flyd.combine(this.forceUpdate.bind(this), R.values(this.streams))
    }


    render() {
      return <WrappedComponent {...this.streams} />
    }
  }
}
