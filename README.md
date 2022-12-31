# nano-diff
A tiny, lightning fast string and array get and apply diff library. The module file is less than 350 bytes compressed and gzipped.

# Install

```
npm install nano-diff
```

# Usage

A browser build is available in the `dist` directory. Otherwise, use the `./index.js` module file which exports `getDelta`, `applyDelta`, and `NanoDiff` (which just has  `getDelta`, `applyDelta` as methods).

## getDelta(source:string | Array, target:string | Array)

Returns an array of arrays of the form `[start:number, end:number, items:Array|undefined]`. These are effectively splice operations that when applied in sequence will transfrom the `source` into the `target`. This is what makes the library small and fast. It is very close to native JavaScript.

## applyDelta(source: string | Array, delta: Array)

Applies the delta to return a target. The return type will be the same as the `source` type.

See the file `./exmaple.js`.

# Release History (Reverse Chronological Order)

2022-12-31 v0.0.1 Initial public release
