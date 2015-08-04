## qcli
### A CLI tool for bundling QScend's frontend resoucres.

### USAGE

`npm install qcli -g`

#### install modules from our ui sandbox!

```
qcli normalize.css responsive-grid.css whatever.css simple-weather.js whatever.min.js
```
### OUTPUT
`bundle!*.js`

#### Bundle all your resources into one file!
#### Out of the box minification!
#### Promotes modularity!
#### Every bundle has a different name (breaks cacheing)!

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
