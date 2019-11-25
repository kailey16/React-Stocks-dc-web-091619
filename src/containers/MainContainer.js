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
    const stocksFiltered = e.target.value === "All" ? (this.state.allstocks) : (this.state.allstocks.filter(stock => stock.type === e.target.value))
    this.setState({stocks: stocksFiltered})
    document.querySelector(".aSort").checked = false
    document.querySelector(".pSort").checked = false
  }

  checkboxChecked = (e) => {
    if (e.target.checked) {
    if (e.target.name === "A") {
      const aSorted = this.state.stocks.sort((a,b) => a.name > b.name ? 1 : -1)
      this.setState({stocks: aSorted})
    } else if (e.target.name === "P") {
      const pSorted = this.state.stocks.sort((a,b) => a.price > b.price ? 1 : -1)
      this.setState({stocks: pSorted})
    }}
  }


  render() {
    return (
      <div>
        <SearchBar changeFilter={this.changeFilter} checkboxChecked={this.checkboxChecked} />

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
