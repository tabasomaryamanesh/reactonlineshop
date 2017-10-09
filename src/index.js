// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// //import App from './App';
// import registerServiceWorker from './registerServiceWorker';

//  //ReactDOM.render(<App />, document.getElementById('app'));
// // registerServiceWorker();


import {createStore} from 'redux';
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions'

// Store
const store = createStore(reducers);

// to get the current state of the store
store.subscribe(function(){
  console.log("Current state is :" + store.getState());
})

// Actions (create and dispatch actions) 
store.dispatch({type:"POST_BOOK", payload: [{
    id:1,
    title:'This is the book title',
    description:'This is the book description',
    price: 33.3
},{
    id:2,
    title:'This is the book title',
    description:'This is the book description',
    price: 55.3
}] })

store.dispatch({type:"BOOK_DELETE", payload:{id:1}})

store.dispatch({type:"BOOK_UPDATE", payload:{id:2,title:'Title has been updated.'}})

store.dispatch(addToCart([{id:1}]))