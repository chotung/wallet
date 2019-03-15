import React from 'react'

export default function Balance(props) {
  const { balance, d_currency, currency } = props.data
  // console.log(props.data)
  return (
    <div>
      {balance} 
      {d_currency ? d_currency : currency}

    </div>
  )
}
