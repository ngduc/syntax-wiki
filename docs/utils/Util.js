export const isMobile = () => {
  if (typeof navigator !== 'undefined') {
    const ua = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod/i.test(ua);
  }
  return false;
};

/**
 * Plays well with historic artifacts
 */
export function loadScript(src, callback) {
  if (typeof window === 'undefined') {
    return;
  }
  const script = document.createElement('script');
  script.type = 'text/javascript';
  // IE
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  }
  // Others
  else {
    script.onload = callback;
  }
  script.src = src;
  document.head.appendChild(script);
}

let initHypothesisFlag = false;
export function initHypothesisOnce() {
  if (!initHypothesisFlag && !isMobile()) {
    loadScript('https://hypothes.is/embed.js', () => {
      initHypothesisFlag = true;
    });
  }
}
