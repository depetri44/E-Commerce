// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyCWVehAn9mEGvorVnYB8Qq4D9cHMHo2HIE",
    authDomain: "onlinestore-b74ef.firebaseapp.com",
    databaseURL: "https://onlinestore-b74ef-default-rtdb.firebaseio.com",
    projectId: "onlinestore-b74ef",
    storageBucket: "onlinestore-b74ef.appspot.com",
    messagingSenderId: "548781810",
  },
  // Register for Stripe Developer Account and get the key
  stripeKey: 'pk_test_51MN6LfJuq8G5bAaHm0JxZqvDbf8QAVfCIpbALfmfV3p3hlG8I9EOA4Jc5uIagV7GN2dxKQCrVjssN7IrnxXSiTcy00b000V4rC'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
