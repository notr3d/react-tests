import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="calc">
          <div className="calc-section">
          <div className="col-wrapper">
            <div className="col">
              <h2 className="header">Добавить продукт</h2>
              <div className="form">
                <form action="/">
                  <div className="input-item _big">
                    <label>
                      <div className="input-item__label">Продукт</div>
                      <div className="input-item__wrapper">
                        <input type="text"/>
                      </div>
                    </label>
                  </div>
                  <div className="input-item">
                    <label>
                      <div className="input-item__label">Цена</div>
                      <div className="input-item__wrapper">
                        <input type="text"/>
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
                      <tr>
                        <td>Телефон</td>
                        <td>100</td>
                        <td>99</td>
                      </tr>
                      <tr>
                        <td>Телефон</td>
                        <td>100</td>
                        <td>99</td>
                      </tr>
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
