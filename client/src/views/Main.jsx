import React, { useEffect, useState } from 'react';
import axios from 'axios'
import AuthorList from '../components/AuthorList';
import { Link } from 'react-router-dom'

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [validationErrors, setValidationErrors] = useState(null)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeAuthorFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div className="text-center m-auto p-10">
            <h1 className='mt-5 text-2xl font-semibold'>Favorite Authors</h1>
            <Link to="/authors/new" className='text-blue-500 underline'>Add an author</Link>
            <h3 className='mt-5'>We have quotes by:</h3>
            {loaded && (<AuthorList authors={authors} removeAuthorFromDom={removeAuthorFromDom}/>)}
        </div>
    )
}

export default Main