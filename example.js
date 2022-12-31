import {getDelta,applyDelta} from "./index.js";

const s1 = "Hello world!",
    s2 = "Hello joe!",
    sdelta = getDelta(s1,s2);
console.log(sdelta);
console.log(applyDelta(s1,sdelta),"==",s2);

const a1 = [1,2,3,4,5,6,7],
    a2 = [1,2,-3,4,5,-6],
    adelta = getDelta(a1,a2);
console.log(adelta);
console.log(applyDelta(a1,adelta),"==",a2);

const txt1 = "".padStart(10240,"a")+"".padStart(10240,"b")+"".padStart(10240,"c"),
    txt2 = "".padStart(5120,"c")+"".padStart(5120,"a")+"".padStart(5120,"b")+"".padStart(5120,"a")+"".padStart(5120,"b")+"".padStart(5120,"c"),
    tdelta = getDelta(txt1,txt2);
console.log("equal",applyDelta(txt1,tdelta)==txt2);
