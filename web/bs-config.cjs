/** @type {import("browser-sync").Options} */
module.exports = {
  proxy: {
    target: "http://localhost:3002",
    ws: true,
  },
  host: "0.0.0.0",
  port: 3100,
  ui: false,
  open: false,
  notify: false,
  ghostMode: {
    clicks: true,
    scroll: true,
    forms: true,
  },
}

