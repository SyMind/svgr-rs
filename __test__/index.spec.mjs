import { transform } from '../index.js'

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>
`

const jsCode = await transform(
  svgCode,
  { icon: true },
  { componentName: 'MyComponent' },
)
console.log(jsCode)
