import React from 'react'
import { Tab } from 'react-bootstrap';

function BudgetBody({budget}) {
    return (
        <Tab.Content>
            <Tab.Pane eventKey={`#${budget.id}`}>
                <b>Vendedor: </b><p>{budget.customer}</p>
                <b>Descrição: </b><p>{budget.description}</p>
                <b className="text-danger">Valor: </b><p className="text-danger">{budget.value}</p>
            </Tab.Pane>
        </Tab.Content>
    )
}

export default BudgetBody
