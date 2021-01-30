import React, { useEffect, useState } from 'react'
import { Toggler } from './toggler'

const TogglerContainer = ({ setIsDark }) => {
  return <Toggler setThemeBool={setIsDark} />
}

export default TogglerContainer
