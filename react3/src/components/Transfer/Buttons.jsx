import React from 'react'

export default function Buttons({btns=[]}) {
    return (
        <div className="container_btn">
            {btns.map(({text,action},index) => <button key={index} onClick={action}>{text}</button>)}
        </div>
    )
}