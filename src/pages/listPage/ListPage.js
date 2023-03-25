import React from 'react'
import { useParams } from 'react-router-dom'

function ListPage() {
    const {id} = useParams()

    return (
        <div>ListPage {id}</div>
    )
}

export default ListPage