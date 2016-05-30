//Look at your firebase console app for correct settings
const firebase = {
  webKeys: {
    production: {
        apiKey: "your-api-key",
        authDomain: "your-firebase-auth-domain",
        databaseURL: "your-database-url",
        storageBucket: "your-store-bucket"
    },
    development: {
      apiKey: "your-api-key-development",
      authDomain: "your-firebase-auth-domain-development",
      databaseURL: "your-database-url-development",
      storageBucket: "your-store-bucket-development"
    }
  },
  //These are for running in node.js
  serviceKeys: { //see here for instructions https://firebase.google.com/docs/server/setup#prerequisites
    production : {
      serviceAccount: {
        "type": "service_account",
        "project_id": "your-project_id",
        "private_key_id": "your-private_key_id",
        "private_key": "your-private_key",
        "client_email": "your-client-email",
        "client_id": "your-client-id",
        "auth_uri": "your-auth-uri",
        "token_uri": "your-token-uri",
        "auth_provider_x509_cert_url": "your-cert-url",
        "client_x509_cert_url": "your-other-cert-url"
      },
      databaseURL: "your-database-url"
    },
    development : {
      serviceAccount: {
        "type": "service_account",
        "project_id": "your-project_id",
        "private_key_id": "your-private_key_id",
        "private_key": "your-private_key",
        "client_email": "your-client-email",
        "client_id": "your-client-id",
        "auth_uri": "your-auth-uri",
        "token_uri": "your-token-uri",
        "auth_provider_x509_cert_url": "your-cert-url",
        "client_x509_cert_url": "your-other-cert-url"
      },
      databaseURL: "your-database-url"
    }
  }
}

export const keys = (()=>{
    if(typeof window !== 'undefined') {
      return process.env === 'production'? firebase.webKeys.production : firebase.webKeys.development;
    } else {
      return process.env === 'production'? firebase.serviceKeys.production : firebase.serviceKeys.development;
    }
})();
