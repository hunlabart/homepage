import { useEffect } from "react";
const W = 780
const H = 844

// Hook
function useFlexible(key, initialValue) {
  useEffect(() => {
    const resize =() => {
      const docEl = document.documentElement
      const clientWidth = docEl.clientWidth > W ? 360 : docEl.clientWidth ;
          if (!clientWidth) return;
          docEl.style.fontSize = clientWidth / W * 100 + 'px';
    }
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    resize()
    window.addEventListener(resizeEvt, resize)

  }, [])
}

export default useFlexible


// (function (doc, win) {
//   var docEl = doc.documentElement,
//       resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//       recalc = function () {
//           var clientWidth = docEl.clientWidth > 750 ? 360 : docEl.clientWidth ;
//           if (!clientWidth) return;
//           docEl.style.fontSize = clientWidth / 750 * 100 + 'px';
//       };
//   if (!doc.addEventListener) return;
//   doc.addEventListener('DOMContentLoaded', recalc, false);
//   if (docEl.clientWidth > 640) return;
//   win.addEventListener(resizeEvt, recalc, false);
// })(document, window);

