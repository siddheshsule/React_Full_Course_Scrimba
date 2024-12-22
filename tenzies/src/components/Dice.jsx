'use client'
import React from 'react'

const Dice = (props) => {

    const [diceValue, setDiceValue] = React.useState(1)
    const [isFrozen, setIsFrozen] = React.useState(false)
    const handleClick = () => {
        if (isFrozen) return
        setDiceValue(Math.floor(Math.random() * 6) + 1)
    }

    const handleDoubleClick = () => {
        setIsFrozen(!isFrozen)
    }

  return (
    <div>
        <button className='flex justify-center items-center h-10 w-10 bg-white shadow-md rounded-md'>
            <h3>{props.value}</h3>
        </button>
    </div>
  )
}

export default Dice