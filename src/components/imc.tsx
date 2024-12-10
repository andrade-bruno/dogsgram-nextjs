'use client'

import React from "react";

export default function IMC() {
	const [height, setHeight] = React.useState(0)
	const [weight, setWeight] = React.useState(0)
	const [imc, setImc] = React.useState<string | undefined>(undefined)

	const calcImc = () => {
		const heightMeters = height / 100
		const output = (weight / (heightMeters * heightMeters)).toFixed(2)
		setImc(output)
	}

	return (
		<div>
				<label htmlFor="height">Height (cm)</label>
				<input
					id='height'
					name='height'
					type='number'
					value={height}
					onChange={(e => setHeight(Number(e.target.value)))}
				/>

				<label htmlFor="weight">Weight (kg)</label>
				<input
					id='weight'
					name='weight'
					type='number'
					value={weight}
					onChange={(e => setWeight(Number(e.target.value)))}
				/>

				<button onClick={calcImc}>Calculate</button>

				{imc && <label>Your IMC is {imc}</label>}
			</div>
	)
}