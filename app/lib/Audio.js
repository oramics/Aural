import ac from 'audio-context'

export class Audio {
  setBuffer (buffer) {
    if (this.source) this.source.stop()
    this.source = null
    this.buffer = buffer
    this.startedAt = false
    this.pausedAt = false
  }

  play () {
    if (!this.startedAt && this.buffer) {
      const source = this.source = ac.createBufferSource()
      source.buffer = this.state.buffer
      source.connect(ac.destination)
      const now = this.startedAt = ac.currentTime
      source.start(now)
    }
  }

  pause () {
    if (this.startedAt) {
      this.pausedAt = ac.currentTime
      this.source.stop(this.pausedAt)
      this.source = null
    }
  }
}
