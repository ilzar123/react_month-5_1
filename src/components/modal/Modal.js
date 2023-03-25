import React, { useRef } from 'react'
import classes from './modal.module.css'

function Modal(props) {
    const inputRef = useRef(null)
    
    const addList = () => {
        props.setLists({
            id: props.lists.length + 1,
            name: inputRef.current.value
        })
    }

    return (
        <div onClick={props.setActive} className={`${classes.modal} ${props.isActive ? classes.active : null}`}>
            <div onClick={e => e.stopPropagation()} className={classes.content}>
                <input ref={inputRef} type="text" />
                <button onClick={addList}>Добавить в список</button>
            </div>
        </div>
    )
}

export default Modal