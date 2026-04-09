const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/bielg/OneDrive/Área de Trabalho/Port/site/public';

const sharedFooter = `
<!-- BEGIN: Footer -->
<footer class="bg-brand pt-32 pb-12 relative overflow-hidden" data-purpose="footer" id="contact">
<!-- Huge Outline Text in BG -->
<div class="absolute bottom-0 left-0 w-full pointer-events-none select-none z-0 overflow-hidden">
<div class="animate-marquee-container flex whitespace-nowrap overflow-hidden">
<div class="animate-marquee flex-shrink-0 flex items-center pr-20">
<h2 class="serif-display text-[25vw] uppercase text-outline leading-none font-bold">GABRIEL MARQUES</h2>
</div>
<div class="animate-marquee flex-shrink-0 flex items-center pr-20">
<h2 class="serif-display text-[25vw] uppercase text-outline leading-none font-bold">GABRIEL MARQUES</h2>
</div>
</div>
</div>
<div class="container mx-auto px-6 relative z-10">
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-dark/20 pb-20">
<div>
<p class="text-sm uppercase tracking-[0.2em] mb-8 font-semibold text-dark">Conecte-se comigo</p>
<div class="flex gap-6">
<a class="flex items-center justify-center w-32 h-12 rounded-full border border-dark text-dark font-bold uppercase tracking-wider transition-colors hover:bg-dark hover:text-white" href="https://www.linkedin.com/in/gabriel-alex-rodrigues-marques-438351335" target="_blank">LinkedIn</a>
<a class="flex items-center justify-center w-32 h-12 rounded-full border border-dark text-dark font-bold uppercase tracking-wider transition-colors hover:bg-dark hover:text-white" href="https://github.com/GabrielAlexS2" target="_blank">GitHub</a>
<a class="flex items-center justify-center w-32 h-12 rounded-full border border-dark text-dark font-bold uppercase tracking-wider transition-colors hover:bg-dark hover:text-white" href="https://wa.me/5585992693144" target="_blank">WhatsApp</a>
</div>
</div>
<div class="flex flex-col md:flex-row gap-8 md:gap-12 text-sm uppercase tracking-widest font-bold text-dark">
<a class="hover:text-white transition-colors" href="index.html">Início</a>
<a class="hover:text-white transition-colors" href="about.html">Sobre</a>
<a class="hover:text-white transition-colors" href="skills.html">Serviços</a>
<a class="hover:text-white transition-colors" href="projects.html">Projetos</a>
<a class="hover:text-white transition-colors" href="contact.html">Contato</a>
</div>
</div>
<div class="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<p class="text-sm font-bold text-dark/80 italic">Eu transformo ideias inovadoras em realidade através de design atencioso e código significativo.</p>
<p class="text-sm font-bold tracking-tight text-dark">Copyright © Gabriel Marques 2026</p>
</div>
</div>
</footer>
<!-- END: Footer -->
<script data-purpose="scroll-animations">
    // Simple intersection observer for scroll reveals
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
</script>
</body></html>
`;

// Helper to replace everything from the footer to the end of the file
function replaceFooter(content) {
  const footerIndex = content.search(/<footer/i);
  if (footerIndex !== -1) {
    return content.substring(0, footerIndex) + sharedFooter;
  }
  return content; // Fallback
}

// 1. Process INDEX.HTML
let indexContent = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
indexContent = replaceFooter(indexContent);
fs.writeFileSync(path.join(dir, 'index.html'), indexContent, 'utf8');

// 2. Process PROJECTS.HTML
let projectsContent = fs.readFileSync(path.join(dir, 'projects.html'), 'utf8');
// remove bottom nav
projectsContent = projectsContent.replace(/<!-- Bottom Nav Bar -->[\s\S]*?<\/div>\s*<\/div>/g, '');
// replace footer
projectsContent = replaceFooter(projectsContent);
// smaller cards: Replace aspect-[4/5] and aspect-square with aspect-video and limit max-w
projectsContent = projectsContent.replace(/aspect-\[4\/5\]/g, 'aspect-video lg:max-h-[500px]');
projectsContent = projectsContent.replace(/aspect-square/g, 'aspect-video');
fs.writeFileSync(path.join(dir, 'projects.html'), projectsContent, 'utf8');

// 3. Process SKILLS.HTML
let skillsContent = fs.readFileSync(path.join(dir, 'skills.html'), 'utf8');
// remove bottom nav
skillsContent = skillsContent.replace(/<!-- Bottom Nav Bar Component Wrapper -->[\s\S]*?<\/div>\s*<\/div>/g, '');
// replace footer
skillsContent = replaceFooter(skillsContent);
// Make skill cards
// Match <span class="px-5 py-2... ">React.js</span> and turn into neat border cards
skillsContent = skillsContent.replace(/<span class="px-5 py-2 rounded-full border[^>]*>([^<]+)<\/span>/g, 
  '<div class="flex items-center justify-center px-6 py-4 rounded-xl shadow-lg border border-slate-700 bg-slate-900/50 hover:bg-primary/10 hover:border-primary transition-colors text-white font-bold">$1</div>');
skillsContent = skillsContent.replace(/<div class="flex flex-wrap gap-3">/g, 
  '<div class="grid grid-cols-2 md:grid-cols-4 gap-4">');
// Add scroll animation to trajectory cards
skillsContent = skillsContent.replace(/<div class="group relative pl-8 pb-12 border-l border-white\/10">/g, 
  '<div class="group relative pl-8 pb-12 border-l border-white/10 reveal-on-scroll">');
fs.writeFileSync(path.join(dir, 'skills.html'), skillsContent, 'utf8');

// 4. Process ABOUT.HTML
let aboutContent = fs.readFileSync(path.join(dir, 'about.html'), 'utf8');
aboutContent = replaceFooter(aboutContent);
fs.writeFileSync(path.join(dir, 'about.html'), aboutContent, 'utf8');

// 5. Process CONTACT.HTML
let contactContent = fs.readFileSync(path.join(dir, 'contact.html'), 'utf8');
contactContent = replaceFooter(contactContent);
// Add top spacing (pt-48 or similar) inside main or the specific container
// Find <main> and see if it lacks padding. Or add mt-32 to the first section.
contactContent = contactContent.replace(/<section class="(relative )?(w-full )?(flex )?[^"]*"/g, (match) => {
    if(!match.includes('pt-') && !match.includes('mt-')) {
        return match.replace(/class="/, 'class="pt-32 ');
    }
    return match;
});
fs.writeFileSync(path.join(dir, 'contact.html'), contactContent, 'utf8');

console.log('Component Overrides Completed');
