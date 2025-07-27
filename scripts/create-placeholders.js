const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder
function createSVGPlaceholder(width, height, text, bgColor = '#f3f4f6', textColor = '#6b7280') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>`;
}

// Define placeholder images needed
const placeholders = [
  { path: 'public/about/hero-image.jpg', width: 600, height: 450, text: 'About Hero Image' },
  { path: 'public/about/entrepreneur-1.jpg', width: 300, height: 300, text: 'Entrepreneur 1' },
  { path: 'public/about/entrepreneur-2.jpg', width: 300, height: 225, text: 'Entrepreneur 2' },
  { path: 'public/about/entrepreneur-3.jpg', width: 300, height: 225, text: 'Entrepreneur 3' },
  { path: 'public/about/entrepreneur-4.jpg', width: 300, height: 300, text: 'Entrepreneur 4' },
  { path: 'public/about/principles-image.jpg', width: 600, height: 450, text: 'Core Principles' },
  { path: 'public/team/fahad-hassan.jpg', width: 200, height: 200, text: 'Fahad Hassan' },
  { path: 'public/team/adil-rashid.jpg', width: 200, height: 200, text: 'Dr. Adil Rashid' },
  { path: 'public/team/mahmoud-khaled.jpg', width: 200, height: 200, text: 'Mahmoud Khaled' },
  { path: 'public/team/abdullah-sulaiti.jpg', width: 200, height: 200, text: 'Abdullah Al-Sulaiti' },
  { path: 'public/testimonials/avatar1.jpg', width: 100, height: 100, text: 'Avatar 1' },
  { path: 'public/testimonials/avatar2.jpg', width: 100, height: 100, text: 'Avatar 2' },
  { path: 'public/testimonials/avatar3.jpg', width: 100, height: 100, text: 'Avatar 3' },
];

// Create directories and SVG files
placeholders.forEach(({ path: filePath, width, height, text }) => {
  const dir = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create SVG content
  const svgContent = createSVGPlaceholder(width, height, text);
  
  // Write SVG file (change extension to .svg for now)
  const svgPath = filePath.replace(/\.(jpg|png)$/, '.svg');
  fs.writeFileSync(svgPath, svgContent);
  
  console.log(`Created placeholder: ${svgPath}`);
});

console.log('All placeholder images created successfully!');
