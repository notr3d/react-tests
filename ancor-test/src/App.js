import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItemTitle: '',
      newItemPrice: 0,
      items: [
        {
          title: 'Телефон',
          price: 100,
        }, {
          title: 'Магнитофон',
          price: 200,
        }, {
          title: 'Миелофон',
          price: 400,
        }, 
      ],
      newDiscount: 7,
      discount: 7
    };

    this.setNewItemTitle = this.setNewItemTitle.bind(this);
    this.setNewItemPrice = this.setNewItemPrice.bind(this);
    this.changeDiscount = this.changeDiscount.bind(this);
  }

  setNewItemTitle(event) {
    this.setState({
      newItemTitle: event.target.value
    })
  }

  setNewItemPrice(event) {
    this.setState({
      newItemPrice: Number(event.target.value)
    })
  }

  changeDiscount(event) {
    this.setState({
      newDiscount: Number(event.target.value)
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
      newItemPrice: 0
    })
  }

  submitDiscount = e => {
    e.preventDefault();

    this.setState({
      discount: this.state.newDiscount
    })
  }

  renderDiscount = index => {
    const { items, discount } = this.state;
    const { price } = items[index];

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

    return Math.round(discount / 100 * Math.floor(price / totalPrice * 100))
  }

  render() {
    const { state, submitDiscount, renderDiscount, handleSubmit, setNewItemTitle, setNewItemPrice, changeDiscount } = this;
    const { newItemTitle, newItemPrice, newDiscount, items, discount } = state;
    const itemList = items.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{renderDiscount(index)}</td>
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
                <form action="/" onSubmit={handleSubmit}>
                  <div className="input-item _big">
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
                  <form action="/" onSubmit={submitDiscount}>
                    <div className="input-item">
                      <label>
                        <span>Применить скидку</span>
                        <input 
                          type="text" 
                          value={newDiscount}
                          onChange={changeDiscount}
                        />
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
