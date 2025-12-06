/**
 * Utility for accessing photos and videos from the turbophotos folder
 * The turbophotos folder is symlinked at /public/turbophotos
 */

export interface MediaFile {
  name: string
  path: string
  type: 'image' | 'video'
  extension: string
}

// Available images from turbophotos
export const turbophotosImages = {
  // New logo
  newlogo: '/turbophotos/newlogo.png',
  logo: '/turbophotos/TurboTechLogo.png',
  logoWatermark: '/turbophotos/TurboTechLogo-removebg-preview.png',
  
  // Person images
  person1: '/turbophotos/person1.png',
  person2: '/turbophotos/person2.png',
  person3: '/turbophotos/person3.png',
  
  // Service images
  cleanedbathroom: '/turbophotos/cleanedbathroom.jpg',
  cleankitchen: '/turbophotos/cleankitchen.jpg',
  teamcleaners: '/turbophotos/teamcleaners.jpg',
  
  // Carousel images
  pixabay271624: '/turbophotos/pexels-pixabay-271624.jpg',
  jvdm1454806: '/turbophotos/pexels-jvdm-1454806.jpg',
  cleanliving: '/turbophotos/cleanliving.jpg',
  kitchen2: '/turbophotos/kitchen2.jpg',
  kitchen3: '/turbophotos/kitchen3.jpg',
  
  // Legacy images (kept for compatibility)
  falling4utah: '/turbophotos/pexels-falling4utah-2724749.jpg',
  fotoaibe: '/turbophotos/pexels-fotoaibe-1571468.jpg',
  janetrangdoan: '/turbophotos/pexels-janetrangdoan-1128678.jpg',
  jvdm: '/turbophotos/pexels-jvdm-1454804.jpg',
  karolaG1: '/turbophotos/pexels-karola-g-4239072.jpg',
  karolaG2: '/turbophotos/pexels-karola-g-4239145.jpg',
  lilianaDrew1: '/turbophotos/pexels-liliana-drew-9462296.jpg',
  lilianaDrew2: '/turbophotos/pexels-liliana-drew-9462638.jpg',
  mali: '/turbophotos/pexels-mali-229789.jpg',
  pavelDanilyuk: '/turbophotos/pexels-pavel-danilyuk-7108400.jpg',
  pixabay: '/turbophotos/pexels-pixabay-358592.jpg',
} as const

// Available videos from turbophotos
export const turbophotosVideos = {
  miniScrub: '/turbophotos/mini scrub turbo.mov',
  cornerClip: '/turbophotos/Turbo corner clip.mov',
  spinClip: '/turbophotos/Turbo Spin clip.mov',
} as const

// Helper to get properly encoded video URL
export function getVideoUrl(name: keyof typeof turbophotosVideos): string {
  const path = turbophotosVideos[name]
  // Encode spaces and special characters for URL
  return path.split('/').map((part, index) => 
    index === 0 ? part : encodeURIComponent(part)
  ).join('/')
}

// Helper function to get all images
export function getAllImages(): string[] {
  return Object.values(turbophotosImages)
}

// Helper function to get all videos
export function getAllVideos(): string[] {
  return Object.values(turbophotosVideos)
}

// Helper function to get a random image
export function getRandomImage(): string {
  const images = getAllImages()
  return images[Math.floor(Math.random() * images.length)]
}

// Helper function to get image by name
export function getImage(name: keyof typeof turbophotosImages): string {
  return turbophotosImages[name]
}

// Helper function to get video by name (with URL encoding)
export function getVideo(name: keyof typeof turbophotosVideos): string {
  return getVideoUrl(name)
}
