import React, { Component } from 'react'
import Measure from 'react-measure'
import './WaveOverview.less'
import drawWaveform from '../lib/drawWaveform'

export default class WaveOverview extends Component {
  componentDidMount = () => this.paint(this.canvas)
  componentDidUpdate = () => this.paint(this.canvas)
  paint = (canvas) => {
    const buffer = this.props.buffer
    const ctx = canvas.getContext('2d')
    if (buffer) {
      ctx.clearRect(0, 0, 100, 100)
      drawWaveform(ctx, buffer.getChannelData(0), { width: canvas.width, height: canvas.height, color: '#96AEBF'})
    }
  }
  render () {
    return <Measure>
        {({ width, height}) => {
          return (
            <div className='WaveOverview'>
              <canvas ref={(c) => this.canvas = c} width={width} height={height} />
            </div>
          )
        }}
      </Measure>
  }
}
