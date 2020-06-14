import React from 'react';
import buildControls from '../BuildControls';
import classes from './BuildControl.module.css';

const buildControls = (props) => (
	<div className={classes.BuildControl}>
		<div className={classes.Label}>{props.label}</div>
		<button className={classes.Less}>Less</button>
		<button className={classes.More}>More</button>
	</div>
);

export default buildControls;
