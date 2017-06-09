var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Loveneet',
  location: 'Ahmedabad'

};

var objTwo = {
  age: 22,
  ...objOne
};

console.log(objTwo);
ReactDOM.render(
  <h1>react-starter</h1>,
  document.getElementById('app')
);
