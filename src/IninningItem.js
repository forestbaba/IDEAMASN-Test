import React from 'react'
import './style.scss'

const Ininng = ({ inning, home, away }) => {
    return (
        <div className='ini-parent'>
            <p>{inning}</p>
            <p>{home}</p>
            <p>{away}</p>
        </div>
    )
}
export default Ininng;