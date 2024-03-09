import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout";
import { Context } from "../store/appContext";


export const AddContact = () => {
	const [fname, setFname] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")
	const { contacts, setcontacts } = useContext(AppContext);
	const { store, actions } = useContext(Context);


	const handleSave = () => {
		var newContact = {
			"full_name": fname,
			"email": email,
			"agenda_slug": "filipemanda",
			"phone": phone,
			"address": address

		}
		fetch('https://playground.4geeks.com/apis/fake/contact/', {
			method: 'POST',
			body: JSON.stringify(newContact), // data can be a 'string' or an {object} which comes from somewhere further above in our application
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(resp => resp.JSON)
			.then(data => fetchMethod())
			.catch(error => console.error(error));
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" onChange={(e) => setFname(e.target.value)} className="form-control" placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} placeholder="Enter address" />
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={handleSave}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};