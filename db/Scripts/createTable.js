import query from "../index.js";

const sqlString =
  "CREATE TABLE IF NOT EXISTS energiserScores(id SERIAL PRIMARY KEY, name TEXT, game TEXT, score INTEGER)";

// async function createTable() {
//   const res = await query(sqlString);
//   console.log(res);
// }

// createTable();
