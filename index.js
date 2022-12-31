const getDelta = (base,current) => {
    if(typeof(base)!==typeof(current)) throw new TypeError("getDelta arguments must be of same type");
    if(typeof(base)==="string") return getDelta([...base],[...current]).map(([start,end,chars=[]]) => [start,end,chars.join("")])
    const delta = [];
    if(base.length>current.length) delta.push([current.length,base.length-current.length]);
    for(let i=0;i<current.length;i++) {
        let splice, count = 0;
        while(base[i]!==current[i] && i<current.length) {
            splice ||= [i,0,[]];
            splice[1] = ++count;
            splice[2].push(current[i++]);
        }
        if(splice) delta.push(splice);
    }
    return delta;
}
const applyDelta = (target,delta) => {
    const result = delta.reduce((target,[start,length,changes=[]]) => {
            target.splice(start,length,...changes);
            return target;
        }, [...target]);
    return typeof(target)==="string" ? result.join("") : result;
}
const NanoDiff = { getDelta, applyDelta }
export {getDelta,applyDelta, NanoDiff}