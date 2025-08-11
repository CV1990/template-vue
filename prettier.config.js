/** @type {import("prettier").Config} */
export default {
  semi: true, // Poner punto y coma
  singleQuote: true, // Usar comillas simples
  printWidth: 100, // Máximo ancho de línea
  tabWidth: 2, // Espacios por tabulación
  useTabs: false, // Usar espacios en lugar de tabs
  trailingComma: 'es5', // Coma final en objetos/arrays
  bracketSpacing: true, // Espacio dentro de llaves { a: 1 }
  arrowParens: 'always', // Paréntesis en arrow functions
  endOfLine: 'lf', // Saltos de línea estilo LF
  vueIndentScriptAndStyle: true // Indentar en <script> y <style> en Vue
};
