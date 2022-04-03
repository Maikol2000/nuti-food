export interface IInitialView {
  yaw: number;
  pitch: number;
  fov: number;
}

export interface ISettingsPano {
  mouseViewMode: string;
  autorotateEnabled?: boolean;
  fullscreenButton?: boolean;
  viewControlButtons?: boolean;
}

export interface Iposition {
  yaw: number;
  pitch: number;
}
