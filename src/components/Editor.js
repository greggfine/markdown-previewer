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
Check out my [link](https://www.freecodecamp.com)
Look at my div, \`<div></div>\`
\`\`\`
// this is multi-line code:
function sayName(firstName, lastName) {
  if (firstName == '\`\`\`' && lastName == '\`\`\`') {
    return sayName;
  }
}
\`\`\`
- Check out these lists.
  - This is bulleted.
     - This has an indentation level.
        - That looks like so.

 And now make some text look **bold**... wheeeee!

	
> Quote
> > Shakespeare > "Hell is empty and all the devils are here."

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Antu_text-x-markdown.svg/200px-Antu_text-x-markdown.svg.png)

`

		this.setState({
			userInput: defaultText
		})
	}

	render(){
		return (
			<div className="flex-container">
				<textarea id="editor" 
					onChange={ this.handleUserInput } >
					{ this.state.userInput }
				</textarea>
				<Preview userInput={ this.state.userInput } />
			</div>
		)
	}
}



export default Editor;