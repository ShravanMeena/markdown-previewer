import React, { Component } from "react";
import DOMPurify from 'dompurify';
import "./_app.scss";

let marked = require("marked");

const initialMarkdown = `
 # Markdown syntax guide


## You may be view [My portfolio](http://shravanmeena.me/).




# This is a Heading h1


## This is a Heading h2 


###### This is a Heading h6



## Emphasis



*This text will be italic*  


_This will also be italic_


**This text will be bold**  


__This will also be bold__


_You **can** combine them_



## Lists



### Unordered


* Item 1
* Item 2
  * Item 2a
  * Item 2b


### Ordered


1. Item 1
1. Item 2
1. Item 3
    1. Item 3a
    1. Item 3b


## Images


![This is a alt text.](https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=0.630xw:1.00xh;0.186xw,0&resize=640:* "This is a sample image.")


## Links




## Blockquotes


> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.


## Tables


| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |


## Blocks of code



## Inline code

  `;

marked.setOptions({
  breaks: true,
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      markdown: initialMarkdown,
    };
  }

  handleChange = (event) => {
    this.setState({
      markdown: event.target.value,
    });
  };

  render() {
    return (
      <div className='main'>
        <div className='header'>
          <h4>Markdown Previewer</h4>
        </div>
        <div className='container'>
          <div className='left'>
            <textarea
              placeholder='enter your code'
              value={this.state.markdown}
              onChange={this.handleChange}
            />
          </div>
          <div className='right'>
            <div
              className='markdown'
              dangerouslySetInnerHTML={{
                __html: marked(DOMPurify.sanitize(this.state.markdown)),
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
