export declare type EventType = string;
export declare type Callback<T = any> = (event: T) => void;
export declare type EventTypeMap = Map<EventType, Array<Callback>>;
export interface Emitter {
    all: EventTypeMap;
    on<T = any>(type: EventType, callback: Callback<T>): void;
    once<T = any>(type: EventType, callback: Callback<T>): void;
    emit<T = any>(type: EventType, ctx?: T): void;
    off<T = any>(type: EventType, callback: Callback<T>): void;
}
export default class lightEmitter implements Emitter {
    all: EventTypeMap;
    on<T = any>(type: EventType, callback: Callback<T>): this;
    once<T = any>(type: EventType, callback: Callback<T>): void;
    emit<T = any>(type: EventType, ctx?: T): this;
    off<T = any>(type: EventType, callback: Callback<T>): this;
}
