import React, { Component } from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

const Preview = ({ userInput }) => {

	function createMarkup(){
		return {__html: marked(userInput) }
	}

	return (
		<div className="flex-container" id="preview" dangerouslySetInnerHTML = { createMarkup() } />
	)
}



export default Preview;




























