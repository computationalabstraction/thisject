function multiThis(func,...obj) {
    let merged = new Proxy({ all: obj }, {
        set(target,key,value) {
            let o = undefined;
            for(let e of target.all) {
                if(e[key]) {
                    o = e[key] = value;
                    break;
                }
            }
            return o;
        },
        get(target,key) {
            let o = undefined;
            for(let e of target.all) {
                if(e[key]) {
                    o = e[key];
                    break;
                }
            }
            return o;
        }
    });
    return func.bind(merged);
}

module.export = multiThis;