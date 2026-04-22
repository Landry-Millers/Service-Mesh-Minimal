const fetch = global.fetch;

async function withTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(`${url}/hello`, { signal: controller.signal });
    if (!response.ok) {
      throw new Error(`Upstream status ${response.status}`);
    }
    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function callWithRetry(url, retryCount, timeoutMs) {
  let lastError;
  for (let attempt = 0; attempt <= retryCount; attempt += 1) {
    try {
      return await withTimeout(url, timeoutMs);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

module.exports = { callWithRetry };
