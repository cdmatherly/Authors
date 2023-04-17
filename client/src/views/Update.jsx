import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState();
    const [validationErrors, setValidationErrors] = useState(null)
    const [getErrors, setGetErrors] = useState(null)
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data)
                setName(res.data.name)
                setLoaded(true)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                setGetErrors(true)
            })
    }, []);

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res => {
                console.log(res)
                setName(author.name)
                navigate(`/`)
            })
            .catch(err => {
                console.log(err)
                setValidationErrors(err.response?.data?.errors)
            })
    }

    return (
        <div className='text-center p-10'>
            {loaded && (
                <div className='px-72 text-end'>
                    <Link to="/" className='text-blue-500 underline'>Home</Link>
                    <div className='text-center p-10'>
                        <p className='mb-3 text-purple-500 text-left'>Edit this author</p>
                        <AuthorForm onSubmitProp={updateAuthor} initName={name} validationErrors={validationErrors} />
                    </div>
                </div>
            )}
            {getErrors && (
                <div>
                    <p className='text-3xl mb-3'>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
                    <Link to="/authors/new" className='text-xl underline text-blue-500'>Add new Author</Link>
                </div>
            )}
        </div>

    )
}

export default Update;

