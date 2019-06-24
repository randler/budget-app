import React, { useEffect, useState }  from 'react'
import { Tab, Row, Col } from 'react-bootstrap';

import axios from 'axios';
import { HOME_API } from '../../utils/variables/variables';
import { useDispatch, useSelector } from 'react-redux';

import BudgetItem from './BudgetItem';
import BudgetBody from './BudgetBody';
import BudgetModal from './BudgetModal';

function ListBugets() {

    const [modal, setModal] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const budgets = useSelector(state => state.data);
    const dispatch = useDispatch();

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
	
	function renderModal(budget) {
		setDataModal(budget);
		setModal(true);
	}

    return (
        <div className="m-3" >
            <Tab.Container  id="list-group-tabs-example">
                <Row>
                    <Col sm={3}>
                        {budgets.map(budget =>  (
                        	<BudgetItem key={budget} renderModal={budgetItem => renderModal(budgetItem)} budget={budget} />
                        )
                    )}
                    </Col>
					<BudgetModal 
						budget={dataModal}
						show={modal}
						handleClose={() => setModal(false)} />
                </Row>
            </Tab.Container>
        </div>
    );
}

export default ListBugets
