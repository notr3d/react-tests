import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItemTitle: '',
      newItemPrice: '',
      items: [],
      discount: 0
    };

    this.setNewItemTitle = this.setNewItemTitle.bind(this);
    this.setNewItemPrice = this.setNewItemPrice.bind(this);
  }

  setNewItemTitle(event) {
    this.setState({
      newItemTitle: event.target.value
    })
  }

  setNewItemPrice(event) {
    this.setState({
      newItemPrice: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const { newItemTitle, newItemPrice, items } = this.state;

    items.push({
      title: newItemTitle,
      price: newItemPrice
    });

    this.setState({
      items,
      newItemTitle: '',
      newItemPrice: ''
    })
  }

  render() {
    const { newItemTitle, newItemPrice, items, discount } = this.state;
    
    console.log(items)

    const itemList = items.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>99</td>
        </tr>
      )
    })

    return (
      <div className="app">
        <div className="calc">
          <div className="calc-section">
          <div className="col-wrapper">
            <div className="col">
              <h2 className="header">Добавить продукт</h2>
              <div className="form">
                <form action="/" onSubmit={this.handleSubmit}>
                  <div className="input-item _big">
                    <label>
                      <div className="input-item__label">Продукт</div>
                      <div className="input-item__wrapper">
                        <input 
                          type="text" 
                          value={newItemTitle}
                          onChange={this.setNewItemTitle}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="input-item">
                    <label>
                      <div className="input-item__label">Цена</div>
                      <div className="input-item__wrapper">
                        <input 
                          type="text"
                          value={newItemPrice}
                          onChange={this.setNewItemPrice}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="input-item">
                    <label>
                      <div className="input-item__label"></div>
                      <div className="input-item__wrapper">
                        <button>Добавить</button>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="col">
              <div className="tip">С помощью этой формы вы можете добавить товары в корзину</div>
            </div>
          </div>
          
          </div>
          <div className="calc-section">
            <div className="col-wrapper">
              <div className="col">
                <h2 className="header">Корзина</h2>
                <div className="table">
                  <table>
                    <thead>
                      <tr>
                        <th>Продукт</th>
                        <th>Цена</th>
                        <th>Цена со скидкой</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemList}
                    </tbody>
                  </table>
                </div>
                <div className="form">
                  <form action="/">
                    <div className="input-item">
                      <label>
                        <span>Применить скидку</span>
                        <input type="text"/>
                        <span>рублей</span>
                        <button>Применить</button>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col">
                <div className="tip">Скидка для каждой позиции рассчитывается пропорционально цене товара. Скидка всегда в рублях без копеек. Сумма скидок по каждому товару всегда точно равна общей сумме. При округлении остаток суммы применяется к самому дорогому товару в корзине.</div>
              </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App;
