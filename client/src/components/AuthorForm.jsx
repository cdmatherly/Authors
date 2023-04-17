import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {
    const { initName, initLastName, onSubmitProp, validationErrors } = props
    const [name, setName] = useState(initName); 
    const navigate = useNavigate()

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name})
    }

    const inputStyle = 'border border-solid border-black rounded px-1'

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='mb-5'>
                {validationErrors?.name && (<p style={{ color: 'red', marginLeft: '5px' }}>{validationErrors.name.message}</p>)}
                <label>Name:</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className={inputStyle}/>
            </div>
            <div className="flex justify-center gap-5">
                <input type="button" className='bg-red-500 text-white py-1 px-2 rounded mb-5 cursor-pointer' value="Cancel" onClick={() => navigate('/')}/>
                <button type="submit" className='bg-indigo-400 py-1 px-2 rounded mb-5'>Submit</button>
            </div>
        </form>
    )
}

export default AuthorForm