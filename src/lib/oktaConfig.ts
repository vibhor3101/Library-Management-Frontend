export const oktaConfig = {
  clientId: "0oahprbv5umjjWOkC5d7",
  issuer: "https://dev-77088945.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
  useClassicEngine: true, //i was getting error interaction code flow not added but actually it was cache n search engine problem
};
