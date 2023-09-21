import loadScript from "discourse/lib/load-script";
import { escape } from "pretty-text/sanitizer";
import { debounce } from "@ember/runloop";

export default {
  name: 'pgn',
  initialize(container) {
    const siteSettings = container.lookup("site-settings:main");

    window.console.log("Initializer here")
  }
};