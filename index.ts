export type EventType = string;
export type Callback<T = any> = (event: T) => void;


export interface Emitter {
  on<T = any>(type: EventType, callback: Callback<T>): void;
  once<T = any>(type: EventType, callback: Callback<T>): void;
  emit<T = any>(type: EventType, ctx: T): void;
  off<T = any>(type: EventType, callback: Callback<T>): void;
}

class lightEmitter implements Emitter {
  public on<T = any>(type: EventType, callback: Callback<T>) {
  
  }
  public once<T = any>(type: EventType, callback: Callback<T>) {
  
  }
  public emit<T = any>(type: EventType, ctx: T) {

  }
  public off<T = any>(type: EventType, callback: Callback<T>) {
  
  }
}
export default new lightEmitter();
