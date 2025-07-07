import React from 'react';
import '../../styles/auth.css';

const NotFound = () => {
    return (
        <React.Fragment>
            <div className="not-found-container">
                <div className="text-center">
                    <div className="mb-4">
                        <h1 className="display-1 fw-bold text-danger">404</h1>
                        <h2 className="mb-3">Page Not Found</h2>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotFound;