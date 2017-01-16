import React from 'react'
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'
import { Flex } from 'reflexbox'

import './Transport.less'

const Button = ({ title, onClick, icon }) => (
  <ButtonCircle title={title} onClick={onClick}>
    <Icon name={icon} />
  </ButtonCircle>
)

const Transport = (props) => {
  return (
    <Flex className='Transport' align='center' justify='space-around' wrap>
      <Button title='Prev' onClick={props.onPrev} icon='previous' />
      <Button title='Pause' onClick={props.onPause} icon='pause' />
      <Button title='Play' onClick={props.onPlay} icon='play' />
    </Flex>
  )
}

export default Transport
