import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// const commonElementsOptimized = (...args) => {
//   let commonCache = {}

//   let countCache = {}


//   args.forEach(arr => {
//     arr.forEach(el => {
//       if (!countCache[el]) {
//         countCache[el] = 1
//       } else {
//         countCache[el]++
//       }

//       if (!commonCache[countCache[el]]){
//         commonCache[countCache[el]] = [el];
//       } else {
//         commonCache[countCache[el]].push(el)
//       }

//     })
//   })

//   return commonCache[args.length] ? commonCache[args.length] : "Nothing in Common!"
// }