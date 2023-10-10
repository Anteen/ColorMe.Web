import React from 'react';

import {Box} from '@mui/material';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MainPage from 'components/MainPage/MainPage';

import styles from './LandingPage.module.scss';

const LandingPage = () => {
	return (
		<Box className={styles.pageContainer} id="main">
			<Header />
			<MainPage />
			<Footer />
		</Box>
	);
};

export default LandingPage;
