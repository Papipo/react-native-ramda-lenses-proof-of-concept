import React from 'react'
import { View, StatusBar } from 'react-native'
import Label from './app/Label'
import LabelEditor from './app/LabelEditor'
import flyd from 'flyd'
import R from 'ramda'

class Store {
  constructor() {
    this.streams = {}
  }

  streamFor(prop) {
    let lens = R.lensProp(prop)
    let stream = R.view(lens, this.streams)
    if (stream === undefined) {
      stream = flyd.stream()
      this.streams = R.set(lens, stream, this.streams)
    }
    return stream;
  }
}

const App = () => {
  const store = new Store()

  return () => {
    return (
      <View>
        <View height={StatusBar.currentHeight} />
        <Label store={store} />
        <LabelEditor store={store} />
      </View>
    )
  }
}

export default App()
