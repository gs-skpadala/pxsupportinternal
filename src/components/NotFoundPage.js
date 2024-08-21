// components/NotFoundPage.js
import React, {useEffect} from 'react';

const  NotFoundPage = ()=> {

    useEffect(() => {
        document.title = 'invalid URL'; // Set the page title
    }, []);

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The Page you are looking for does not exist ,please check with valid URL</p>
        </div>
    );
};

export default NotFoundPage;
