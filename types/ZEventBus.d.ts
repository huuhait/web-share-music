declare module '@/library/ZEventBus' {
    export function on(ev: string, callback?: Function): void;
    export function emit(ev: string, ...args: any): void;
    export function remove(ev: string, callback?: Function): void;
  }