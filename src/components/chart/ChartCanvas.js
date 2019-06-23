import React, {useEffect} from 'react'
import Chart from "react-apexcharts";
import './Chart.css';
import axios from 'axios';


import { useSelector, useDispatch } from 'react-redux';
import { HOME_API } from '../../utils/variables/variables';

function ChartCanvas() {
	
	const budgets = useSelector(state => state.data);
	const dispatch = useDispatch();
    const options = {
        chart: {
          id: "basic-bar"
		},
		defaultLocale: 'pt',
        xaxis: {
          categories: getCategories(budgets)
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
        <div className="m-5">
			<div className="chart-money">Valor R$</div>
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
            />
			<div className="chart-desc-seller"> Vendedor</div>
        </div>
    )
}

export default ChartCanvas
