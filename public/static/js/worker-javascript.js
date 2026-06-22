// Minimal fallback worker to satisfy importScripts requests
self.addEventListener('message', (e) => {
  // Echo messages back
  self.postMessage({ echo: e.data });
});

// Optional: expose a no-op function to avoid runtime errors
self.noop = () => {};
