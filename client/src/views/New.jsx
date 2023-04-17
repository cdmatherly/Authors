import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [validationErrors, setValidationErrors] = useState(null)
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate()

    const createAuthor = (author) => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(author)
                console.log(err)
                setValidationErrors(err.response?.data?.errors)
            })
    }

    return (
        <div className='py-10 px-72 text-end'>
            <Link to="/" className='text-blue-500 underline'>Home</Link>
            <div className='text-center p-10'>
                <p className='mb-3 text-purple-500 text-left'>Add a new author:</p>
                <AuthorForm onSubmitProp={createAuthor} initName={name} validationErrors={validationErrors} />
            </div>
        </div>

    )
}

export default Update;

