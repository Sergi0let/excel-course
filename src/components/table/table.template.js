const CODES = {
  A: 65,
  Z: 90,
};

function createCel() {
  return `
   <div class="cell" contenteditable></div>
  `;
}

function createColum(col) {
  return `
  <div class="column">
    ${col}
  </div>
  `;
}

function createRow(content, num) {
  return `
  <div class="row">
    <div class="row-info">${num ? num : ''}</div>
    <div class="row-data">${content}</div>
  </div>`;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(createColum)
    .join('');

  rows.push(createRow(cols));

  for (let i = 1; i <= colsCount; i++) {
    const row = new Array(colsCount).fill('').map(createCel).join('');
    rows.push(createRow(row, i));
  }
  return rows.join('');
}
