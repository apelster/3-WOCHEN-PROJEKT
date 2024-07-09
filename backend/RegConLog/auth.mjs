import { CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import dotenv from 'dotenv';dotenv.config();const poolData = {
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  ClientId: process.env.COGNITO_CLIENT_ID
};const userPool = new CognitoUserPool(poolData);export const registerUser = (username, password, email, givenName, familyName, birthdate, callback) => {
  const attributeList = [
    new CognitoUserAttribute({ Name: 'email', Value: email }),
    new CognitoUserAttribute({ Name: 'given_name', Value: givenName }),
    new CognitoUserAttribute({ Name: 'family_name', Value: familyName }),
    new CognitoUserAttribute({ Name: 'birthdate', Value: birthdate })
  ];  userPool.signUp(username, password, attributeList, null, callback);
};export const confirmUser = (email, code, callback) => {
  const userData = {
    Username: email,
    Pool: userPool
  };  const cognitoUser = new CognitoUser(userData);  cognitoUser.confirmRegistration(code, true, callback);
};export const authenticateUser = (username, password, callback) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: username,
    Password: password
  });  const userData = {
    Username: username,
    Pool: userPool
  };  const cognitoUser = new CognitoUser(userData);  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: result => callback(null, result),
    onFailure: err => callback(err)
  });
};