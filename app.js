const express = require('express');
const mysql = require('mysql');
const app = express();

// VULNERABILITY 1: Hardcoded Secret Key (SAST Violation)
const API_SECRET_KEY = "SUPER_SECRET_KEY_12345!";

// VULNERABILITY 2: SQL Injection (SAST Violation)
app.get('/user', (req, res) => {
    let userId = req.query.id;
    let query = "SELECT * FROM users WHERE id = " + userId;
    db.query(query, (err, result) => {
        res.send(result);
    });
});
