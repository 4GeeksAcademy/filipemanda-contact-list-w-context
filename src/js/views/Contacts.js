import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../layout.js";


import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false


	});
	const { contacts, setcontacts } = useContext(AppContext);


	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/AddContact">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{contacts.map((contact, index) => {
							return (
								
								<ContactCard contact={contact} onDelete={() => setState({ showModal: true })} />
							);

						})}


					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};