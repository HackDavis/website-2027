import type { CSSProperties } from 'react';
import Image from 'next/image';
import styles from './Section5.module.scss';
import { desktopScene } from './desktopScene';
import { mobileScene } from './mobileScene';
import {
  u,
  type Fish,
  type FishRow,
  type Piece,
  type Scene,
} from './sceneTypes';

/** Copies of each row; enough to cover the viewport at every point of the loop. */
const COPIES = 4;

function ScenePiece({ piece, originY }: { piece: Piece; originY: number }) {
  const {
    src,
    fill,
    x,
    y,
    w,
    h,
    inner,
    inset,
    rounded,
    grayscale,
    anim,
    delay,
  } = piece;

  const box: CSSProperties = {
    left: u(x),
    top: u(y - originY),
    width: u(w),
    height: u(h),
    background: fill,
    animationDelay: delay !== undefined ? `${delay}s` : undefined,
  };

  const image = src && (
    <div
      className={`${styles.imgWrap} ${grayscale ? styles.grayscale : ''}`}
      style={inset ? { inset } : undefined}
    >
      <Image src={src} alt="" fill draggable={false} />
    </div>
  );

  const classes = [
    styles.piece,
    inner && styles.center,
    rounded === 'top' && styles.pebble,
    rounded === 'full' && styles.pill,
    anim && styles[anim],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={box}>
      {inner ? (
        <div
          className={styles.inner}
          style={{
            width: u(inner.w),
            height: u(inner.h),
            transform: inner.transform,
          }}
        >
          {image}
        </div>
      ) : (
        image
      )}
    </div>
  );
}

function FishItem({
  fish,
  dims,
  mirrored,
}: {
  fish: Fish;
  dims: Scene['fish'];
  mirrored: boolean;
}) {
  const style = { width: u(dims.w), marginRight: u(dims.gap) };

  if (fish.kind === 'art') {
    return (
      <div className={styles.fish} style={style}>
        <Image src={fish.src} alt="" fill draggable={false} />
      </div>
    );
  }

  return (
    <div className={styles.fish} style={style}>
      <div
        className={styles.fishBody}
        style={{
          inset: `${u(dims.pad)} ${u(dims.pad)} ${u(
            dims.h - dims.pad - dims.bodyH
          )}`,
        }}
      >
        <Image src={fish.body} alt="" fill draggable={false} />
      </div>
      <div
        className={styles.fishLogo}
        style={{
          left: u(fish.logoBox.x),
          top: u(fish.logoBox.y),
          width: u(fish.logoBox.w),
          height: u(fish.logoBox.h),
          // Keep logos readable on mirrored rows.
          transform: mirrored ? 'scaleX(-1)' : undefined,
        }}
      >
        <Image
          src={fish.logo}
          alt=""
          fill
          sizes="(max-width: 760px) 35vw, 240px"
          className={styles.logoImg}
          draggable={false}
        />
      </div>
    </div>
  );
}

function FishCarousel({ row, scene }: { row: FishRow; scene: Scene }) {
  /** One set of fish: the distance the carousel travels per loop. */
  const setW = row.fish.length * (scene.fish.w + scene.fish.gap);

  return (
    <div
      className={`${styles.fishRow} ${row.reversed ? styles.mirrored : ''}`}
      style={{ top: u(row.y - scene.top), height: u(scene.fish.h) }}
    >
      <div className={styles.track} style={{ left: u(row.offset - setW) }}>
        {Array.from({ length: COPIES }, (_, copy) =>
          row.fish.map((fish, i) => (
            <FishItem
              key={`${copy}-${i}`}
              fish={fish}
              dims={scene.fish}
              mirrored={row.reversed}
            />
          ))
        )}
      </div>
    </div>
  );
}

function Stage({ scene, className }: { scene: Scene; className: string }) {
  const { frog } = scene;

  return (
    <div
      className={`${styles.stage} ${className}`}
      style={
        {
          '--artboard': scene.width,
          height: u(scene.height),
        } as CSSProperties
      }
      aria-hidden="true"
    >
      {scene.backdrop.map((p, i) => (
        <ScenePiece key={`bg-${i}`} piece={p} originY={scene.top} />
      ))}
      {scene.floorArt.map((p, i) => (
        <ScenePiece key={`floor-${i}`} piece={p} originY={scene.top} />
      ))}

      {scene.fishRows.map((row) => (
        <FishCarousel key={row.y} row={row} scene={scene} />
      ))}

      <div
        className={`${styles.piece} ${styles.center} ${styles.float}`}
        style={{
          left: u(frog.box.x),
          top: u(frog.box.y - scene.top),
          width: u(frog.box.w),
          height: u(frog.box.h),
        }}
      >
        <div
          className={`${styles.inner} ${styles.frog}`}
          style={{
            width: u(frog.box.inner.w),
            height: u(frog.box.inner.h),
            transform: frog.box.inner.transform,
          }}
        >
          {frog.parts.map((p, i) => (
            <ScenePiece key={`frog-${i}`} piece={p} originY={0} />
          ))}
        </div>
      </div>

      {scene.cliffArt.map((p, i) => (
        <ScenePiece key={`cliff-${i}`} piece={p} originY={scene.top} />
      ))}
    </div>
  );
}

const sponsorNames = Array.from(
  new Set(
    desktopScene.fishRows.flatMap((row) =>
      row.fish.flatMap((f) => (f.name ? [f.name] : []))
    )
  )
);

export default function Section5() {
  return (
    <section
      id="sponsors"
      className={styles.section}
      aria-labelledby="sponsors-heading"
    >
      <h2 id="sponsors-heading" className={styles.srOnly}>
        Sponsors
      </h2>
      <ul className={styles.srOnly}>
        {sponsorNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <Stage scene={desktopScene} className={styles.desktop} />
      <Stage scene={mobileScene} className={styles.mobile} />
    </section>
  );
}
