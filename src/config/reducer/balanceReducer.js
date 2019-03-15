

const initialState = {
  main_account : { balance: 1000, d_currency: "USD"},
  wallets : [
    {balance: 100, currency: "ZENIES"},
    {balance: 100, currency: "ZENIES"},
    {balance: 100, currency: "ZENIES"},
    {balance: 100, currency: "ZENIES"},
    {balance: 100, currency: "ZENIES"},
  ]
}

const balanceReducer = (state = initialState, action) => {
  switch(action.type){
    
    default:
      console.log('balanceeeeee');
      return state
  }
}


export default balanceReducer