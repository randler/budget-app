import React, {useEffect} from 'react'
import Chart from "react-apexcharts";
import './Chart.css';
import axios from 'axios';


import { useSelector, useDispatch } from 'react-redux';
import { HOME_API } from '../../utils/variables/variables';
import { Row, Col, Alert } from 'react-bootstrap';

function ChartCanvas() {
	
	const budgets = useSelector(state => state.data);
	const dispatch = useDispatch();
	const optionsPie = {
		chart: {
			type: 'donut'
		},
		series: [44, 55, 13, 33],
		labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
	  }
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

	  function sortBudgetByValue(budgets) {
		return budgets.sort((a, b) => a.value.replace('R$ ', '').replace(',', '.') - b.value.replace('R$ ', '').replace(',', '.'));
	  }
	  
	  function getCategories(budgets) {
		  //let names = ['Total'];
		  let names = [];
		  console.log(sortBudgetByValue(budgets));
		  sortBudgetByValue(budgets).map(budget => names.push(budget.seller));
		  return names;
	  }

	  function getSeries(budgets) {
		  //let total = 0;
		  let valores = [];
		  sortBudgetByValue(budgets).map(budget => {
			  let valor = parseFloat(budget.value.replace('R$ ', '').replace(',', '.'));
			  valores.push(valor);
			  // total += valor;
		  });

		  //return [total, ...valores];
		  return valores 
	  }

	  function getMin(budgets) {
		  return Math.min(...budgets.map(budget => parseFloat(budget.value.replace('R$ ', '').replace(',', '.'))));
	  }
	  function getMax(budgets) {
		  return Math.max(...budgets.map(budget => parseFloat(budget.value.replace('R$ ', '').replace(',', '.'))));
	  }
	  function getTotal(budgets) {
		  let total = 0;
		  budgets.map(budget => {
			  total += parseFloat(budget.value.replace('R$ ', '').replace(',', '.'));

		  })
		  return total;
	  }
	  function getAVG(budgets) {
		  let avg = 0;
		  budgets.map(budget => {
			  avg += parseFloat(budget.value.replace('R$ ', '').replace(',', '.'));

		  })
		  return Math.round(avg / budgets.length, 1);
	  }

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
            <Col xs={8}>
				<Chart
					options={options}
					series={series}
					type="bar"
					width="100%"
					/>
				<div className="chart-desc-seller"> Vendedor</div>
        	</Col>
			<Col xs={4}>
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
