import React from 'react';

import {Box, List, ListItemButton} from '@mui/material';

import logo from '../../assets/icons/ColorMeLogo.svg';

import styles from './Footer.module.scss';

const Header = () => {
	return (
		<footer className={styles.footer}>
			<Box className={styles.container}>
				<img src={logo} alt="Color Me" />
				<List className={styles.contactsList}>
					<ListItemButton>Contact Us</ListItemButton>
					<ListItemButton>Subscription Terms</ListItemButton>
					<ListItemButton>Privacy Policy</ListItemButton>
					<ListItemButton>Terms of service</ListItemButton>
				</List>
			</Box>
		</footer>
	);
};

export default Header;
