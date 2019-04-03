import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItemTitle: '',
      newItemPrice: 0,

      items: [],

      newDiscount: 0,
      discount: 0
    };

    this.setNewItemTitle = this.setNewItemTitle.bind(this);
    this.setNewItemPrice = this.setNewItemPrice.bind(this);
    this.setDiscount = this.setDiscount.bind(this);
  }

  setNewItemTitle(event) {
    this.setState({
      newItemTitle: event.target.value
    })
  }

  setNewItemPrice(event) {
    const value = Number(event.target.value);

    if (isNaN(value)) return false;

    this.setState({
      newItemPrice: value
    })
  }

  setDiscount(event) {
    const value = Number(event.target.value);

    if (isNaN(value)) return false;

    this.setState({
      newDiscount: value
    })
  }

  submitItem = e => {
    e.preventDefault();

    const { newItemTitle, newItemPrice, items } = this.state;

    items.push({
      title: newItemTitle,
      price: newItemPrice
    });

    this.setState({
      items,
      newItemTitle: '',
      newItemPrice: 0
    })
  }

  submitDiscount = e => {
    e.preventDefault();

    this.setState({
      discount: this.state.newDiscount
    })
  }

  renderDiscount = (index, totalPrice) => {
    const { items, discount } = this.state;
    const { price } = items[index];

    return price - Math.round(discount / 100 * Math.floor(price / totalPrice * 100))
  }

  validateProduct = () => {
    const { newItemTitle, newItemPrice } = this.state;
    return !(newItemTitle && newItemPrice)
  }

  render() {
    const { state, validateProduct, validateDiscount, submitDiscount, renderDiscount, submitItem, setNewItemTitle, setNewItemPrice, setDiscount } = this;
    const { newItemTitle, newItemPrice, newDiscount, items, discount } = state;
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    const discountIsValid = newDiscount >= totalPrice;
    const itemList = items.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{renderDiscount(index, totalPrice)}</td>
        </tr>
      )
    });

    return (
      <div className="app">
        <div className="calc">
          <div className="calc-section">
          <div className="col-wrapper">
            <div className="col">
              <h2 className="header">Добавить продукт</h2>
              <form action="/" onSubmit={submitItem}>
                <div className="input-item">
                  <label>
                    <div className="input-item__label">Продукт</div>
                    <div className="input-item__wrapper">
                      <input 
                        type="text" 
                        value={newItemTitle}
                        onChange={setNewItemTitle}
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
                        onChange={setNewItemPrice}
                      />
                    </div>
                  </label>
                </div>
                <div className="input-item">
                  <label>
                    <div className="input-item__label"></div>
                    <div className="input-item__wrapper">
                      <button disabled={validateProduct()}>Добавить</button>
                    </div>
                  </label>
                </div>
              </form>
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
                {items.length 
                  ? (
                    <div>
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
                      <form action="/" onSubmit={submitDiscount}>
                        <div className="inline-input">
                          <label>
                            <span>Применить скидку</span>
                            <input 
                              type="text" 
                              value={newDiscount}
                              onChange={setDiscount}
                            />
                            <span>рублей</span>
                          </label>
                          <button disabled={discountIsValid}>Применить</button>
                        </div>
                      </form>
                    </div>
                  )
                  : <div className="empty-cart">В корзине нет товаров</div>
                }
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
