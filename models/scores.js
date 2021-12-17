import query from "../db/index.js";

export async function getAllUsers() {
  return await query("SELECT * FROM energiserScores");
}
