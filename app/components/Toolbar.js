import React from 'react'
import './Toolbar.less'
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

const Button = ({ title, onClick, icon }) => (
  <ButtonCircle title={title} onClick={onClick}>
    <Icon name={icon} />
  </ButtonCircle>
)

export default function (props) {
  return (
    <div className='Toolbar' align='center'>
      <Button title='Open' onClick={props.onOpen} icon='folder' />
      <Button title='Play' onClick={props.onPlay} icon='play' />
      <Button title='Info' icon='info' />
    </div>
  )
}
