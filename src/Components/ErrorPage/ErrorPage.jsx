import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!! Page Not Found</h2>
            <Link to='/'><button className='btn btn-accent'>Back To Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;