# NexaNetwrok

A mobile-first public site for a daily promotional campaign platform. This first GitHub milestone establishes the polished, responsive campaign experience without placing any promotional code in browser-visible content.

## Included

- Responsive landing page and campaign cards
- Protected-unlock journey preview that never exposes a promo code
- Firebase Hosting configuration with clean URLs and baseline security headers
- Clear visual hooks for campaign availability, progress, and server-authorized claims

## Security boundary

This repository intentionally does **not** contain an API key, promo code, or client-side claim logic. The production flow needs Cloud Functions and a Firestore instance selected for the project so timers, sessions, campaign availability, and atomic claims can be verified server-side.

## Next production milestone

After a Firebase project and its Firestore edition are chosen, add the private campaign model, Firestore rules, Cloud Functions for session/step/claim validation, and Firebase Authentication for administrators. This prevents shipping a misleading implementation that could reveal promo data or allow timer bypasses.

## Local preview

Serve the `public/` folder with any static web server. For Firebase Hosting emulation, use the Firebase CLI after selecting a Firebase project.

