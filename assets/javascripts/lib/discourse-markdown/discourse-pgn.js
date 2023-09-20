// Make a setup

export function setup(helper) {
  if (!helper.markdownIt) {
    return;
  }

  helper.allowList(['span.pgn', 'div.pgn']);

  helper.registerOptions((opts,siteSettings)=>{
      opts.features.pgn_viewer = !!siteSettings.pgn_viewer_enabled;
  });

  helper.registerPlugin((md) => {
    if (md.options.discourse.features.pgn_viewer) {
      md.block.bbcode.ruler.push("pgn", {
        tag: "pgn",
        wrap: "div.pgn"
      });
    }
  });
}

