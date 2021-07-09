import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./Todolist.css";
import LoginHelper from './LoginHelper.js';
 
 
 
class TodoList extends Component {
    render() {
        if (LoginHelper.isLoggedIn()) {
        return (
          <div className="Todolist">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                        placeholder="Wpisz zadanie">
                </input>
                <button type="submit">dodaj</button>
              </form>
            </div>
            <TodoItems entries={this.state.items}
                       delete={this.deleteItem}/>
          </div>
        );
      } else {
        <h1> nie zalogowany </h1>
      }
    }
        constructor(props) {
        super(props);
       
        this.state = {
          items: []
        };
       
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
 
      
   
        addItem(e) {
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }else {
            window.location.href = '/login';
          }
         
        console.log(this.state.items);
           
        e.preventDefault();
        }
        
      deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
       
        } 
}
 
 
 
 
export default TodoList;