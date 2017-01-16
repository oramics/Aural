import React from 'react'
import './Toolbar.less'

export default function (props) {
  return (
    <div className='Toolbar'>
      toolbar
      <input type='button' onClick={props.onOpenFile} value='Open file' />
    </div>
  )
}
