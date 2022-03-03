const client = require("./connection.js");
const express = require("express");
const app = express();
const port = 5050;
const multer = require("multer");
const upload = multer();
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.listen(port, () => {
  console.log("Server is now listening at port 5050");
});

client.connect();
console.log("==================================");




//======================================================
app.get("/test", (req, res) => {
  res.send("testing sucess");
});



/* ==============MULTER============================= */
// retrive data using multer - body form
app.get("/info", upload.none(), function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  let qry =
    "select * from public.users where email = '" +
    email +
    "' and password = '" +
    password +
    "'";
  console.log(qry);
  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.rowCount > 0) {
      res.send({ status: true, msg: "sucess", data: result.rows });
    } else {
      res.send({ status: false, msg: "failed" });
    }
  });

  //res.status(200).send(req.body);

  // req.body contains the text fields
});

//  post a record using multer - body form
app.post("/register", upload.none(), function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  let mobile = req.body.mobile;
  console.log(req.body)
  let qry = `insert into users(username,password,email,mobile) values('${username}','${password}','${email}','${mobile}')`;
  console.log(qry);

  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.rowCount > 0) {
      res.send({ status: true, msg: "sucess" });
    } else {
      res.send({ status: false, msg: "failed" });
    }
  }); // req.body contains the text fields
});

// retrive data using multer post - body form
app.post("/postinfo", upload.none(), function (req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  let qry =
    "select * from public.users where email = '" +
    email +
    "' and password = '" +
    password +
    "'";
  console.log(qry);
  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result.rows.indexOf(0));
    if (result.rowCount > 0) {
      //res.send(result.rows[0] );
      res.send({status: true, msg: "success", data: result.rows});
    } else {
      res.send({ status: false, msg: "failed" });
    }
  });
  // req.body contains the text fields
});

//vijay coded flutter

app.post("/flutter_reg", (req, res) => {
  // let username = req.body.username;
  console.log("response body =>>>>>>>>>", req.body);
})



/*========================JSON============================*/

// posting ============================================>
app.post("/entry", (req, res) => {
  let username = req.query.username;
  let password = req.query.password;
  let email = req.query.email;
  let mobile = req.query.mobile;
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

app.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let qry =
    'SELECT * FROM `users` WHERE email="' +
    email +
    '" AND  password="' +
    password +
    '"';

  console.log(qry);

  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result == true) {
      res.send({ status: true, msg: "sucess", data: result });
    } else {
      res.send({ status: false, msg: "failed" });
    }
  });
});

// retrive data using json method>
app.get("/data", (req, res) => {
  let email = req.query.email;
  let password = req.query.password;
  let qry =
    "select * from public.users where email = '" +
    email +
    "' and password = '" +
    password +
    "'";
  console.log(qry);
  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.rowCount > 0) {
      res.send({ status: true, msg: "sucess", data: result.rows });
    } else {
      res.send({ status: false, msg: "failed" });
    }
  });
});

app.post("/fetch", (req, res) => {SS
  let email = req.query.email;
  let password = req.query.password;
  let qry =
    "select * from public.users where email = '" +
    email +
    "' and password = '" +
    password +
    "'";
  console.log(qry);
  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.rowCount > 0) {
      res.send({ status: true, msg: "sucess", data: result.rows });
    } else {
      res.send({ status: false, msg: "failed" });
    }
  });
});




//=================================================
// flute
app.post("/flute", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  let mobile = req.body.mobile;
  console.log(req.body)
  let qry = `insert into users(username,password,email,mobile) values('${username}','${password}','${email}','${mobile}')`;
  console.log(qry);

  client.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    if (result.rowCount > 0) {
      res.send({ status: true, msg: "sucess" });
    } else {
      res.send({ status: false, msg: "failed" });
    }
  }); // req.body contains the text fields
});