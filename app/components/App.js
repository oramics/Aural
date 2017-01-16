import React, { Component } from 'react'
import Toolbar from './Toolbar'
import WaveOverview from './WaveOverview'
import fs from 'fs'
import { join } from 'path'
import { remote } from 'electron'
import ac from 'audio-context'
import toArrayBuffer from 'to-arraybuffer'
import './App.less'
const { dialog } = remote


export default class App extends Component {
  state = { name: '' }

  handleOpenFile = () => {
    const openOptions = {
      title: 'Open audio file',
      filters: [
        { name: 'Audio', extensions: ['mp3', 'wav', 'ogg']}
      ]
    }
    dialog.showOpenDialog(openOptions, (files) => {
      console.log('JODER', files)
      this.setState({ name: files[0] })
      fs.readFile(files[0], (err, data) => {
        if (err) throw err
        ac.decodeAudioData(toArrayBuffer(data)).then((buffer) => {
          this.setState({ ...this.state, buffer: buffer })
        })
      })
    })
  }

  render () {
    return (
      <div>
        <Toolbar onOpenFile={this.handleOpenFile} />
        <p>File: {this.state.name}</p>
        <WaveOverview buffer={this.state.buffer} />
      </div>
    )
  }
}
