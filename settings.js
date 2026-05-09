module.exports = {
  uiHost: "0.0.0.0",
  uiPort: process.env.PORT || 1880,

  flowFile: "flows.json",

  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "change-this-secret",

  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.NODE_RED_USERNAME || "admin",
      password: process.env.NODE_RED_PASSWORD_HASH || "admin123",
      permissions: "*"
    }]
  },

  httpNodeAuth: null,
  httpStaticAuth: null
}
