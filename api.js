const client = require("./connection.js");
const express = require("express");
const app = express();

app.use(express.json());

app.listen(1010, () => {
  console.log("Server is now listening at port 1010");
});

client.connect();
console.log("==================================");

app.get("/test", (req, res) => {
  res.send("testing sucess");
});

app.post("/add", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  let mobile = req.body.mobile;
  let qry = `insert into users(username,password,email,mobile) values('${username}','${password}','${email}','${mobile}')`;
  console.log(qry);

  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.rowCount > 0) {
      res.send({ status: true, msg: "sucess", data: result });
    } else {
      res.send({ status: false, msg: "failed" });
    }
  });
});

// app.post('/login', (req, res) => {
//   let email = req.body.email;
//   let password = req.body.password;
//   let qry = 'SELECT * FROM `users` WHERE email="' + email + '" AND  password="' + password + '"';

//   console.log(qry)

//   client.query(qry, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//     if (result==true ) {
//       res.send({ status: true, msg: "sucess", data: result });
//     } else {
//       res.send({ status: false, msg: "failed" });
//     }
//   });

// });

app.get("/mobile", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let qry = "select * from public.users where email = '"+email+"' and password = '"+password+"'";
  console.log(qry);
  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.rowCount > 0) {
      res.send({ status: true, msg: "sucess", data: result.rows});
    } else {
      res.send({ status: false, msg: "failed" });
    }
  });
});

app.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let qry = "select * from public.users where email = '"+email+"' and password = '"+password+"'";
  console.log(qry);
  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.rowCount > 0) {
      res.send({ status: true, msg: "sucess", data: result.rows});
    } else {
      res.send({ status: false, msg: "failed" });
    }
  });
});
