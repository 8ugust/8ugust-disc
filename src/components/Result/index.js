import React from 'react';
import styles from './index.module.css';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

function Result(props) {
    const resultHash = {
        'Best':{'D':0, 'I':0, 'S':0, 'C':0, 'N':0},
        'Wrst':{'D':0, 'I':0, 'S':0, 'C':0, 'N':0},
        'Result':{'D':0, 'I':0, 'S':0, 'C':0}
    };

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: false
			},
		},
		scales : {
			y : {
				max: 28,
				min: -28,
				stepSize: 5
			}
		}
	};

	const data = {
		labels: ['D', 'I', 'S', 'C'],
		datasets : [
			{
				fill: false,
				label: 'Dataset',
				data: [0, 0, 0, 0],
				borderColor: 'rgb(255, 99, 132)'
			}
		]
	}

    if (props.status === 2) {
        props.befCalAnswer.forEach((item, idx) => {
            props.questions[idx].forEach((jtem, jdx) => {
                if (jdx === item[0][0]) {
					if (jtem[1] === 'D') resultHash.Best.D += 1;
					if (jtem[1] === 'I') resultHash.Best.I += 1;
					if (jtem[1] === 'S') resultHash.Best.S += 1;
					if (jtem[1] === 'C') resultHash.Best.C += 1;
					if (jtem[1] === 'N') resultHash.Best.N += 1;
				}

                if (jdx === item[0][1]) {
					if (jtem[2] === 'D') resultHash.Wrst.D += 1;
					if (jtem[2] === 'I') resultHash.Wrst.I += 1;
					if (jtem[2] === 'S') resultHash.Wrst.S += 1;
					if (jtem[2] === 'C') resultHash.Wrst.C += 1;
					if (jtem[3] === 'N') resultHash.Wrst.N += 1;
				}
            })
        });

		data.datasets[0].data[0] = resultHash.Best.D - resultHash.Wrst.D;
		data.datasets[0].data[1] = resultHash.Best.I - resultHash.Wrst.I;
		data.datasets[0].data[2] = resultHash.Best.S - resultHash.Wrst.S;
		data.datasets[0].data[3] = resultHash.Best.C - resultHash.Wrst.C;
    }

    return (
        <>
        <div className={props.status === 2 ? styles.result_wrap_show : styles.result_wrap_hide}>
			<div>
				<Line options={options} data={data} redraw={true}/>
			</div>
        </div>
        </>
    );
}

export default Result;