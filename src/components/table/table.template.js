const CODES = {
  A: 65,
  Z: 90,
};

function createCel(_, col) {
  return `
   <div class="cell" contenteditable data-col="${col}"></div>
  `;
}

function createColumn(col, index) {
  return `
  <div class="column" data-type="resizable" data-col="${index}">
    ${col}
    <div class="col-resize" data-resize="col"></div>
  </div>
  `;
}

function createRow(content, num) {
  return `
  <div class="row" data-type="resizable"">
    <div class="row-info">${num ? num : ''} ${
    num ? '<div class="rol-resize" data-resize="row"></div>' : ''
  } 
    </div>
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
    .map(createColumn)
    .join('');

  rows.push(createRow(cols));

  for (let i = 1; i <= colsCount; i++) {
    const row = new Array(colsCount).fill('').map(createCel).join('');
    rows.push(createRow(row, i));
  }
  return rows.join('');
}
