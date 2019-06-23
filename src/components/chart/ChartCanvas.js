import React, {useEffect} from 'react'
import Chart from "react-apexcharts";

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
        xaxis: {
          categories: getCategories(budgets)
        }
      };
      const series = [
        {
          name: "series-1",
          data: getSeries(budgets)
        }
	  ]
	  
	  function getCategories(budgets) {
		  //let names = ['Total'];
		  let names = [];
		  budgets.map(budget => names.push(budget.seller));
		  return names;
	  }

	  function getSeries(budgets) {
		  //let total = 0;
		  let valores = [];
		  budgets.map(budget => {
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
        <div>
            <Chart
              options={options}
              series={series}
              type="bar"
              width="500"
            />
            
        </div>
    )
}

export default ChartCanvas
