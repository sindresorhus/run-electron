# run-electron [![Build Status](https://travis-ci.com/sindresorhus/run-electron.svg?branch=master)](https://travis-ci.com/sindresorhus/run-electron)

> Run Electron without all the junk terminal output

Electron spews out a lot of junk terminal output when you run it. No more!

I have tried to get the Electron team to fix this, but they are not responding to [my issue](https://github.com/electron/electron/issues/12438), nor any others: [electron/electron#12185](https://github.com/electron/electron/issues/12185), [electron/electron#13502](https://github.com/electron/electron/issues/13502).

###### Before

```
$ electron .
2018-08-10 22:52:14.068 Electron[90710:4891777] *** WARNING: Textured window <AtomNSWindow: 0x7fd508e75020> is getting an implicitly transparent titlebar. This will break when linking against newer SDKs. Use NSWindow's -titlebarAppearsTransparent=YES instead.
2018-08-10 22:52:37.919 Electron Helper[90714:4892173] Couldn't set selectedTextBackgroundColor from default ()
[90789:0810/225757.360355:ERROR:CONSOLE(0)] "Failed to load https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/product_registry_impl/product_registry_impl_module.js: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'chrome-devtools://devtools' is therefore not allowed access. The response had HTTP status code 404.", source: chrome-devtools://devtools/bundled/inspector.html?remoteBase=https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/&can_dock=true&toolbarColor=rgba(223,223,223,1)&textColor=rgba(0,0,0,1)&experiments=true (0)
[90789:0810/225757.360445:ERROR:CONSOLE(22)] "Empty response arrived for script 'https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/product_registry_impl/product_registry_impl_module.js'", source: chrome-devtools://devtools/bundled/inspector.js (22)
[90789:0810/225757.361236:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
[90789:0810/225757.361293:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
App logging
[90789:0810/225802.898597:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
[90789:0810/225803.872738:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
[90789:0810/225803.898240:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
[90789:0810/225803.898297:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
...
```

###### After

```
$ run-electron .
App logging
```


## Install

```
$ npm install run-electron electron
```

*Note: Electron is not bundled in this package.*


## Usage

Just use it like it's `electron`.

```
$ run-electron --help
```


## Related

- [electron-util](https://github.com/sindresorhus/electron-util) - Useful utilities for developing Electron apps and modules
- [electron-timber](https://github.com/sindresorhus/electron-timber) - Pretty logger for Electron apps
- [electron-reloader](https://github.com/sindresorhus/electron-reloader) - Simple auto-reloading for Electron apps during development
- [electron-debug](https://github.com/sindresorhus/electron-debug) - Adds useful debug features to your Electron app
- [More…](https://github.com/search?q=user%3Asindresorhus+electron-&type=Repositories)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
