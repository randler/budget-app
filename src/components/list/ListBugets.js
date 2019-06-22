import React from 'react'
import { Tab, Row, Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import BudgetItem from './BudgetItem';
import BudgetBody from './BudgetBody';

function ListBugets() {

    const budgets = useSelector(state => state.data);

    return (
        <div className="m-3" >
            <Tab.Container  id="list-group-tabs-example">
                <Row>
                    <Col xs={3}>
                        {budgets.map(budget =>  (
                        <BudgetItem budget={budget} />
                        )
                    )}
                    </Col>
                    <Col xs={9}>
                        {budgets.map(budget =>  (
                            <BudgetBody budget={budget} />
                            )
                        )}
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}

export default ListBugets
