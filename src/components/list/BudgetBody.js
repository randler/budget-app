import React from 'react'
import { Tab } from 'react-bootstrap';

function BudgetBody({budget}) {
    return (
        <Tab.Content>
            <Tab.Pane eventKey={`#${budget.id}`}>
            </Tab.Pane>
        </Tab.Content>
    )
}

export default BudgetBody
