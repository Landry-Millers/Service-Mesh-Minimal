const express = require("express");

const app = express();
const serviceName = process.env.SERVICE_NAME || "service-b";
const serviceVersion = process.env.SERVICE_VERSION || "1.0.0";

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: serviceName });
});

app.get("/hello", (_req, res) => {
  res.json({
    message: "Bonjour depuis le maillage",
    service: serviceName,
    version: serviceVersion
  });
});

module.exports = app;
