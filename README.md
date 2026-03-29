# Facebook Ad Management Landing Page

A customized React + Bootstrap + SCSS landing page with a dedicated application form page.

## Stack
- React (Vite)
- React Bootstrap + Bootstrap 5
- SCSS styling
- Roboto font via Google Fonts
- StaticForms integration for form submissions

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## StaticForms setup
1. Create a form endpoint at [StaticForms](https://www.staticforms.xyz/).
2. In `src/pages/ApplyPage.jsx`, replace:
   - `REPLACE_WITH_YOUR_STATICFORMS_ACCESS_KEY`
3. Configure your target recipient email in your StaticForms dashboard.

All form fields are submitted in one payload and delivered to the configured recipient email.
