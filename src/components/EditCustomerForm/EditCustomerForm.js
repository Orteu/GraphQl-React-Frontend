import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Mutation } from 'react-apollo';
import { UPDATE_CUSTOMER } from '../../mutations';


class EditCustomerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editCustomer: {}
		};
	}

	componentDidMount() {
		const { customer } = this.props;
		if (customer.id) {
			this.setState({ editCustomer: customer });
		}
	}

	setCustomer = (key, value) => {
		this.setState({
			editCustomer: {
				...this.state.editCustomer,
				[key]: value.target.value
			}
		});
	};

	updateCustomer = (e, updateCustomer) => {
		e.preventDefault();
		const { editCustomer } = this.state;
		updateCustomer({ variables: { 
			input: editCustomer
		}});
	};

	render() {
		const { editCustomer } = this.state;
		const { refetch } = this.props;
        const { name, surname, email, type } = editCustomer;
		return (
			<Mutation
				mutation={UPDATE_CUSTOMER}
				onCompleted={
					() => refetch()
						.then(() => this.props.history.push('/'))
				}
			>
				{(updateCustomer) => (
					<form
						className="col-md-8 m-3"
						onSubmit={(e) => this.updateCustomer(e, updateCustomer)}
					>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label>Nombre</label>
								<input
								value={name}
									type="text"
									className="form-control"
									placeholder="Nombre"
									onChange={(val) => this.setCustomer('name', val)}
								/>
							</div>
							<div className="form-group col-md-6">
								<label>Apellido</label>
								<input
									value={surname}
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
									value={type}
								>
									<option value="">Elegir...</option>
									<option value="USER">USER</option>
									<option value="ADMIN">ADMIN</option>
								</select>
							</div>
							<div className="form-group col-md-6">
								<label>Email</label>
								<input
									value={email}
									type="email"
									className="form-control"
									placeholder="Email"
									onChange={(val) => this.setCustomer('email', val)}
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

export default withRouter(EditCustomerForm);
