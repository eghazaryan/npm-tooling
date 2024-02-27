1 how to run .editorconfig +
2 why should we use both rollup and esbuild?
3 Before build should i delete previous build folder? (nested build folders build/*/types/build)+

why to use main with exports if exports is modern alternative of  main?

4 What is the difference between esm and cjs formats? Which format is better? Which format of files is used by modern frameworks when the library is consumed?



ESM 
uses export and import
is asynchronous. Modules are loaded and executed asynchronously, which can lead to better performance in certain scenarios.?

What is the difference between esm and cjs formats? 
  ESM yses export and import, CJS uses require() and module.exports
  ESM is asynchronous and load modules synchronously
  CJS doesn't support tree shaking, it bundles all all exports


Which format is better?
ESM is more suitable for web browsers and  CJS for server-side environments.

CJS
uses require() and module.exports

load modules synchronously
doesn't support tree shaking, it bundles all all exports



Why does ESM is more suitable for web browsers and  CJS for server-side environments.
In which scenarious asyncronous esm imporves performance?