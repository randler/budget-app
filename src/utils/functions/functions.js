export function currencyConvert(value, currency = 'us') {
    switch (currency) {
        case 'us':
            return parseFloat(value.value.replace('R$ ', '').replace(',', '.'))
        default:
            return value;
    }
}

export function formatCurrency(value, currency = 'pt-br') {
    switch (currency) {
        case 'pt-br':
            return  `R$ ${value.toLoacaleString('pt-BR')}`
    
        default:
            return `U$ ${value}`
    }
}

export function formatString(valueString) {
    return valueString.value.replace('R$ ', '').replace(',', '.')
}

export function getMin(budgets) {
    return Math.min(...budgets.map(budget => currencyConvert(budget)));
}
export function getMax(budgets) {
    return Math.max(...budgets.map(budget => currencyConvert(budget)));
}
export function getTotal(budgets) {
    let total = 0;
    budgets.map(budget => {
        total += currencyConvert(budget);

    })
    return total;
}
export function getAVG(budgets) {
    let avg = 0;
    budgets.map(budget => {
        avg += currencyConvert(budget);

    })
    return Math.round(avg / budgets.length, 1);
}


export function sortBudgetByValue(budgets) {
    return budgets.sort((a, b) => formatString(a) - formatString(b));
  }
  
export function getCategories(budgets) {
      //let names = ['Total'];
      let names = [];
      sortBudgetByValue(budgets).map(budget => names.push(budget.seller));
      return names;
  }

export function getSeries(budgets) {
      //let total = 0;
      let valores = [];
      sortBudgetByValue(budgets).map(budget => {
          let valor = currencyConvert(budget);
          valores.push(valor);
          // total += valor;
      });

      //return [total, ...valores];
      return valores 
  }
