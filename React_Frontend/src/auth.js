// src/auth.js
import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
    AuthenticationDetails
  } from 'amazon-cognito-identity-js';
  
  const poolData = {
    UserPoolId: 'eu-central-1_UuHmIyNgV', // Dein Benutzerpool-ID
    ClientId: '30n6phqhrtnb1itm51okinkld3' // Deine App-Client-ID
  };
  
  const userPool = new CognitoUserPool(poolData);
  
  export const registerUser = (email, password) => {
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ];
  
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.error(err.message || JSON.stringify(err));
        return;
      }
      console.log('user name is ' + result.user.getUsername());
    });
  };
  
  export const authenticateUser = (email, password, callback) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    });
  
    const userData = {
      Username: email,
      Pool: userPool
    };
  
    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('access token + ' + result.getAccessToken().getJwtToken());
        callback(null, result);
      },
      onFailure: (err) => {
        console.error(err.message || JSON.stringify(err));
        callback(err, null);
      }
    });
  };
  