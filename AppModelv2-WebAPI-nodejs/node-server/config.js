// Don't commit this file to your public repos. This config is for first-run
exports.creds = {
  // Required
  identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
  // or 'https://login.microsoftonline.com/<your_tenant_guid>/v2.0/.well-known/openid-configuration'
  // or you can use the common endpoint
  // 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration'
  
  // Required
  clientID: '5ee0f202-f3aa-42b5-820c-59115af32dc8',

  // Required.
  // If you are using the common endpoint, you should either set `validateIssuer` to false, or provide a value for `issuer`.
  validateIssuer: true,

  // Required. 
  // Set to true if you use `function(req, token, done)` as the verify callback.
  // Set to false if you use `function(req, token)` as the verify callback.
  passReqToCallback: false,

  // Required if you are using common endpoint and setting `validateIssuer` to true.
  // For tenant-specific endpoint, this field is optional, we will use the issuer from the metadata by default.
  issuer: null,

  // Optional, default value is clientID
  audience: null,

  // Optional. Default value is false.
  // Set to true if you accept access_token whose `aud` claim contains multiple values.
  allowMultiAudiencesInToken: false,

  // Optional. 'error', 'warn' or 'info'
  loggingLevel:'info',
};

// Your mongo auth uri goes here;
exports.mongoose_auth_local = 'mongodb://localhost/tasklist'; 
