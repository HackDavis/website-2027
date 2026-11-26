// Shared types and helpers for the underwater sponsors scene. Each layout
// (desktop / mobile) is described in design pixels on its own Figma artboard;
// Section5 converts them to container-relative units (see --u in the SCSS).

export type Anim = 'sway' | 'bubble' | 'float';

export type Piece = {
  /** Image source; omitted for plain shapes. */
  src?: string;
  /** CSS background for plain shapes (colour or gradient). */
  fill?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  /** Inner element that carries a rotation / flip inside the bounding box. */
  inner?: { w: number; h: number; transform: string };
  /** CSS inset applied to the image wrapper (for strokes that bleed past their box). */
  inset?: string;
  /** 'top' = pebble (rounded top only), 'full' = pill (sand particles). */
  rounded?: 'top' | 'full';
  grayscale?: boolean;
  anim?: Anim;
  delay?: number;
};

export type Fish =
  /** A fish whose artwork already includes its logo (or none). */
  | { kind: 'art'; src: string; name?: string }
  /** A plain fish body with a sponsor logo laid over it. */
  | {
      kind: 'logo';
      body: string;
      logo: string;
      name: string;
      logoBox: { x: number; y: number; w: number; h: number };
    };

export type FishRow = {
  y: number;
  /** Mirrored rows face and swim right. */
  reversed: boolean;
  /** Left offset of the first fish, in design px. */
  offset: number;
  fish: Fish[];
};

export type Scene = {
  /** Artboard width the numbers are measured against. */
  width: number;
  /** Artboard y-coordinate where this section begins. */
  top: number;
  height: number;
  /** Drawn behind the fish. */
  backdrop: Piece[];
  floorArt: Piece[];
  /** Drawn in front of the fish and frog. */
  cliffArt: Piece[];
  frog: {
    box: {
      x: number;
      y: number;
      w: number;
      h: number;
      inner: { w: number; h: number; transform: string };
    };
    /** Positioned relative to the frog's inner (unrotated) box. */
    parts: Piece[];
  };
  fish: { w: number; h: number; gap: number; pad: number; bodyH: number };
  fishRows: FishRow[];
};

export const FLIP = 'rotate(180deg) scaleY(-1)';
export const SWAY_A = 'rotate(-7.79deg) skewX(0.09deg)';
export const SWAY_B = 'rotate(12.4deg) skewX(-0.15deg)';
export const CORAL_A = 'rotate(179.29deg) skewX(1.41deg) scaleY(-1)';
export const CORAL_FLIP = 'rotate(166.6deg) scaleY(-1)';
export const CORAL_D = 'rotate(125.55deg) skewX(-3.4deg) scaleY(-1)';
export const FROG_TRANSFORM = 'rotate(-153.62deg) skewX(-0.76deg) scaleY(-1)';

/** Design px -> length that scales with the section width. */
export const u = (n: number) => `calc(var(--u) * ${n})`;

/**
 * Left offset for a mirrored row. Rows are flipped about the artboard centre,
 * so this keeps the fish where the design puts them.
 */
export const mirroredOffset = (
  artboardWidth: number,
  rowLeft: number,
  rowWidth: number
) => artboardWidth - (rowLeft + rowWidth);
