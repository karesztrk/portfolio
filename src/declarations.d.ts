import { DirectionalLightHelper } from 'three';

declare module '*.svg';
declare module '*.webp';
declare module 'data/*';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Object3DNode<
        DirectionalLightHelper,
        typeof DirectionalLightHelper
      >;
    }
  }
}
