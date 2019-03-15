import React, { Component } from 'react';
import './App.css';
import Balance from './components/Balance';
import { connect } from 'react-redux'

class App extends Component {

  getAllWallets = () => {
    return this.props.account.wallets.map( wallet => {
      // console.log(wallet)
      return <Balance data={wallet} />
    })
  }


  render() {
    const { account } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <Balance data={account.main_account} />
          {this.getAllWallets()}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    account : state.balance
  }
}

export default connect(mapStateToProps)(App)
