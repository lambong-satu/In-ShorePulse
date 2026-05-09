module.exports = {
  uiHost: "0.0.0.0",
  uiPort: process.env.PORT || 1880,

  flowFile: "flows.json",

  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "change-this-secret",

  httpNodeAuth: null,
  httpStaticAuth: null
}
