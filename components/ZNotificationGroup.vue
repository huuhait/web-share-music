<template>
  <div class="z-notification-group">
    <transition-group class="z-notification-group-topRight" 
      name="z-notification-group-topRight" 
      tag="div"
    >
      <template v-for="child in lstNotificationTopRight">
        <component :is="child" :key="child.options.key">
        </component>
      </template>
    </transition-group>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import ZEventBus from "@/library/ZEventBus";
import { Placement } from "@/types";
 
@Component({})
export default class ZNotificationGroup extends Vue {
  childrens: any[] = [];
 
  get lstNotificationTopRight() {
    return this.childrens.filter(child => child.options.key.includes(Placement.TopRight))
  }
 
  mounted() {
    ZEventBus.on("z-new-notification", this.appendNewNotification)
    ZEventBus.on("z-remove-notification", (key: string) => {
      const index = this.childrens.findIndex(child => child.options.key === key)
 
      if (index === -1) return;
      this.childrens.splice(index, 1);
    })
  }
 
  beforeDestroy() {
    ZEventBus.remove("z-new-notification", this.appendNewNotification)
  }
  
  appendNewNotification(notification: any) {
    this.childrens.push(notification);
  }
}
</script>
 
<style lang="less">
.z-notification {
  position: relative;
  display: flex;
  background-color: #f2f2f2;
  padding: 16px 24px;
  margin-bottom: 16px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(140, 162, 214, 0.1);
  
  .text-up {
    color: green;
  }
 
  &-icon {
    margin-right: 12px;
    font-size: 20px;
  }
 
  &-group {
    &-topRight {
      width: 384px;
      position: fixed;
      top: 55px;
      right: 16px;
      opacity: 1;
 
      &-enter-active, &-leave-active {
        transition: all 0.3s;
      }
 
      &-enter, &-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(100%);
      }
    }
  }
 
  &-title {
    display: inline-block;
    padding-right: 24px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
    color: red;
  }
 
  &-description {
    font-size: 14px;
    font-weight: normal;
    color: red;
  }
 
  &-close {
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    right: 14px;
    color: gray;
    transition: all 0.3s;
    img {
      height: 20px;
      width: 20px;
    }
    &:hover {
      color: #4cb6cb;
    }
  }
}
</style>
 