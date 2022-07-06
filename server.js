const express = require("express");
const app = express();
const port = 5000;

const Y18 = [];
const Y19 = [];
const Y20 = [];
const Y21 = [];
const YUD = [];

app.get("/18", (req, res) => {
  if (Y18.length > 0) {
    data = Y18.shift();
    res.send(`${data[0]} ${data[1]} ${data[2]} ${data[3]} ${data[4]}`);
  } else {
    res.send("wait");
  }
});

app.get("/19", (req, res) => {
  if (Y19.length > 0) {
    data = Y19.shift();
    res.send(`${data[0]} ${data[1]} ${data[2]} ${data[3]} ${data[4]}`);
  } else {
    res.send("wait");
  }
});

app.get("/20", (req, res) => {
  if (Y20.length > 0) {
    data = Y20.shift();
    res.send(`${data[0]} ${data[1]} ${data[2]} ${data[3]} ${data[4]}`);
  } else {
    res.send("wait");
  }
});

app.get("/21", (req, res) => {
  if (Y21.length > 0) {
    data = Y21.shift();
    res.send(`${data[0]} ${data[1]} ${data[2]} ${data[3]} ${data[4]}`);
  } else {
    res.send("wait");
  }
});

app.get("/YUD", (req, res) => {
  if (YUD.length > 0) {
    data = YUD.shift();
    res.send(`${data[0]} ${data[1]} ${data[2]} ${data[3]} ${data[4]}`);
  } else {
    res.send("wait");
  }
});

app.get("/18/:address/:phone/:rec/:year/:serial", (req, res) => {
  try {
    temp = [
      req.params.address,
      req.params.phone,
      req.params.rec,
      req.params.year,
      req.params.serial,
    ];
    Y18.push(temp);
    res.send(
      `--${req.params.address}${req.params.phone}${req.params.rec}${req.params.year}${req.params.serial}--added to server`
    );
  } catch (error) {
    console.log("internal logical error");
  }
});

app.get("/19/:address/:phone/:rec/:year/:serial", (req, res) => {
  try {
    temp = [
      req.params.address,
      req.params.phone,
      req.params.rec,
      req.params.year,
      req.params.serial,
    ];
    Y19.push(temp);
    res.send(
      `--${req.params.address}${req.params.phone}${req.params.rec}${req.params.year}${req.params.serial}--added to server`
    );
  } catch (error) {
    console.log("internal logical error");
  }
});

app.get("/20/:address/:phone/:rec/:year/:serial", (req, res) => {
  try {
    temp = [
      req.params.address,
      req.params.phone,
      req.params.rec,
      req.params.year,
      req.params.serial,
    ];
    Y20.push(temp);
    res.send(
      `--${req.params.address}${req.params.phone}${req.params.rec}${req.params.year}${req.params.serial}--added to server`
    );
  } catch (error) {
    console.log("internal logical error");
  }
});

app.get("/21/:address/:phone/:rec/:year/:serial", (req, res) => {
  try {
    temp = [
      req.params.address,
      req.params.phone,
      req.params.rec,
      req.params.year,
      req.params.serial,
    ];
    Y21.push(temp);
    res.send(
      `--${req.params.address}${req.params.phone}${req.params.rec}${req.params.year}${req.params.serial}--added to server`
    );
  } catch (error) {
    console.log("internal logical error");
  }
});

app.get("/YUD/:address/:phone/:rec/:year/:serial", (req, res) => {
  try {
    temp = [
      req.params.address,
      req.params.phone,
      req.params.rec,
      req.params.year,
      req.params.serial,
    ];
    YUD.push(temp);
    res.send(
      `--${req.params.address}${req.params.phone}${req.params.rec}${req.params.year}${req.params.serial}--added to server`
    );
  } catch (error) {
    console.log("internal logical error");
  }
});

app.listen(port, () => {
  console.log(`Collection server Listening on port-- ${port}`);
});
