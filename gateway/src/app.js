const express = require("express");
const { callWithRetry } = require("./meshClient");
const config = require("./config");

const app = express();
let index = 0;

function pickService(services) {
  const selected = services[index % services.length];
  index += 1;
  return selected;
}

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "gateway" });
});

app.get("/api/hello", async (_req, res) => {
  const target = pickService(config.services);
  try {
    const data = await callWithRetry(target, config.retryCount, config.timeoutMs);
    res.json({
      gateway: "ok",
      target,
      upstream: data
    });
  } catch (error) {
    res.status(503).json({
      gateway: "degraded",
      message: "No upstream service available",
      error: error.message
    });
  }
});

module.exports = { app, pickService };
