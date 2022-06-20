<template>
  <div :class="$style.root">
    <div
      :class="$style.airplane"
    >
      <div :class="$style.wings">
        <div :class="$style.leftWing">
          <TelegramAirplaneWings />
        </div>
        <div :class="$style.rightWing">
          <TelegramAirplaneWings />
        </div>
      </div>
      <div :class="$style.body">
        <div :class="$style.bodyLeftPart">
          <TelegramAirplaneBottomPart />
        </div>
        <div :class="$style.bodyRightPart">
          <TelegramAirplaneBottomPart />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TelegramAirplaneWings from './assets/telegramAirplaneWings.svg';
import TelegramAirplaneBottomPart from './assets/telegramAirplaneBottomPart.svg';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

$size: 28px;
$bottomPartSize: 10px;

.root {
  width: rem($size);
  height: rem($size);
  perspective: rem(160px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    .airplane {
      transform: rotateX(60deg) rotateZ(30deg) translateY(-56%) translateX(-6%);
    }
  }
}

.airplane {
  transform-style: preserve-3d;
  transform: rotateX(40deg) rotateZ(37deg) translateY(-26%);
  transition: .2s transform;
}

.wings {
  display: flex;
  transform-style: preserve-3d;
}

.leftWing, .rightWing {
  svg {
    stroke: rgb(var(--color-primary-2));
    fill: rgb(var(--color-background));
  }
}

.leftWing {
  width: rem($size / 2);
  height: rem($size);
  overflow: hidden;
  position: relative;
  transform: rotateY(-15deg);
  transform-origin: right;
  svg {
    position: absolute;
    left: 0;
    width: rem($size);
    height: rem($size);
  }
}

.rightWing {
  width: rem($size / 2);
  height: rem($size);
  overflow: hidden;
  position: relative;
  transform: rotateY(15deg);
  transform-origin: left;
  svg {
    position: absolute;
    right: 0;
    width: rem($size);
    height: rem($size);
  }
}

.body {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  width: rem($size);
  height: rem($size);
  transform-style: preserve-3d;
  transform: translateZ(-$bottomPartSize * 0.53) rotateX(-19deg);
}

.bodyLeftPart, .bodyRightPart {
  position: relative;
  width: rem($bottomPartSize);
  overflow: hidden;
}

.bodyLeftPart, .bodyRightPart {
  svg {
    stroke: rgb(var(--color-primary-2));
    fill: rgb(var(--color-background));
  }
}

.bodyLeftPart {
  transform: rotateY(77deg) rotate(19deg) translateX(rem(4.5px));
  transform-origin: right;
  svg {
    position: absolute;
    right: 0;
    width: rem($bottomPartSize);
    height: rem($size);
  }
}

.bodyRightPart {
  transform: rotateY(-77deg) rotate(-19deg) translateX(rem(-4.5px));
  transform-origin: left;
  svg {
    position: absolute;
    left: 0;
    width: rem($bottomPartSize);
    transform: rotateY(180deg);
    height: rem($size);
  }
}
</style>
