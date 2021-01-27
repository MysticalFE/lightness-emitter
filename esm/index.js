export default class lightEmitter {
    constructor() {
        this.all = new Map();
    }
    on(type, callback) {
        let cbs = this.all.get(type);
        const isCallbackExist = cbs && cbs.push(callback);
        if (!isCallbackExist)
            this.all.set(type, [callback]);
        return this;
    }
    once(type, callback) {
        this.off(type, callback);
        this.on(type, callback);
    }
    emit(type, ctx) {
        const cbs = this.all.get(type) || [];
        [...cbs].map(cb => { cb(ctx); });
        return this;
    }
    off(type, callback) {
        const cbs = this.all.get(type);
        if (cbs)
            cbs.splice(cbs.indexOf(callback), 1);
        return this;
    }
}
//# sourceMappingURL=index.js.map