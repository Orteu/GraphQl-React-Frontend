import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
        <div className="container">
            <Link to="/customers" className="navbar-brand text-light font-weight-bold">
                GRAPHQL COURSE
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav ml-auto text-right mt-md-3">
                    <li className="nav-item dropdown mr-lg-2 mb-2">
                       <button
                            className="nav-link dropdown-toggle btn btn-block btn-success"
                            data-toggle="dropdown"
                        >
                            Customers
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navigation">
                            <Link to="/customers" className="dropdown-item">
                                Customers list
                            </Link>
                            <Link to="/customer/new" className="dropdown-item">
                                New customer
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                       <button
                            className="nav-link dropdown-toggle btn btn-block btn-success"
                            data-toggle="dropdown"
                        >
                            Products
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navigation">
                            <Link to="/product" className="dropdown-item">
                                Products list
                            </Link>
                            <Link to="/product/new" className="dropdown-item">
                                New product
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;