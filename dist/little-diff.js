const $747425b437e121da$export$693f861392be013b = (base, current)=>{
    if (typeof base !== typeof current) throw new TypeError("getDelta arguments must be of same type");
    if (typeof base === "string") return $747425b437e121da$export$693f861392be013b([
        ...base
    ], [
        ...current
    ]).map(([start, end, chars = []])=>[
            start,
            end,
            chars.join("")
        ]);
    const delta = [];
    if (base.length > current.length) delta.push([
        current.length,
        base.length - current.length
    ]);
    for(let i = 0; i < current.length; i++){
        let splice, count = 0;
        while(base[i] !== current[i] && i < current.length){
            splice ||= [
                i,
                0,
                []
            ];
            splice[1] = ++count;
            splice[2].push(current[i++]);
        }
        if (splice) delta.push(splice);
    }
    return delta;
};
const $747425b437e121da$export$b166a5c4e5641e3a = (target, delta)=>{
    const result = delta.reduce((target, [start, length, changes = []])=>{
        target.splice(start, length, ...changes);
        return target;
    }, [
        ...target
    ]);
    return typeof target === "string" ? result.join("") : result;
};
const $747425b437e121da$export$5fb48e90c5fc6a15 = {
    getDelta: $747425b437e121da$export$693f861392be013b,
    applyDelta: $747425b437e121da$export$b166a5c4e5641e3a
};


export {$747425b437e121da$export$693f861392be013b as getDelta, $747425b437e121da$export$b166a5c4e5641e3a as applyDelta, $747425b437e121da$export$5fb48e90c5fc6a15 as LittleDiff};
//# sourceMappingURL=little-diff.js.map
