(() => {
  // <stdin>
  (function() {
    try {
      let enableTransitions2 = function() {
        if (!transitionsEnabled) {
          transitionsEnabled = true;
          docEl.classList.remove("no-transitions");
        }
      }, bindCssLoadListener2 = function() {
        var link = document.getElementById("main-css");
        if (link) {
          link.addEventListener("load", enableTransitions2, { once: true });
          return true;
        }
        return false;
      };
      var enableTransitions = enableTransitions2, bindCssLoadListener = bindCssLoadListener2;
      var docEl = document.documentElement;
      docEl.classList.remove("no-js");
      docEl.classList.add("js");
      if (!docEl.classList.contains("no-transitions")) {
        docEl.classList.add("no-transitions");
      }
      try {
        var saved = localStorage.getItem("theme.mode") || localStorage.getItem("theme-mode");
        if (!saved) {
          var body = document.body;
          saved = body && body.dataset && body.dataset.theme ? body.dataset.theme : "dark";
        }
        if (saved === "dark") {
          docEl.classList.add("dark");
        } else {
          docEl.classList.remove("dark");
        }
      } catch (e) {
        docEl.classList.add("dark");
      }
      var transitionsEnabled = false;
      if (!bindCssLoadListener2()) {
        document.addEventListener("DOMContentLoaded", function() {
          requestAnimationFrame(function() {
            if (!bindCssLoadListener2()) {
              setTimeout(enableTransitions2, 250);
            }
          });
        });
      }
      setTimeout(enableTransitions2, 1e3);
    } catch (e) {
    }
  })();
})();
