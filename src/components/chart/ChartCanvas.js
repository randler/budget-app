import React, {useEffect} from 'react'
import Chart from "react-apexcharts";
import './Chart.css';
import axios from 'axios';


import { useSelector, useDispatch } from 'react-redux';
import { HOME_API } from '../../utils/variables/variables';
import { Row, Col, Alert } from 'react-bootstrap';
import { 
	getCategories, 
	getSeries, 
	getMax, 
	getMin, 
	getAVG, 
	getTotal 
} from '../../utils/functions/functions';

function ChartCanvas() {
	
	const budgets = useSelector(state => state.data);
	const dispatch = useDispatch();
    const options = {
        chart: {
          id: "basic-bar"
		},
		defaultLocale: 'pt-br',
        xaxis: {
		  	categories: getCategories(budgets),	
		},
		yaxis: {
			labels: {
			  formatter: val => "R$ " + val ,
		  }
	  }
      };
      const series = [
        {
          name: "Valor",
          data: getSeries(budgets)
        }
	  ]

	useEffect(() => {
		async function fetchData() {
		// You can await here
			await axios.get(HOME_API)
			.then(result =>{
				dispatch({type: 'ADD_BUDGETS', data: result.data});
			})
			.catch(error => {
				console.log(error);
			});
		}
		fetchData();
	}, []);

    return (
        <Row>
            <Col sm={8}>
				<Chart
					options={options}
					series={series}
					type="bar"
					width="100%"
					/>
				<div className="chart-desc-seller"> Vendedor</div>
        	</Col>
			<Col sm={4}>
				<Alert className="m-2" variant='success'>
					<b>Maior venda: </b> {getMax(budgets)}
				</Alert>
				<Alert className="m-2" variant='danger'>
					<b>Menor venda: </b> {getMin(budgets)}
				</Alert>
				<Alert className="m-2" variant='info'>
					<b>Média vendida: </b> {getAVG(budgets)}
				</Alert>
				<Alert className="m-2" variant='primary'>
					<b>Total vendido: </b> {getTotal(budgets)}
				</Alert>
			</Col>
		</Row>
    )
}

export default ChartCanvas
