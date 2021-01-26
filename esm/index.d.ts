export declare type EventType = string;
export declare type Callback<T = any> = (event: T) => void;
export interface Emitter {
    on<T = any>(type: EventType, callback: Callback<T>): void;
    once<T = any>(type: EventType, callback: Callback<T>): void;
    emit<T = any>(type: EventType, ctx: T): void;
    off<T = any>(type: EventType, callback: Callback<T>): any;
}
declare class lightEmitter implements Emitter {
    on<T = any>(type: EventType, callback: Callback<T>): void;
    once<T = any>(type: EventType, callback: Callback<T>): void;
    emit<T = any>(type: EventType, ctx: T): void;
    off<T = any>(type: EventType, callback: Callback<T>): void;
}
declare const _default: lightEmitter;
export default _default;
