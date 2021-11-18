
export enum NotificationType {
    Success = 'success',
    Error = 'error',
    Info = 'info',
    Warn = 'warn'
  }
  
  export interface NotificationOptions {
    title: string;
    description?: string;
    placement?: Placement;
    duration?: number;
  }
  
  export enum Placement {
    BottomLeft = "bottomLeft",
    BottomCenter = "bottomCenter",
    BottomRight = "bottomRight",
    TopLeft = "topLeft",
    TopCenter = "topCenter",
    TopRight = "topRight",
  }