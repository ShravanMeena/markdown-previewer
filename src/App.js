import React, { Component } from "react";
import "./_app.scss";

let marked = require("marked");

const initialMarkdown = `
 # Markdown syntax guide
<p>&nbsp;</p>

## You may be view [My portfolio](http://shravanmeena.me/).
<p>&nbsp;</p>

<p>&nbsp;</p>

# This is a Heading h1
<p>&nbsp;</p>

## This is a Heading h2 
<p>&nbsp;</p>

###### This is a Heading h6
<p>&nbsp;</p>


## Emphasis

<p>&nbsp;</p>

*This text will be italic*  
<p>&nbsp;</p>

_This will also be italic_
<p>&nbsp;</p>

**This text will be bold**  
<p>&nbsp;</p>

__This will also be bold__
<p>&nbsp;</p>

_You **can** combine them_


<p>&nbsp;</p>
## Lists
<p>&nbsp;</p>


### Unordered
<p>&nbsp;</p>

* Item 1
* Item 2
  * Item 2a
  * Item 2b
<p>&nbsp;</p>

### Ordered
<p>&nbsp;</p>

1. Item 1
1. Item 2
1. Item 3
    1. Item 3a
    1. Item 3b

<p>&nbsp;</p>
## Images
<p>&nbsp;</p>

![This is a alt text.](https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=0.630xw:1.00xh;0.186xw,0&resize=640:* "This is a sample image.")
<p>&nbsp;</p>

## Links
<p>&nbsp;</p>



## Blockquotes
<p>&nbsp;</p>

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
<p>&nbsp;</p>

## Tables
<p>&nbsp;</p>

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |
<p>&nbsp;</p>

## Blocks of code

<p>&nbsp;</p>

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
                __html: marked(this.state.markdown),
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
