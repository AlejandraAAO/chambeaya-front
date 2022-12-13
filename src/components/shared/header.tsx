import React from 'react';
import './../../sass/shared/_header.scss';
import NavbarComponent from './NavbarComponent';
import { ADMIN, COMPANY, POSTULANT, SALES, SESSION, USER } from './../../helpers/constants';
import { getLocalStorage } from '../../helpers/localStorage';

const navNoUser = {
	brand: { name: 'ChambeaYa.', to: '/' },
	links: [
		{ name: 'Buscar chamba', to: '/searchjob/{idCategorySelected}' },
		{ name: 'Iniciar sesión', to: '/login' },
		{ name: 'Registrarme', to: '/register' },
	],
};

const navUser = {
	brand: { name: 'ChambeaYa.', to: '/' },
	links: [
		{ name: 'Buscar un empleo', to: '/searchjob/{idCategorySelected}' },
		{ name: 'Mi perfil', to: '/myaccount/0' },
	],
};

const navSales = {
	brand: { name: 'ChambeaYa.', to: '/' },
	links: [
		{ name: 'Buscar un empleo', to: '/searchjob/{idCategorySelected}' },
		{ name: 'Mi perfil', to: '/account-sales' },
	],
};
const navAdmin = {
	brand: { name: 'ChambeaYa.', to: '/' },
	links: [
		{ name: 'Buscar un empleo', to: '/searchjob/{idCategorySelected}' },
		{ name: 'Mi perfil', to: '/dashboard' },
	],
};

export default function Header() {
	const sesionLog = getLocalStorage(SESSION);
	const { rol } = getLocalStorage(USER);

	let nav: any;
	if (sesionLog !== null) {
		switch (rol) {
			case POSTULANT:
			case COMPANY:
				nav = { ...navUser };
				break;
			case SALES:
				nav = { ...navSales };
				break;
			case ADMIN:
				nav = { ...navAdmin };
				break;
			default:
				break;
		}
	} else {
		nav = { ...navNoUser };
	}
	const { brand, links } = nav;

	return (
		<React.Fragment>
			<header>
				<NavbarComponent brand={brand} links={links} />
			</header>
		</React.Fragment>
	);
}
