import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contacts } from "./views/Contacts";
import { Modal } from "./component/Modal";
import { AddContact } from "./views/AddContact";
import { ContactCard } from "./component/ContactCard";

export const AppContext = React.createContext();
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [contacts, setcontacts] = useState([]);
	useEffect(() => {
		fetch("https://playground.4geeks.com/apis/fake/contact/agenda/filipemanda")
			.then((resp) => resp.json())
			.then((data) => (setcontacts(data)));
	}, []);

	return (
		<div>
			<AppContext.Provider value={{ contacts, setcontacts }}>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Routes>

							<Route path="/" element={<Contacts />} />
							<Route path="/modal" element={<Modal />} />
							<Route path="/addcontact" element={<AddContact />} />
							<Route path="/contactcard" element={<ContactCard />} />
							<Route path="/demo" element={<Demo />} />
							<Route path="/single/:theid" element={<Single />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</AppContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
