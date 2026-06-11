// ob-399-----------------------------------------------------------
// https://www.geeksforgeeks.org/dsa/shortest-distance-two-cells-matrix-grid/
// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33
function navigatorOB399(grid) {
  const start = "S";
  const end = "E";
  const blockd = "#";
  const startEnd = {};
  const q = [];
  // deep copy
  const visited = structuredClone(grid);
  let distance = 0;
  const directions = [
    // baixo
    [1, 0],
    // cima
    [-1, 0],
    // direita
    [0, 1],
    // esquerda
    [0 - 1],
  ];

  // encontra indexes de inicio e fim e guarda no startEnd. Torna visited boleanos. Seta conteudo para a queue
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      visited[i][j] = false;

      if (grid[i][j] === start) {
        startEnd[start] = [i, j];
        q.push([i, j]);
        visited[i][j] = true;
      }
      if (grid[i][j] === end) {
        startEnd[end] = [i, j];
      }
    }
  }

  if (!startEnd[start] || !startEnd[end]) {
    return -1;
  }

  while (q.length > 0) {
    let current = q.shift();
    let row = current[0];
    let col = current[1];

    if (grid[row][col] === end) {
      console.log(startEnd);
      return distance;
    }

    for (let arr of directions) {
      let neighboorRow = row + arr[0];
      let neighboorCol = col + arr[1];
      let isValid =
        neighboorRow >= 0 &&
        neighboorRow < grid.length &&
        neighboorCol >= 0 &&
        neighboorCol < grid[0].length &&
        !visited[neighboorRow][neighboorCol] &&
        grid[neighboorRow][neighboorCol] !== blockd;

      if (isValid) {
        visited[neighboorRow][neighboorCol] = true;
        q.push([neighboorRow, neighboorCol]);
        distance++;
        startEnd[distance] = [neighboorRow, neighboorCol];
      }
    }
  }

  return -1;
}
console.log(
  navigatorOB399([
    ["S", ".", ".", "#"],
    ["#", "#", ".", "#"],
    [".", ".", ".", "."],
    [".", "#", "#", "E"],
  ]),
);
