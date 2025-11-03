// Static/Pexels Hero Background (Project override)
// If window.STATIC_HERO_IMAGE is present, use it; otherwise do nothing.

(function(){
  function applyStaticBackground(url){
    const hero = document.querySelector('.hero-section');
    if(!hero || !url) return;

    // Remove gradient class to avoid conflict
    hero.classList.remove('gradient-bg');

    // Create background container
    const bg = document.createElement('div');
    bg.className = 'pexels-bg-container';
    Object.assign(bg.style, {
      position: 'absolute',
      top: '0', left: '0', right: '0', bottom: '0',
      zIndex: '0',
      opacity: '0',
      transition: 'opacity 0.8s ease-in-out',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    });

    const overlay = document.createElement('div');
    overlay.className = 'pexels-overlay';
    Object.assign(overlay.style, {
      position: 'absolute',
      top: '0', left: '0', right: '0', bottom: '0',
      background: 'linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%)',
      zIndex: '1',
      pointerEvents: 'none',
      opacity: '0',
      transition: 'opacity 0.8s ease-in-out'
    });

    // Ensure content stays on top
    const content = hero.querySelector('.max-w-7xl');
    if(content){
      content.style.position = 'relative';
      content.style.zIndex = '10';
    }

    hero.appendChild(bg);
    hero.appendChild(overlay);

    const img = new Image();
    img.onload = function(){
      bg.style.backgroundImage = 'url(' + url + ')';
      setTimeout(function(){
        bg.style.opacity = '1';
        overlay.style.opacity = '1';
      }, 50);
    };
    img.onerror = function(){
      console.warn('Static hero image failed to load:', url);
      // fall back to existing gradient (do nothing, gradient remains)
    };
    img.src = url;
  }

  function init(){
    if (window.STATIC_HERO_IMAGE){
      applyStaticBackground(window.STATIC_HERO_IMAGE);
      return;
    }
    // If no static image configured, we leave gradient as-is.
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
