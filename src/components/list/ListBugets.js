import React, { useEffect }  from 'react'
import { Tab, Row, Col } from 'react-bootstrap';

import axios from 'axios';
import { HOME_API } from '../../utils/variables/variables';
import { useDispatch, useSelector } from 'react-redux';

import BudgetItem from './BudgetItem';
import BudgetBody from './BudgetBody';

function ListBugets() {

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
    return (
        <div className="m-3" >
            <Tab.Container  id="list-group-tabs-example">
                <Row>
                    <Col xs={3}>
                        {budgets.map(budget =>  (
                        <BudgetItem key={budget} budget={budget} />
                        )
                    )}
                    </Col>
                    <Col xs={9}>
                        {budgets.map(budget =>  (
                            <BudgetBody key={budget} budget={budget} />
                            )
                        )}
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default ListBugets
