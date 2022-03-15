import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg   NavBody">
                <div className="container-fluid">
                    <h1 className="navbar-brand navColor ms-3" href="#">Navbar</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <button className=" border NavBody   text-danger ms-3">Delete all</button>

                            <h5 className=" navColor ms-3">Log stories</h5>
                            <label className="label ms-3">
                                <input type="checkbox" className="label__input" />

                                {/* <!-- Circle --> */}
                                <div className="label__circle"></div>
                            </label>
                            <h5 className=" navColor ms-3">Short stories</h5>
                            <label className="label ms-3">
                                <input type="checkbox" className="label__input" />

                                {/* <!-- Circle --> */}
                                <div className="label__circle"></div>
                            </label>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;