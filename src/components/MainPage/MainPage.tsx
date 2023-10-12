import React from 'react';

import {Box, Button, Link, List, ListItem, Typography} from '@mui/material';
import Rating from 'components/Rating/Rating';
import {appstoreHref} from 'const/hrefs';

import appStore from '../../assets/images/App Store.svg';
import iphone12 from '../../assets/images/iphone 12 res.png';
import iphone15 from '../../assets/images/iphone15-pro.webp';
import videoPreview from '../../assets/videos/preview.mp4';

import workingFlowArray from './workingFlow';

import styles from './MainPage.module.scss';

const MainPage = () => {
	return (
		<main className={styles.main}>
			<Box className={styles.container}>
				<section className={styles.titleSection}>
					<Box className={styles.headingContainer}>
						<Typography variant="h1">
							ColorMe: Where creativity meets relaxation
						</Typography>
						<Typography variant="h3">
							Wide range of top coloring pages created by talented illustrators all
							over the world
						</Typography>
					</Box>
					<Box className={styles.appStoreContainer}>
						<Link href={appstoreHref}>
							<img src={appStore} alt="" />
						</Link>
						<Box className={styles.ratingContainer}>
							<Rating />
							<Typography variant="body1">184 reviews</Typography>
						</Box>
					</Box>
					<img src={iphone15} alt="" />
				</section>
				<section className={styles.workingFlowContainer} id="how-it-works">
					<Typography variant="h2">How it works</Typography>
					<List className={styles.workingFlowWrapper}>
						{workingFlowArray.map(item => {
							return (
								<ListItem key={item.id}>
									<Typography variant="h3">{item.number}</Typography>
									<Typography variant="h5">{item.title}</Typography>
									<Typography variant="body1">{item.subtitle}</Typography>
								</ListItem>
							);
						})}
						<ListItem>
							<Box>
								<video src={videoPreview} autoPlay muted loop />
							</Box>
							<img src={iphone12} alt="" />
						</ListItem>
					</List>
					<Box className={styles.getStartedContainer}>
						<Typography variant="h3">Ready to get started?</Typography>
						<Button variant="contained" href={appstoreHref}>
							Get started
						</Button>
					</Box>
				</section>
			</Box>
		</main>
	);
};

export default MainPage;
