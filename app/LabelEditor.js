import React from 'react'
import { TextInput } from 'react-native'
import R from 'ramda'
import withProps from './withProps'

const LabelEditor = ({label}) => {
  console.log("Redraw editor")
  return (
    <TextInput value={label()} onChangeText={label}  />
  )
}

export default withProps(LabelEditor, ["label"])
