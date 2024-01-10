/* tslint:disable */
/* eslint-disable */
/**
* @param {number} size
* @returns {Maze}
*/
export function draw_maze(size: number): Maze;
/**
* @param {Maze} maze
*/
export function add_listeners(maze: Maze): void;
/**
* @param {Maze} maze
* @param {Point} start
* @param {Point} goal
* @param {Algorithm} algorithm
* @returns {Path}
*/
export function draw_path(maze: Maze, start: Point, goal: Point, algorithm: Algorithm): Path;
/**
* @param {Maze} maze
*/
export function clean(maze: Maze): void;
/**
*/
export enum Algorithm {
  Dijkstra = 0,
  Bfs = 1,
  Dfs = 2,
}
/**
*/
export class Maze {
  free(): void;
}
/**
*/
export class Path {
  free(): void;
}
/**
*/
export class Point {
  free(): void;
/**
* @param {number} x
* @param {number} y
*/
  constructor(x: number, y: number);
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_point_free: (a: number) => void;
  readonly __wbg_maze_free: (a: number) => void;
  readonly point_new: (a: number, b: number) => number;
  readonly __wbg_path_free: (a: number) => void;
  readonly draw_maze: (a: number) => number;
  readonly add_listeners: (a: number) => void;
  readonly draw_path: (a: number, b: number, c: number, d: number) => number;
  readonly clean: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h870b69ca9c946d72: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
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
