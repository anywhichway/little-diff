# little-diff

A tiny module to get a big difference.

Lightning fast string and array get and apply diff library. The module file is less than 350 bytes compressed and gzipped.

# Install

```
npm install little-diff
```

# Usage

A browser build is available in the `dist` directory. Otherwise, use the `./index.js` module file which exports `getDelta`, `applyDelta`, and `LittleDiff` (which just has  `getDelta`, `applyDelta` as methods).

## getDelta(source:string | Array, target:string | Array)

Returns an array of arrays of the form `[start:number, end:number, items:Array|undefined]`. These are effectively splice operations that when applied in sequence will transfrom the `source` into the `target`. This is what makes the library small and fast. It is very close to native JavaScript.

## applyDelta(source: string | Array, delta: Array)

Applies the delta to return a target. The return type will be the same as the `source` type.

See the file `./exmaple.js`.

# Release History (Reverse Chronological Order)

2023-01-12 v1.0.4 Remove .parcel-cache which was accidentally commited.

2023-01-09 v1.0.3 Added  "main": "index.js" to package.json since some dependency processing requires export or main.

2023-01-07 v1.0.2 Updated docs

2023-01-05 v1.0.1 Updated docs

2023-01-04 v1.0.0 Added unit tests. Updated docs.

2022-12-31 v0.0.1 Initial public release

