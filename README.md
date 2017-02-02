# highlight.js polyfill

[highlight.js - Syntax highlighting for the Web](https://highlightjs.org/).

A polyfill for highlight.js to isolate various syntax theme because of global style pollution.   
This package doesn't require modifying the source file.

## How to use

### Release

```jsx
import 'highlight.js-polyfill/styles/index.css';
```
OR
```jsx
import 'highlight.js-polyfill/styles/index.scss';
```
The letter need **node-sass** and **sass-loader** in Webpack.

### Develop

```bash
$ npm run build 
```

### entry

```jsx
import 'highlight.js-polyfill';
```
This will get an Array of syntax themes.