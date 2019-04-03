import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="app">
      <div class="calc">
        <div class="calc-head">
          <div class="col-wrapper">
            <div class="col">
              <h2 class="header">Добавить продукт</h2>
              <div class="form">
                <form action="/">
                  <div class="input-item">
                    <label>
                      <div class="input-item__label">Продукт</div>
                      <div class="input-item__wrapper">
                        <input type="text"/>
                      </div>
                    </label>
                  </div>
                  <div class="input-item">
                    <label>
                      <div class="input-item__label">Цена</div>
                      <div class="input-item__wrapper">
                        <input type="text"/>
                      </div>
                    </label>
                  </div>
                  <div class="input-item">
                    <label>
                      <div class="input-item__label"></div>
                      <div class="input-item__wrapper">
                        <button>Добавить</button>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="col">
              <div class="tip">С помощью этой формы вы можете добавить товары в корзину</div>
            </div>
          </div>
        </div>
      </div>
      <div class="calc-body">
        <div class="col-wrapper">
          <div class="col">
            <h2 class="header">Корзина</h2>
            <div class="table">
              <table>
                <tr>
                  <th>Продукт</th>
                  <th>Цена</th>
                  <th>Цена со скидкой</th>
                </tr>
                <tr>
                  <td>Телефон</td>
                  <td>100</td>
                  <td>99</td>
                </tr>
              </table>
            </div>
            <div class="form">
              <form action="/">
                <div class="input-item">
                  <label>
                    <span>Применить скидку</span>
                    <input type="text"/>
                    <span>рублей</span>
                  </label>
                </div>
                <div class="input-item">
                  <button>Применить</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col">
            <div class="tip">Скидка для каждой позиции рассчитывается пропорционально цене товара. Скидка всегда в рублях без копеек. Сумма скидок по каждому товару всегда точно равна общей сумме. При округлении остаток суммы применяется к самому дорогому товару в корзине.</div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
