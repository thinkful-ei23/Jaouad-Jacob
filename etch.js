'use strict';
// Add Event Listeners here:
function hover() {
  let colorChooser = ['#FF6B35', '#F7C59F', '#EFEFD0', '#004E89', '#1A659E'][Math.floor(Math.random()*5)];
  $(this).css('background-color', function() {
    return colorChooser;
  });
  // $(this).addClass('active');
}  
function redrawGrid() {
  $('button').on('click', function() {
    createAndPlaceRows(8);
  });
}
// When DOM is ready:
$(() => {
  createAndPlaceRows(8);
  redrawGrid();
  $('.grid').on('mouseover', '.cell', hover);
});

// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
