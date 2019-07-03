import React, { Component, Fragment } from 'react';

import { Mutation } from 'react-apollo';
import { NEW_PRODUCT } from '../../../mutations';


export default class NewProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editProduct: {
				name: '',
				price: 0,
				stock: 0
			}
		};
	}

	createProduct = (e, createProduct) => {
		e.preventDefault();
		const { editProduct } = this.state;
		const edited = { ...editProduct };
		edited.price = parseInt(edited.price);
		edited.stock = parseInt(edited.stock);
		createProduct({ variables: { input: edited } });
	};

	setProduct = (key, value) => {
		this.setState({
			editProduct: {
				...this.state.editProduct,
				[key]: value.target.value
			}
		});
  	};
  
  checkFields = () => {
    const { editProduct } = this.state;
    let canSubmit  = true;
    if (!editProduct.name || !editProduct.price || !editProduct.stock) {
      canSubmit = false;
    }
    return canSubmit ;
  }

	render() {
		return (
			<Fragment>
				<h2 className="text-center">New Product</h2>
				<div className="row justify-content-center">
					<Mutation
						mutation={NEW_PRODUCT}
						onCompleted={() => this.props.history.push('/product')}
					>
						{(createProduct) => (
							<form className="col-md-8 m-3" onSubmit={(e) => this.createProduct(e, createProduct)}>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Name</label>
										<input
											type="text"
											className="form-control"
											placeholder="Nombre"
											onChange={(val) => this.setProduct('name', val)}
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Price</label>
										<input
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
											type="number"
											className="form-control"
											placeholder="Stock"
											onChange={(val) => this.setProduct('stock', val)}
										/>
									</div>
								</div>

								<button
									disabled={!this.checkFields()}
									type="submit"
									className="btn btn-success float-right"
									>
									Guardar Cambios
								</button>
							</form>
						)}
					</Mutation>
				</div>
			</Fragment>
		);
	}
}
