import React, { Component } from 'react'
import Toolbar from './Toolbar'
import Transport from './Transport'
import WaveOverview from './WaveOverview'
import fs from 'fs'
import { join } from 'path'
import { remote } from 'electron'
import { Audio } from '../lib/Audio'
import toArrayBuffer from 'to-arraybuffer'
const { dialog } = remote

import './App.less'
import '../global.less'

const audio = new Audio()


export default class App extends Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  }
  getChildContext () {
    return {
      rebass: {
        colors: {
          primary: '#55676F'
        }
      }
    }
  }
  state = { name: '' }

  handleOpenFile = () => {
    const openOptions = {
      title: 'Open audio file',
      filters: [
        { name: 'Audio', extensions: ['mp3', 'wav', 'ogg']}
      ]
    }
    dialog.showOpenDialog(openOptions, (files) => {
      this.setState({ name: files[0] })
      fs.readFile(files[0], (err, data) => {
        if (err) throw err
        ac.decodeAudioData(toArrayBuffer(data)).then((buffer) => {
          this.setState({ ...this.state, buffer: buffer })
          audio.setBuffer(buffer)
        })
      })
    })
  }

  handlePlayBuffer = () => {
  }

  render () {
    return (
      <div className='App'>
        <Toolbar
          onOpen={this.handleOpenFile} />
        <p>File: {this.state.name}</p>
        <WaveOverview buffer={this.state.buffer} />
        <Transport
          onPlay={audio.play.bind(audio)}
          onPause={audio.pause.bind(audio)} />
      </div>
    )
  }
}
