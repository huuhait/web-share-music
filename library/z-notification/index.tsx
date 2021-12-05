import { NotificationOptions, NotificationType, Placement } from "~/types";
import "vue-tsx-support/enable-check"
import { VNode } from "vue";
import ZEventBus from "../ZEventBus";
import { v4 } from "uuid";
import * as tsx from "vue-tsx-support";
 
const createNotification = (type: NotificationType) => {
  return (options: NotificationOptions) => {
    const key = v4();
 
    if (!options.placement) options.placement = Placement.TopRight;
 
    const App = tsx.componentFactory.create({
      key: key + "-" + options.placement,
      data: function() {
        return {
          closeTimeout: null
        }
      },
      methods: {
        close() {
          clearTimeout(this.$data.closeTimeout);
 
          ZEventBus.emit("z-remove-notification", key + "-" + options.placement)
        }
      },
      render(): VNode {
        var icon_class;
        switch (type) {
          case NotificationType.Success:
            icon_class = 'text-up'
            break;
          case NotificationType.Warn:
            icon_class = 'text-warn'
            break;
          case NotificationType.Error:
            icon_class = 'text-down'
            break;
        }
 
        return (
          <div class={["z-notification", `z-notification-${options.placement}`]}>
            <div class={["z-notification-icon", icon_class]}>
              <i class={`z-icon-${type}`} />
            </div>
            <div class="z-notification-content">
              <div class={["z-notification-title"]}>
                { options.title }
              </div>
              <div class="z-notification-description">
                { options.description }
              </div>
            </div>
            <div class="z-notification-close">
              {/* <i class="z-icon-close" onClick={this.close} /> */}
              <img src="/svg-close-icon-28.jpg"  onClick={this.close} alt="" />
            </div>
          </div>
        )
      },
      mounted() {
        this.$data.closeTimeout = setTimeout(() => {
          this.close();
        }, options.duration || 7500000);
      }
    })
 
    ZEventBus.emit("z-new-notification", App);
  }
}
 
type NotificationApi = { [key in NotificationType]: (options: NotificationOptions) => void } 
 
const lstNotification: NotificationApi = {} as NotificationApi;
 
for (const type in NotificationType) {
  lstNotification[type.toLowerCase() as NotificationType] = createNotification(type.toLowerCase() as NotificationType)
}
 
export default lstNotification;
 
