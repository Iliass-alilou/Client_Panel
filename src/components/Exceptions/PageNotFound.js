import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <h2>Page Not Found 404</h2>
            <Link to="/"> come back to our site </Link>
        </div>
    )
}
