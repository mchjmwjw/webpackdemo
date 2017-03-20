// Greeter.js只包括一个用来返回包含问候信息的html元素的函数。

/* var config = require('./config.json'); 
module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
}*/

//ES6 语法

import React, {Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'

class Greeter extends Component{
	render() {
		return (
			<div className={styles.root}> 
				{config.greetText}
			</div>
		);
	}
}
export default Greeter