## qcli
### A CLI tool for bundling QScend's frontend resoucres.

### USAGE

`npm install qcli -g`

```
qcli normalize.css responsive-grid.css  simple-weather.js slick.min.js
```
### OUTPUT
`bundle!*.js`

#### Bundle all your resources into one file!
#### Out of the box minification!
#### Promotes modularity!

#### go from:
```
<link....
<link....
<link....
<script....
<script....
```
#### to:
`<script src="bundle!*.js" /></scipt>`
