# AlumniConnect (Frontend-only with Firebase Auth + Firestore)

Roles & flows:
- **Student**: Login/Register → Student Dashboard → Read approved experiences.
- **Alumni**: Register as Alumni → Profile + Post Experiences (pending approval) → Visible to students after admin approval. Alumni must be **verified** by admin first.
- **Admin**: Admin Dashboard → Verify Alumni → Approve/Reject Experiences, manage users.

## Setup
1. Create a Firebase project → Enable **Email/Password** in Authentication.
2. Enable **Cloud Firestore** (Production mode). Copy your config into `firebaseConfig` in `js/firebase.js`.
3. In **Firestore**, create a document `/users/{ADMIN_UID}` with fields:  
   `name: "Admin"`, `role: "admin"`, `verified: true`.
4. Paste **security rules** from `firestore.rules.txt` and publish.
5. Serve locally:
   ```bash
   npx serve .
   # or VS Code Live Server
   ```

## Pages
- `auth.html` – Login/Register (role choose: student/alumni)
- `student.html` – Browse approved experiences
- `alumni.html` – Profile + Create & manage your experiences
- `admin.html` – Verify alumni + Approve experiences

All vanilla **HTML/CSS/JS** with Firebase v10 modular CDN imports.
