# Things I learn

## 0. References

- Awesome electron: https://github.com/sindresorhus/awesome-electron
- Awesome components: https://github.com/brillout/awesome-react-components

## 1. Setup

https://github.com/romanschejbal/electron-blog

```
npm i -S electron-prebuilt react react-dom
npm i -D express webpack webpack-dev-middleware webpack-hot-middleware webpack-target-electron-renderer
npm i -D babel-cli babel-loader babel-polyfill babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader postcss-loader
npm i -D concurrently
npm i -S redux redux-devtools react-redux
npm i -S debounce
```

## 2. Init app

## 3. Open file dialog

- http://mylifeforthecode.com/getting-started-with-standard-dialogs-in-electron/
- https://github.com/electron/electron/blob/master/docs/api/dialog.md

## 4. Load a buffer and render into a canvas

- Load buffer: `to-arraybuffer`
- Render into canvas: `ref` property, and didComponentUpdate...

## 5. Responsive canvas

- `react-measure`: http://stackoverflow.com/questions/25371926/how-can-i-respond-to-the-width-of-an-auto-sized-dom-element-in-react
