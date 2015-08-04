module.exports = function (js, css) {
  var template = [
    'void (function qcli () {',
      'var elem = document.createElement("style");',
      'elem.setAttribute("type", "text/css");',

      'if ("textContent" in elem) {',
        'elem.textContent = ' + css,
      '} else {',
        'elem.styleSheet.cssText = ' + css,
      '}',

      'var head = document.getElementsByTagName("head")[0];',
      'head.appendChild(elem);',
    '})()',
    '\n',
    ';' + js,
    '\n'
  ]

  return template.join('')
}
