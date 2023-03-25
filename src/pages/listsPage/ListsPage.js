import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from '../../components/modal/Modal'

function ListsPage() {
    const [isModalActive , setIsModalActive] = useState(false)
    const [lists, setLists] = useState([
        {
            id: 1,
            name: 'list1'
        },
        {
            id: 2,
            name: 'list2'
        },
        {
            id: 3,
            name: 'list3'
        },
    ])

    const handleModalActive = () => {
        setIsModalActive(!isModalActive)
    }

    const handleLists = (newList) => {
        setLists([...lists, newList])
    }
    // console.log(lists);
    return (
        <div>
            <ul>
                {lists.map(list => <li key={list.id}>
                    <NavLink to={`/lists/${list.id}`}>{list.name}</NavLink>
                </li>)}
            </ul>
            <Modal lists={lists} setLists={handleLists} isActive={isModalActive} setActive={handleModalActive}/>
            <button onClick={handleModalActive} >открыть модальное окно</button>
        </div>
    )
}

export default ListsPage