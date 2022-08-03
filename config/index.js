//Imports:
const express = require("express");
const cors = require("cors");
const logger = require("morgan");

module.exports = (app) => {
    app.set("trust proxy", 1);

    app.use(
        cors({
            credentials: true,
            origin: procces.env.ORIGIN || "http://localhost:3000",
        })
    );

    app.use(logger("dev"));

    app.use(express.json());
    app.use(express.urilencoded({ extended: false}));
};
