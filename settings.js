module.exports = {
  uiHost: "0.0.0.0",
  uiPort: process.env.PORT || 1880,

  flowFile: "flows.json",

  credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "change-this-secret",

  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.NODE_RED_USERNAME || "admin",
      password: process.env.NODE_RED_PASSWORD_HASH || "$2b$08$8U0ZQ7V8wV1xQm2nM5QY8uR0D2wRk2Qm8v2Y5x6x7q8o9p0aBcDeF",
      permissions: "*"
    }]
  },

  httpNodeAuth: null,
  httpStaticAuth: null
}
