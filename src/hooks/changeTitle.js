
import { useState } from 'react';
export const changeTitle = () => {

  const [drill, setDrill] = useState('')
  
  return {

    drill,
    setDrill
  }
}
