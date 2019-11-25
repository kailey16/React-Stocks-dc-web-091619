import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'  

class MainContainer extends Component {

  state = {
    allstocks: [],
    stocks: [],
    myStocks: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stockArray => this.setState({
      allstocks: stockArray,
      stocks: stockArray}))
  }

  addStockToFolio = (stockObj) => {
    this.setState(pre => {return {myStocks: [...pre.myStocks, stockObj]}})
  }

  removeStockFromFolio = (stockObj) => {
    const newMyStocks = this.state.myStocks.filter(stock => stock.id !== stockObj.id)
    this.setState({myStocks: newMyStocks})
  }

  changeFilter = (e) => {
    const stocksFiltered = this.state.allstocks.filter(stock => stock.type === e.target.value)
    this.setState({stocks: stocksFiltered})
  }

  radioChecked = (e) => {
    if (e.target.name === "A") {
      const aSorted = this.state.stocks.sort((a,b) => a.name > b.name ? 1 : -1)
      this.setState({stocks: aSorted})
    } else {
      const pSorted = this.state.stocks.sort((a,b) => a.price > b.price ? 1 : -1)
      this.setState({stocks: pSorted})
    }
  }


  render() {
    return (
      <div>
        <SearchBar changeFilter={this.changeFilter} radioChecked={this.radioChecked} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} stockClicked={this.addStockToFolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} stockClicked={this.removeStockFromFolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
