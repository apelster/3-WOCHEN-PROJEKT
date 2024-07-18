const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
const fetch = require('node-fetch');
const mysql = require('mysql2/promise');

const jwksUrl = 'https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_7lxpfCbZ1/.well-known/jwks.json';

async function getJwks() {
  const response = await fetch(jwksUrl);
  return response.json();
}

async function verifyToken(token) {
  const { keys } = await getJwks();
  const decodedToken = jwt.decode(token, { complete: true });
  const { kid } = decodedToken.header;
  const key = keys.find(k => k.kid === kid);
  const pem = jwkToPem(key);

  return jwt.verify(token, pem, { algorithms: ['RS256'] });
}

async function authMiddleware(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodedToken = await verifyToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
}
