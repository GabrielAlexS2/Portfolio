const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/bielg/OneDrive/Área de Trabalho/Port/site/public';
const files = ['index.html', 'about.html', 'projects.html', 'skills.html', 'contact.html'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Swap Font from Space Grotesk to Outfit for better accent support
  content = content.replace(/Space\+Grotesk:wght@700/g, 'Outfit:wght@700;800;900');
  content = content.replace(/'Space Grotesk'/g, "'Outfit'");

  // 2. Personal Information Update
  // Email
  content = content.replace(/GABRIEL@DEV\.COM/g, 'GABRIEL.ALEX.MARQUES11@GMAIL.COM');
  content = content.replace(/hello@gabriel\.com/g, 'gabriel.alex.marques11@gmail.com');
  // LinkedIn
  content = content.replace(/<a[^>]*>Linkedin<\/a>/g, '<a class="hover:opacity-70 transition-opacity" href="https://www.linkedin.com/in/gabriel-alex-rodrigues-marques-438351335" target="_blank">LinkedIn</a>');
  // GitHub
  content = content.replace(/<a[^>]*>GitHub<\/a>/g, '<a class="hover:opacity-70 transition-opacity" href="https://github.com/GabrielAlexS2" target="_blank">GitHub</a>');
  // WhatsApp (adding where Instagram was, or adding an explicitly new link)
  content = content.replace(/<a[^>]*>Instagram<\/a>/g, '<a class="hover:opacity-70 transition-opacity" href="https://wa.me/5585992693144" target="_blank">WhatsApp</a>');
  
  // Remove Twitter
  content = content.replace(/<a[^>]*class="hover:opacity-70 transition-opacity"[^>]*>Twitter \(X\)<\/a>\n?/g, '');
  
  // Copyright
  content = content.replace(/2025/g, '2026');

  // 3. Fix Marquee Animation HTML in Footer globally (standardized)
  const marqueeRegex = /<div class="animate-marquee">\s*<h2[^>]*>GABRIEL MARQUES<\/h2>\s*<h2[^>]*>GABRIEL MARQUES<\/h2>\s*<\/div>/g;
  const newMarquee = `<div class="animate-marquee-container flex whitespace-nowrap overflow-hidden">
    <div class="animate-marquee flex-shrink-0 flex items-center pr-20">
      <h2 class="serif-display text-[25vw] uppercase text-outline leading-none font-bold">GABRIEL MARQUES</h2>
    </div>
    <div class="animate-marquee flex-shrink-0 flex items-center pr-20">
      <h2 class="serif-display text-[25vw] uppercase text-outline leading-none font-bold">GABRIEL MARQUES</h2>
    </div>
  </div>`;
  content = content.replace(marqueeRegex, newMarquee);

  // 4. Update Marquee CSS globally (infinite loop math)
  const cssMarqueeRegex = /@keyframes marquee {[\s\S]*?100% { transform: translateX\(-50%\); }[\s\S]*?}[\s\S]*?\.animate-marquee {[\s\S]*?animation: marquee 20s linear infinite;[\s\S]*?}/g;
  const newCssMarquee = `@keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      animation: marquee 20s linear infinite;
    }`;
  content = content.replace(cssMarqueeRegex, newCssMarquee);

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Global Replacements Completed');
