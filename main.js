function fCreateTable() {
  table.innerHTML = `<tr>${'<td>0</td>'.repeat(+elem2.value)}</tr>`.repeat(+elem1.value);
}

elem1.addEventListener('input', fCreateTable);
elem2.addEventListener('input', fCreateTable);

fCreateTable();

