// js/auth-guard.js
import { firebaseConfig, firebaseImports } from './firebase.js';

export async function protectPage(expectedRole) {
  const appMod = await import(firebaseImports.app);
  const authMod = await import(firebaseImports.auth);
  const fsMod = await import(firebaseImports.firestore);

  const app = appMod.initializeApp(firebaseConfig);
  const auth = authMod.getAuth(app);
  const db = fsMod.getFirestore(app);

  authMod.onAuthStateChanged(auth, async (user) => {
    if (!user) {
      alert('Please login first.');
      location.href = 'auth.html';
      return;
    }

    const docRef = fsMod.doc(db, 'users', user.uid);
    const snap = await fsMod.getDoc(docRef);
    const data = snap.data();

    if (!data) {
      alert('User profile not found.');
      location.href = 'auth.html';
      return;
    }

    if (data.role !== expectedRole) {
      alert(`Access denied. Only ${expectedRole} can access this page.`);
      location.href = 'auth.html';
      return;
    }

    console.log(`Welcome ${data.role}: ${data.name || user.email}`);
  });

  return { auth, db };
}
