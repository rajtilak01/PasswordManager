// import * as admin from "firebase-admin";

// // const serviceAccount = JSON.parse(
// //     Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, '\n') || "", "base64").toString("utf-8")
// // );

// // const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, '\n')!

// // if (!admin.apps.length) {
// //     admin.initializeApp({
// //         credential: admin.credential.cert({
// //             // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// //             projectId: process.env.FIREBASE_PROJECT_ID,
// //             clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// //             privateKey: process.env.FIREBASE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, '\n')
// //         })
// //     });
// // }

import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export const auth = admin.auth();
