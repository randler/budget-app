import React from 'react'
import { ListGroup } from 'react-bootstrap';

function BudgetItem({budget, renderModal}) {
    return (
        <ListGroup>
            <ListGroup.Item action onClick={() => renderModal(budget)} href={`#${budget.id}`}>
                {budget.seller}
            </ListGroup.Item>
        </ListGroup>
    )
}

export default BudgetItem
