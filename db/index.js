import pg from "pg";
const pool = new pg.Pool({
  user: "ipzhhqevakwfte",
  host: "ec2-52-208-254-158.eu-west-1.compute.amazonaws.com",
  database: "dcvqvk9a9lv86i",
  password: "eb4d0b3418df7c8d68fe4ad1a26f73359f954f929bd88315d2d957c317f8bad2",
  port: 5432,
  // ssl: { ssl: { rejectUnauthorized: false } },
});

export default function query(text, params) {
  return pool.query(text, params);
}
