export type EventType = string;
export type Callback<T = any> = (event: T) => void;
export type EventTypeMap = Map<EventType, Array<Callback>>;
export interface Emitter {
  all: EventTypeMap;
  on<T = any>(type: EventType, callback: Callback<T>): void;
  once<T = any>(type: EventType, callback: Callback<T>): void;
  emit<T = any>(type: EventType, ctx?: T): void;
  off<T = any>(type: EventType, callback: Callback<T>): void;
}
export default class lightEmitter implements Emitter {
  public all: EventTypeMap = new Map()
  public on<T = any>(type: EventType, callback: Callback<T>) {
    let cbs = this.all.get(type);
    const isCallbackExist = cbs && cbs.push(callback);
    if(!isCallbackExist) this.all.set(type, [callback]);
    return this;
  }
  public once<T = any>(type: EventType, callback: Callback<T>) {
    this.off(type, callback);
    this.on(type, callback);
  }
  public emit<T = any>(type: EventType, ctx?: T) {
    const cbs = this.all.get(type) || [];
    [...cbs].map(cb => { cb(ctx) });
    return this;
  }
  public off<T = any>(type: EventType, callback: Callback<T>) {
    const cbs = this.all.get(type);
    if(cbs) cbs.splice(cbs.indexOf(callback), 1);
    return this;
  }
}
