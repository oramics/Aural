export default function drawWaveform (ctx, data,
  { width, height, color, maxStep = 1000, normalize = 0.8 }) {
  console.log('draw', width, height, data.length)
  if (color) ctx.fillStyle = color
  var step = Math.ceil(data.length / width)
  var amp = height / 2
  for (var i = 0; i < width; i++) {
    var neg = 0
    var pos = 0
    var max = Math.min(step, maxStep)
    for (var j = 0; j < max; j++) {
      var val = data[(i * step) + j]
      if (val < 0) neg += val
      else pos += val
    }
    neg = neg / max
    pos = pos / max
    ctx.fillRect(i, amp - pos * amp, 1, amp * (pos - neg))
  }
}
