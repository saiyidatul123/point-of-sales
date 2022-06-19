require("dotenv").config();
const mysql = require("mysql2");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists orders; CREATE TABLE orders (ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, reference_no VARCHAR(100), tax INT, service_charges INT, total_amount_cents INT, is_walkin BOOLEAN, status ENUM('pending','completed')); DROP TABLE if exists order_items; CREATE TABLE order_items (ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, order_id INT NOT NULL REFERENCES orders(ID), cost_per_item INT, product_name VARCHAR(100), quantity INT); DROP TABLE if exists transactions; CREATE TABLE transactions (ID INT NOT NULL REFERENCES orders(ID), order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, payment_method VARCHAR(100), status ENUM('pending','paid'), paid_amount_cents INT);";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(
      "Table creation `orders, order_items, transactions` were successful!"
    );

    console.log("Closing...");
  });

  con.end();
});
