import React from 'react';

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {Box} from '@mui/material';

import styles from './Rating.module.scss';

const Rating = () => {
	return (
		<Box className={styles.ratingContainer}>
			<StarRoundedIcon />
			<StarRoundedIcon />
			<StarRoundedIcon />
			<StarRoundedIcon />
			<StarRoundedIcon />
		</Box>
	);
};

export default Rating;
