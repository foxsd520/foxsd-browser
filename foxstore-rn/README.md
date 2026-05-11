# Fox Store (React Native + Firebase)

- App Name: **Fox Store - متجر تطبيقات**
- Package: `com.foxsd.foxstore`
- Owner/Admin email: `foxsd520@gmail.com`

## Firebase setup
1. Create Firebase project.
2. Enable Authentication > Google.
3. Create Firestore database and Storage bucket.
4. Add Android app with package `com.foxsd.foxstore` and download `google-services.json` to `android/app/`.
5. Replace Firebase config in `src/services/firebase.ts`.
6. Add SHA-1/SHA-256 in Firebase console for Google Sign-In.
7. Put Web Client ID in `AuthContext.tsx`.

## Firestore collections
- `apps`: app metadata/status/rating/downloads.
- `chat`: public developer chat messages.

## Storage paths
- `apps/*` APK/AAB files.
- `images/*` app cover images.

## Run
```bash
npm install
npm run android
```
