# TurboPhotos Integration

Your project is now connected to the `turbophotos` folder on your desktop!

## 📁 Location

The turbophotos folder is accessible at: `/public/turbophotos/` (symlinked from `/Users/venorthjeyan/Desktop/turbophotos`)

## 🖼️ Available Media

### Images
- `pexels-falling4utah-2724749.jpg`
- `pexels-fotoaibe-1571468.jpg`
- `pexels-janetrangdoan-1128678.jpg`
- `pexels-jvdm-1454804.jpg`
- `pexels-karola-g-4239072.jpg`
- `pexels-karola-g-4239145.jpg`
- `pexels-liliana-drew-9462296.jpg`
- `pexels-liliana-drew-9462638.jpg`
- `pexels-mali-229789.jpg`
- `pexels-pavel-danilyuk-7108400.jpg`
- `pexels-pixabay-358592.jpg`
- `TurboTechLogo.png`

### Videos
- `mini scrub turbo.mov`
- `Turbo corner clip.mov`
- `Turbo Spin clip.mov`

## 💻 Usage

### Option 1: Using the Utility Helper

Import and use the utility functions:

```tsx
import { turbophotosImages, turbophotosVideos, getImage, getVideo, getRandomImage } from '@/app/utils/turbophotos'

// Use a specific image
<img src={getImage('logo')} alt="TurboTech Logo" />

// Use a specific video
<video src={getVideo('miniScrub')} controls />

// Get a random image
<img src={getRandomImage()} alt="Random photo" />
```

### Option 2: Direct Path Access

Reference files directly:

```tsx
// Images
<img src="/turbophotos/TurboTechLogo.png" alt="Logo" />
<img src="/turbophotos/pexels-fotoaibe-1571468.jpg" alt="Photo" />

// Videos
<video src="/turbophotos/mini scrub turbo.mov" controls />
```

## 🔄 Adding New Files

Simply add new photos or videos to `/Users/venorthjeyan/Desktop/turbophotos/` and they will automatically be available at `/turbophotos/[filename]` in your project.

## 📝 Note

The connection uses a symbolic link, so any changes you make to files in the turbophotos folder will be immediately available in your project without needing to copy files.

