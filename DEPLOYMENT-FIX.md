# Strapi Deployment Fix for Render

## Problem
You were experiencing an `ERESOLVE` dependency conflict when deploying your Strapi backend to Render. The error was caused by using beta versions of Strapi packages (`5.12.0-beta.2`) that had peer dependency conflicts.

## Solutions Applied

### 1. Updated Package Versions
Changed from beta versions to stable versions in `package.json`:
```json
{
  "@strapi/plugin-cloud": "^5.0.0",
  "@strapi/plugin-users-permissions": "^5.0.0", 
  "@strapi/strapi": "^5.0.0"
}
```

### 2. Added NPM Configuration
Created `.npmrc` file to handle dependency resolution:
```
legacy-peer-deps=true
fund=false
audit=false
```

### 3. Updated Environment Configuration
Updated `.env` file for production deployment:
```
HOST=0.0.0.0
PORT=1337
```

### 4. Added Build Script
Added `postinstall` script to `package.json` for automatic building:
```json
{
  "postinstall": "strapi build"
}
```

## Render Deployment Configuration

### Build Command
```bash
npm install --legacy-peer-deps && npm run build
```

### Start Command
```bash
npm start
```

### Environment Variables
Set these in your Render dashboard:
- `NODE_ENV=production`
- `DATABASE_CLIENT=postgres`
- `DATABASE_HOST=ep-crimson-fog-a4td99if-pooler.us-east-1.aws.neon.tech`
- `DATABASE_PORT=5432`
- `DATABASE_NAME=ai-resume-builder`
- `DATABASE_USERNAME=lokesh`
- `DATABASE_PASSWORD=npg_U6surhAm5jeo`
- `DATABASE_SSL_REJECT_UNAUTHORIZED=false`
- `APP_KEYS=mRBHPXkEMsGhqCtIFCEfLA==,VDQdmeGHqKbNTgFbAgkWYg==,4FaZFNdzyXsPpf9UOCGC3A==,dtqROB8bSOajmgznmgmaUw==`
- `API_TOKEN_SALT=sdjVOkseSKg1PsH+/uSnmw==`
- `ADMIN_JWT_SECRET=cXmzHNE6ehvBMlWk0cdbPg==`
- `TRANSFER_TOKEN_SALT=BAYzm+aike8BAniFIGebpA==`
- `JWT_SECRET=LriAtdSsldizpoyrh9w8HQ==`

### Node.js Version
Ensure Render is using Node.js 18 or higher (your engine configuration supports 18-22).

## Status
✅ Dependencies resolved
✅ Build working locally
✅ Ready for Render deployment

The dependency conflicts have been resolved and your Strapi backend should now deploy successfully on Render!
