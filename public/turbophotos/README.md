# TurboPhotos Media Files

This directory contains all media files (images and videos) used throughout the TurboTech Cleaners website.

## 📁 Contents

- **Videos** (3 files): Used in the hero section background
  - `mini scrub turbo.mov`
  - `Turbo corner clip.mov`
  - `Turbo Spin clip.mov`

- **Images** (12 files): Used in services, testimonials, and throughout the site
  - Various Pexels stock photos
  - `TurboTechLogo.png`

## 🔄 Keeping Files Updated

If you add new files to `/Users/venorthjeyan/Desktop/turbophotos`, run:

```bash
./scripts/sync-turbophotos.sh
```

Or manually copy files:
```bash
cp -r /Users/venorthjeyan/Desktop/turbophotos/* public/turbophotos/
```

Then commit and push:
```bash
git add public/turbophotos/
git commit -m "Update turbophotos media files"
git push origin main
```

## 📝 Note

These files are committed to the repository for production deployment compatibility. The original source folder is at `/Users/venorthjeyan/Desktop/turbophotos`.

