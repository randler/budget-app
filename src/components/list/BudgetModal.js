import React from 'react'
import { Button, Modal } from 'react-bootstrap';

function BudgetModal({ show, handleClose, budget }) {
    return (
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{budget.seller}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>Cliente: </b><p>{budget.customer}</p>
            <b>Descrição: </b><p>{budget.description}</p>
            <b className="text-danger">Valor: </b><p className="text-danger">{budget.value}</p>  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
    
}

export default BudgetModal
