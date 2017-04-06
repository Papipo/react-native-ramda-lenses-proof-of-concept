import React from 'react'
import { Text } from 'react-native'
import withProps from './withProps'
import R from 'ramda'

const Label = ({label}) => {
  console.log("Redraw label")
  return <Text>Label value: {label()}</Text>
}

export default withProps(Label, ['label'])
