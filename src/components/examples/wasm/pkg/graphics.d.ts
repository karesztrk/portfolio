/* tslint:disable */
/* eslint-disable */
/**
* @returns {number}
*/
export function get_output_buffer_pointer(): number;
/**
* @param {number} dark_value_red
* @param {number} dark_value_green
* @param {number} dark_value_blue
* @param {number} light_value_red
* @param {number} light_value_green
* @param {number} light_value_blue
*/
export function generate_canvas(dark_value_red: number, dark_value_green: number, dark_value_blue: number, light_value_red: number, light_value_green: number, light_value_blue: number): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly get_output_buffer_pointer: () => number;
  readonly generate_canvas: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
