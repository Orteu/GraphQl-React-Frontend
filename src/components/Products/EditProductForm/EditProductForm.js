import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Mutation } from 'react-apollo';
import { UPDATE_PRODUCT } from '../../../mutations';


class EditProductForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editProduct: {}
		};
	}

	componentDidMount() {
		const { product } = this.props;
		if (product.id) {
			this.setState({ editProduct: product });
		}
	}

	setProduct = (key, value) => {
		this.setState({
			editProduct: {
				...this.state.editProduct,
				[key]: value.target.value
			}
		});
	};

	updateProduct = (e, updateProduct) => {
		e.preventDefault();
		const { editProduct } = this.state;
		updateProduct({ variables: { 
			input: editProduct
		}});
	};

	render() {
		const { editProduct } = this.state;
		const { refetch } = this.props;
        const { name, price, stock } = editProduct;
		return (
			<Mutation
				mutation={UPDATE_PRODUCT}
				onCompleted={
					() => refetch()
						.then(() => this.props.history.push('/product'))
				}
			>
				{(updateProduct) => (
					<form
						className="col-md-8 m-3"
						onSubmit={(e) => this.updateProduct(e, updateProduct)}
					>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label>Name</label>
								<input
								value={name}
									type="text"
									className="form-control"
									placeholder="Name"
									onChange={(val) => this.setProduct('name', val)}
								/>
							</div>
                            <div className="form-group col-md-6">
								<label>Price</label>
								<input
								value={price}
									type="number"
									className="form-control"
									placeholder="Price"
									onChange={(val) => this.setProduct('price', val)}
								/>
							</div>
						</div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
								<label>Stock</label>
								<input
								value={stock}
									type="number"
									className="form-control"
									placeholder="Stock"
									onChange={(val) => this.setProduct('stock', val)}
								/>
							</div>
						</div>
						

						<button type="submit" className="btn btn-success float-right">
							Guardar Cambios
						</button>
					</form>
				)}
				
			</Mutation>
			
		);
	}
}

export default withRouter(EditProductForm);
