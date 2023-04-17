import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { authorId, successCallback } = props;
    
    const deletePerson = e => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deletePerson} className='bg-red-500 text-white py-1 px-2 rounded'>
            Delete
        </button>
    )
}