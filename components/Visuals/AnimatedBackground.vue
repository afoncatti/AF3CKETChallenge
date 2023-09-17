<template>
  <div class="background-wrap">
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <radialGradient
          id="Gradient1"
          cx="50%"
          cy="50%"
          fx="0.441602%"
          fy="50%"
          r=".5"
        ><animate attributeName="fx" dur="94s" values="0%;3%;0%" repeatCount="indefinite" /><stop offset="0%" stop-color="rgba(124, 58, 237, 1)" /><stop offset="100%" stop-color="rgba(124, 58, 237, 0)" /></radialGradient>
        <radialGradient
          id="Gradient2"
          cx="50%"
          cy="50%"
          fx="2.68147%"
          fy="50%"
          r=".5"
        ><animate attributeName="fx" dur="63.5s" values="0%;3%;0%" repeatCount="indefinite" /><stop offset="0%" stop-color="rgba(139, 92, 246, 1)" /><stop offset="100%" stop-color="rgba(139, 92, 246, 0)" /></radialGradient>
        <radialGradient
          id="Gradient3"
          cx="50%"
          cy="50%"
          fx="0.836536%"
          fy="50%"
          r=".5"
        ><animate attributeName="fx" dur="61.5s" values="0%;3%;0%" repeatCount="indefinite" /><stop offset="0%" stop-color="rgba(147, 51, 234, 1)" /><stop offset="100%" stop-color="rgba(147, 51, 234, 0)" /></radialGradient>
        <radialGradient
          id="Gradient4"
          cx="50%"
          cy="50%"
          fx="4.56417%"
          fy="50%"
          r=".5"
        ><animate attributeName="fx" dur="63s" values="0%;5%;0%" repeatCount="indefinite" /><stop offset="0%" stop-color="rgba(59, 7, 100, 1)" /><stop offset="100%" stop-color="rgba(59, 7, 100, 0)" /></radialGradient>
        <radialGradient
          id="Gradient5"
          cx="50%"
          cy="50%"
          fx="2.65405%"
          fy="50%"
          r=".5"
        ><animate attributeName="fx" dur="64.5s" values="0%;5%;0%" repeatCount="indefinite" /><stop offset="0%" stop-color="rgba(233, 213, 255, 1)" /><stop offset="100%" stop-color="rgba(233, 213, 255, 0)" /></radialGradient>
        <radialGradient
          id="Gradient6"
          cx="50%"
          cy="50%"
          fx="0.981338%"
          fy="50%"
          r=".5"
        ><animate attributeName="fx" dur="65.5s" values="0%;5%;0%" repeatCount="indefinite" /><stop offset="0%" stop-color="rgba(79, 70, 229, 1)" /><stop offset="100%" stop-color="rgba(79, 70, 229, 0)" /></radialGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
        <animate attributeName="x" dur="60s" values="25%;0%;25%" repeatCount="indefinite" />
        <animate attributeName="y" dur="61s" values="0%;25%;0%" repeatCount="indefinite" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="97s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
        <animate attributeName="x" dur="63s" values="0%;-25%;0%" repeatCount="indefinite" />
        <animate attributeName="y" dur="64s" values="25%;-25%;25%" repeatCount="indefinite" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="98s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="13.744%"
        y="1.18473%"
        width="100%"
        height="100%"
        fill="url(#Gradient1)"
        transform="rotate(334.41 50 50)"
      ><animate attributeName="x" dur="60s" values="25%;0%;25%" repeatCount="indefinite" /><animate attributeName="y" dur="61s" values="0%;25%;0%" repeatCount="indefinite" /><animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="49s"
        repeatCount="indefinite"
      /></rect>
      <rect
        x="-2.17916%"
        y="35.4267%"
        width="100%"
        height="100%"
        fill="url(#Gradient2)"
        transform="rotate(255.072 50 50)"
      ><animate attributeName="x" dur="63s" values="-25%;0%;-25%" repeatCount="indefinite" /><animate attributeName="y" dur="64s" values="0%;50%;0%" repeatCount="indefinite" /><animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="92s"
        repeatCount="indefinite"
      />
      </rect>
      <rect
        x="9.00483%"
        y="14.5733%"
        width="100%"
        height="100%"
        fill="url(#Gradient3)"
        transform="rotate(139.903 50 50)"
      ><animate attributeName="x" dur="65s" values="0%;25%;0%" repeatCount="indefinite" /><animate attributeName="y" dur="92s" values="0%;25%;0%" repeatCount="indefinite" /><animateTransform
        attributeName="transform"
        type="rotate"
        from="360 50 50"
        to="0 50 50"
        dur="47s"
        repeatCount="indefinite"
      />
      </rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBackground'
}
</script>

<style lang="scss" scoped>
.background-wrap {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-color: rgb(46, 16, 101);
  z-index: -1;
}
</style>
