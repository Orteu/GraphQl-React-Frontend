import React, { Component } from 'react';

export default class Paginator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPages: 0
        };
    }

    componentDidMount() {
        const { paginator, total } = this.props;
        this.setState({
            totalPages: Math.ceil( Number(total / paginator.pageSize ))
        })
    }
    
    render() {
        const { changeCurrentPage, paginator} = this.props;
        const { totalPages } = this.state;
        return(
            <div className="mt-5 d-flex-justify-content-center">
                {
                    paginator && paginator.currentPage > 1 &&
                        <button
                            className="btn btn-success mr-2"
                            onClick={() => changeCurrentPage(paginator.currentPage - 1)}
                        >
                            &laquo; Back 
                        </button>
                }
                {
                    paginator && paginator.currentPage < totalPages &&
                    <button
                        className="btn btn-success"
                        onClick={() => changeCurrentPage(paginator.currentPage + 1)}
                    >
                        &raquo; Next 
                    </button>
                }
            </div>
        );
    }
}