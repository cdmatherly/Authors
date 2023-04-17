import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const { removeAuthorFromDom } = props

    const firstNameStyle = {
        fontWeight: 'bold'
    }

    const tableStyle = {
        margin: '0 auto',
        width: '50%'
    }

    const listStyle = {
        marginBottom: '2rem',
        textAlign: 'start',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }

    const center = {
        width: '50%',
        margin: '0 auto'
    }

    const trStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }

    const linkStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem'
    }


    // Map inside <tbody>
    return (

        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-gray-200 border-b">
                                    <tr>
                                        <th scope="col" className="text-gray-900 px-6 py-4">
                                            Author
                                        </th>
                                        <th scope="col" className="text-gray-900 px-6 py-4">
                                            Actions available
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.authors.map((author, id) =>
                                        <tr key={id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {author.name}
                                            </td>
                                            <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center items-center gap-5">
                                                <Link to={`/authors/${author._id}`}>Edit</Link>
                                                <DeleteButton authorId={author._id} successCallback={(e) => removeAuthorFromDom(author._id)} />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorList;

