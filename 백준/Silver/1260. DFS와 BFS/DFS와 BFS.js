const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(v =>
    v
      .trim()
      .split(' ')
      .map(v => +v)
  );

let [v, e, start] = input[0];
let list = input.slice(1);

let adj = [];

for (let i = 0; i <= v; i++) {
  adj.push([]);
}

for (let [a, b] of list) {
  adj[a].push(b);
  adj[b].push(a);
}

adj.map(v => v.sort((a, b) => a - b));

// DFS
let visited = [];
let result = [];

for (let i = 0; i < v; i++) visited.push(false);

function dfs(start) {
  visited[start] = true;
  result.push(start);
  for (let vertex of adj[start]) {
    if (visited[vertex]) continue;
    dfs(vertex);
  }
}

dfs(start);
console.log(result.join(' '));

// BFS
visited = [];
result = [];

for (let i = 0; i < v; i++) visited.push(false);

function bfs(start) {
  visited[start] = true;
  result.push(start);
  let queue = [start];
  while (queue.length) {
    let front = queue.shift();
    for (let vertex of adj[front]) {
      if (visited[vertex]) continue;
      visited[vertex] = true;
      result.push(vertex);
      queue.push(vertex);
    }
  }
}

bfs(start);
console.log(result.join(' '));
