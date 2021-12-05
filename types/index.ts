
export interface User {
  uid: string;
  first_name: string;
  last_name: string;
  bio: string;
  email: string;
  state: string;
  role: string;
}

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warn = 'warn'
}

export enum Placement {
  BottomLeft = "bottomLeft",
  BottomCenter = "bottomCenter",
  BottomRight = "bottomRight",
  TopLeft = "topLeft",
  TopCenter = "topCenter",
  TopRight = "topRight",
}
export interface NotificationOptions {
  title: string;
  description?: string;
  placement?: Placement;
  duration?: number;
}
  