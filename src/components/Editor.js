import React, { Component } from 'react';
import Preview from './Preview';

class Editor extends Component{
	constructor(){
		super()

		this.state={
			userInput: ''
		}

		this.handleUserInput = this.handleUserInput.bind(this)
	}

	handleUserInput(e){
		const userInput = e.target.value;
		this.setState({
			userInput
		})
	}

	componentWillMount(){
		const defaultText = 
`# Header
## sub header
There's also [links](https://www.freecodecamp.com)
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

 You can also make text **bold**... whoa!

 > Block Quotes!

![React Logo w/ Text](https://goo.gl/Umyytc)

  
`

		this.setState({
			userInput: defaultText
		})
	}

	render(){
		return (
			<div>
				<textarea id="editor" cols="30" rows="10"
					onChange={ this.handleUserInput } >
					{ this.state.userInput }
				</textarea>
				<Preview userInput={ this.state.userInput } />
			</div>
		)
	}
}



export default Editor;