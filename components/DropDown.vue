<template>
  <div class="dropdown" @click="onTriggerClick" @mouseleave="onTriggerOut">
    <div class="dropdown-trigger">
      <slot />
    </div>
    <transition :name="`dropdown-${placement}`">
      <div v-if="show" :class="['dropdown-overlay', `dropdown-${placement}-overlay`]" @click="onTriggerClick">
        <slot name="overlay" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"

@Component({})
export default class DropDown extends Vue {
  @Prop({ default: 'bottomLeft' }) readonly placement!: string;

  show = false;
  hoverQueue: NodeJS.Timeout | null = null;

  onTriggerClick() {
    if (this.hoverQueue) {
      clearTimeout(this.hoverQueue)
    }

    this.hoverQueue = setTimeout(() => {
      this.show = !this.show;
    }, 200)
  }

  onTriggerOut() {
    if (this.hoverQueue) {
      clearTimeout(this.hoverQueue)
    }

    this.hoverQueue = setTimeout(() => {
      this.show = false;
    }, 200)
  }
}
</script>

<style lang="less">
.dropdown {
  position: relative;

  &-trigger {
    z-index: 1;
    width: 100%;
    // height: 100%;
    max-width: 200px;
    padding: 8px;
    height: 36px;
    font-size: 16px;
    color: #000;
    text-decoration: none;
    border: 1px solid rgba(43, 43, 43, 0.15);
    border-radius: 4px;
    border-collapse: collapse;
  }

  &-trigger::after{
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 5px;
  }

  &-overlay {
    opacity: 1;
    position: absolute;
    margin: 5px 0;
    padding: 8px 0;
    max-width: 200px;
    border: 1px solid rgba(43, 43, 43, 0.15);
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(43, 43, 43, 0.15);
    transition: all 0.1s;
    z-index: 999;

    > div {
      padding: 8px;
    }

    > div:hover {
      cursor: pointer;
      background-color: #f8f9fa;
    }
  }

  &-bottomLeft {
    &-overlay {
      transform: translate(0, 0);
      top: 100%;
      left: 0;
      right: 0;
    }

    &-enter,
    &-leave-active {
      opacity: 0;
      left: 0;
      top: 50%;
      transform: translateX(0);
    }
  }

  &-bottomCenter {
    &-overlay {
      transform: translate(-50%, 0);
      top: 100%;
      left: 50%;
    }

    &-enter,
    &-leave-active {
      opacity: 0;
      left: 50%;
      top: 50%;
      transform: translateX(-50%);
    }
  }

  &-bottomRight {
    &-overlay {
      transform: translate(-100%, 0);
      top: 100%;
      left: 100%;
    }

    &-enter,
    &-leave-active {
      opacity: 0;
      left: 100%;
      top: 50%;
      transform: translateX(-100%);
    }
  }

  .z-menu {
    display: block;
    margin: 0;
    outline: none;
    min-width: 150px;
    padding: 8px 0;
    background-color: var(--dropdown-background);
    text-align: left;

    &-item {
      line-height: 45px;
      padding-left: 16px;
      font-size: 14px;
      margin: 0;
      color: var(--white-color);
      user-select: none;
      transition: 0.3s all;

      a {
        color: inherit;
      }

      &-selected, &:hover {
        color: var(--primary-color);
        background-color: rgba(0, 0, 0, 0.25);

        a {
          color: var(--white-color);
        }
      }
    }
  }
}
</style>
