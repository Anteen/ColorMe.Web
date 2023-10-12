import React from 'react';

import {Box, List, ListItemButton} from '@mui/material';
import {contactEmail, policyHref} from 'const/hrefs';

import logo from '../../assets/icons/ColorMeLogo.svg';

import styles from './Footer.module.scss';

const Header = () => {
	return (
		<footer className={styles.footer}>
			<Box className={styles.container}>
				<img src={logo} alt="Color Me" />
				<List className={styles.contactsList}>
					<ListItemButton href={`mailto:${contactEmail}`}>Contact Us</ListItemButton>
					<ListItemButton href={policyHref}>Subscription Terms</ListItemButton>
					<ListItemButton href={policyHref}>Privacy Policy</ListItemButton>
					<ListItemButton href={policyHref}>Terms of service</ListItemButton>
				</List>
			</Box>
		</footer>
	);
};

export default Header;
