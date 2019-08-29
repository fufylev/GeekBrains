import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import Login from "./components/Login";

class App extends React.Component {
  render() {
    const menuItems = [
      { href: "/", title: "Главная" },
      { href: "/about", title: "О нас" },
      { href: "/service", title: "Услуги" },
      { href: "/contacts", title: "Контакты" }
    ];
    
    return <div className="container my-3">
      <Menu items={menuItems} titleMenu="Основное меню сайта" />
      <Login />
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
