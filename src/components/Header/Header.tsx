import React from 'react';
import {Link} from 'react-scroll';

import {Box, Button, List, ListItemButton} from '@mui/material';
import {appstoreHref} from 'const/hrefs';

import logo from '../../assets/icons/ColorMeLogo.svg';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<Box className={styles.container}>
				<img src={logo} alt="Color Me" />
				<nav>
					<List className={styles.navigationList}>
						<ListItemButton>
							<Link to="main" smooth duration={500}>
								Main
							</Link>
						</ListItemButton>
						<ListItemButton>
							<Link to="how-it-works" smooth duration={500}>
								How it works
							</Link>
						</ListItemButton>
					</List>
				</nav>
				<Button className={styles.headerButton} variant="contained" href={appstoreHref}>
					Download
				</Button>
			</Box>
		</header>
	);
};

export default Header;
