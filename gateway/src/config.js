const config = {
  port: Number(process.env.PORT || 8080),
  timeoutMs: Number(process.env.REQUEST_TIMEOUT_MS || 1500),
  retryCount: Number(process.env.RETRY_COUNT || 2),
  services: [
    process.env.SERVICE_A_URL || "http://service-a:3001",
    process.env.SERVICE_B_URL || "http://service-b:3002"
  ]
};

module.exports = config;
