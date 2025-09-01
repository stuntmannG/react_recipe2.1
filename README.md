# EOR Recipe App (Fixed)

This is a corrected Create React App project with Firebase Auth, protected routes, and Router v7 future flags.

## Setup
1. Copy `.env.example` to `.env` and fill in your Firebase values **exactly**.
2. In Firebase Console:
   - Enable **Email/Password** (Authentication → Sign-in method).
   - Add `http://localhost:3000` to **Authentication → Settings → Authorized domains**.
3. Install & run:
   ```bash
   npm install
   npm start
   ```

## Notes
- Env keys must start with `REACT_APP_`.
- After changing `.env`, restart `npm start`.
- All references to `user` come from `useAuth()` context.
