import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';


class App extends Component {
  render() {
    return (
      <div>
      	<h1 id="title">Markdown 
			<div id="slanted-line"></div>
      		<span> Previewer</span>
  		</h1>
  		<div id="section-titles">
			<h1>
			<i class="far fa-edit"></i>
				Edit
			</h1>
			<h1>
			<i class="far fa-eye"></i>
				Preview
			</h1>
  		</div>

        <Editor />
      </div>
    );
  }
}

export default App;
