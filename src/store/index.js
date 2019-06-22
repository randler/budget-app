import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        {
            id: 1,
            seller: "Joaquim Silva",
            customer: "Thiago Alberto",
            description: "Rebinboca da parafuseta",
            value: "R$ 120,00"
            },
            {
            id: 2,
            seller: "Raphael Cangucu",
            customer: "Tomas Aquino",
            description: "Virabrequim Ford Ka",
            value: "R$ 260,00"
            },
            {
            id: 4,
            seller: "Lucas Emanuel",
            customer: "Lucas Tadeu",
            description: "Cilindro de Caminhao",
            value: "R$ 889,00"
            },
            {
            id: 5,
            seller: "Guilherme Assis",
            customer: "Gabriel Campolina",
            description: "Tapete de Celta",
            value: "R$ 50,00"
            },
            {
            id: 6,
            seller: "Thiago Assis",
            customer: "Igor Calixto",
            description: "4 Pneus Pirelli 160",
            value: "R$ 1090,00"
            },
            {
            id: 7,
            seller: "Raphael Cangucu",
            customer: "Alex Xavier",
            description: "Guia de acompanhamento",
            value: "R$ 260,00"
            },
            {
            id: 8,
            seller: "Thiago Alberto",
            customer: "Larissa Gusmao",
            description: "Retrovisor frontal Gol",
            value: "R$ 710,00"
            },
            {
            id: 9,
            seller: "Daniel Teles",
            customer: "Joa Farias",
            description: "Celular para Motorista profissional",
            value: "R$ 600,00"
            },
            {
            id: 10,
            seller: "Gabriel Cassins",
            customer: "Mariana Cruz",
            description: "Sensor de Freio",
            value: "R$ 160,40"
            }
    ]
};

function dataBudget(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_HISTORIC':
            return { ...state, data:[ ...state.data, action.data] };    
        default:
            return state
    }
}

const store = createStore(dataBudget);
export default store;