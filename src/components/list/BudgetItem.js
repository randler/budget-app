import React from 'react'
import { ListGroup } from 'react-bootstrap';

function BudgetItem({budget}) {
    return (
        <ListGroup>
            <ListGroup.Item action href={`#${budget.id}`}>
                {budget.seller}
            </ListGroup.Item>
        </ListGroup>
    )
}

export default BudgetItem
