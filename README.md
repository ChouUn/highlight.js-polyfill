# highlight.js polyfill &middot; [![Build Status](https://travis-ci.org/ChouUn/highlight.js-polyfill.svg?branch=master)](https://travis-ci.org/ChouUn/highlight.js-polyfill) [![npm version](https://img.shields.io/npm/v/highlight.js-polyfill.svg?style=flat)](https://www.npmjs.com/package/highlight.js-polyfill)

[highlight.js - Syntax highlighting for the Web](https://highlightjs.org/).

A polyfill for highlight.js to isolate various syntax themes because of global style pollution.   
This package doesn't require modifying the source file.

## How to use

### Prepare

```jsx
import 'highlight.js-polyfill/styles/index.css';
```
OR
```jsx
import 'highlight.js-polyfill/styles/index.scss';
```
The latter need **node-sass** and **sass-loader** in Webpack.

### Example

```jsx
const theme = 'atom-one-dark';

return `
    <pre class=${theme}>
        <code class="hljs">
            ${hljs.highlight(lang, code, true).value}
        </code>
    </pre>
`;
```
It will render to :
```html
<pre class="atom-one-dark">
    <code class="hljs">
        ...
    </code>
</pre>
```

### About module

```jsx
import hljsThemes from 'highlight.js-polyfill';
```
It will get an Array of syntax themes.

## Build

```shell
$ npm run build 
```