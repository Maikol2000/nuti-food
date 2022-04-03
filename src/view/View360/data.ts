import { shopCenter, shopOutside, shopViewProduct } from "@assets/images";

export const data = {
  scenes: [
    {
      id: "0-outside",
      name: "outside",
      image: shopOutside,
      initialViewParameters: {
        yaw: -0.42887863497380074,
        pitch: 0.057057700712842774,
        fov: 1.403086486818207,
      },
      linkHotspots: {
        mobile: [
          {
            yaw: -0.47,
            pitch: -0.06,
          },
        ],
        desktop: [
          {
            yaw: -0.44,
            pitch: -0.06,
          },
        ],
      },
    },
    {
      id: "1-inside",
      name: "inside",
      image: shopViewProduct,
      initialViewParameters: {
        yaw: -0.6094985873799956,
        pitch: 0.06637465640665141,
        fov: 1.403086486818207,
      },
      linkHotspots: {
        mobile: [
          {
            yaw: -0.68,
            pitch: 0,
          },
          {
            yaw: 2.56,
            pitch: 0.03,
          },
        ],
        desktop: [
          {
            yaw: -0.68,
            pitch: 0,
          },
          {
            yaw: 2.56,
            pitch: 0.03,
          },
        ],
      },
    },
    {
      id: "2-product",
      name: "product",
      image: shopCenter,
      initialViewParameters: {
        yaw: -0.42,
        pitch: 0.05,
        fov: 1.4,
      },
      linkHotspots: {
        mobile: [
          {
            yaw: -0.46,
            pitch: 0.13,
          },
          {
            yaw: 0.11,
            pitch: 0.11,
          },
          {
            yaw: 0.4,
            pitch: 0.08,
          },
          {
            yaw: 0.75,
            pitch: 0.08,
          },
          {
            yaw: 1.71,
            pitch: 0.0,
          },
          {
            yaw: 2.68,
            pitch: 0.03,
          },
          {
            yaw: -2.42,
            pitch: 0.0,
          },
          {
            yaw: -1.63,
            pitch: 0.04,
          },
          {
            yaw: -1.3,
            pitch: 0.07,
          },
        ],
        desktop: [
          {
            yaw: -0.44,
            pitch: 0.13,
          },
          {
            yaw: 0.13,
            pitch: 0.11,
          },
          {
            yaw: 0.42,
            pitch: 0.09,
          },
          {
            yaw: 0.77,
            pitch: 0.09,
          },
          {
            yaw: 1.74,
            pitch: 0.0,
          },
          {
            yaw: 2.68,
            pitch: 0.03,
          },
          {
            yaw: -2.39,
            pitch: 0.0,
          },
          {
            yaw: -1.6,
            pitch: 0.04,
          },
          {
            yaw: -1.26,
            pitch: 0.07,
          },
        ],
      },
    },
  ],
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: false,
    viewControlButtons: false,
  },
};
