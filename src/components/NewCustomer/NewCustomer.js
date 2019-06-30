import React, { Component, Fragment } from 'react';

import { Mutation } from 'react-apollo';
import { NEW_CUSTOMER } from '../../mutations';


export default class NewCustomer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editCustomer: {
				name: '',
				surname: '',
				type: null,
				email: ''
			}
		};
	}

	createCustomer = (e, createCustomer) => {
		e.preventDefault();
		const { editCustomer } = this.state;
		createCustomer({ variables: { input: editCustomer } });
	};

	setCustomer = (key, value) => {
		this.setState({
			editCustomer: {
				...this.state.editCustomer,
				[key]: value.target.value
			}
		});
  	};
  
  checkFields = () => {
    const { editCustomer } = this.state;
    let canSubmit  = true;
    if (!editCustomer.email || !editCustomer.name || !editCustomer.surname || !editCustomer.type) {
      canSubmit = false;
    }
    return canSubmit ;
  }

	render() {
		return (
			<Fragment>
				<h2 className="text-center">New Customer</h2>
				<div className="row justify-content-center">
					<Mutation
						mutation={NEW_CUSTOMER}
						onCompleted={() => this.props.history.push('/')}
					>
						{(createCustomer) => (
							<form className="col-md-8 m-3" onSubmit={(e) => this.createCustomer(e, createCustomer)}>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Nombre</label>
										<input
											type="text"
											className="form-control"
											placeholder="Nombre"
											onChange={(val) => this.setCustomer('name', val)}
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Apellido</label>
										<input
											type="text"
											className="form-control"
											placeholder="Apellido"
											onChange={(val) => this.setCustomer('surname', val)}
										/>
									</div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label>Tipo Cliente</label>
										<select
											className="form-control"
											onChange={(val) => this.setCustomer('type', val)}
										>
											<option value="">Elegir...</option>
											<option value="USER">USER</option>
											<option value="ADMIN">ADMIN</option>
										</select>
									</div>
									<div className="form-group col-md-6">
										<label>Email</label>
										<input
											type="email"
											className="form-control"
											placeholder="Email"
											onChange={(val) => this.setCustomer('email', val)}
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
