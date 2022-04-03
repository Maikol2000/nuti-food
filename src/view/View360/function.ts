import Marzipano from "marzipano";
import { IInitialView, Iposition, ISettingsPano } from "./inteface";

export const createScene = (
  panoViewer: any,
  initialView: IInitialView,
  image: any
) => {
  // Create source.
  const source = Marzipano.ImageUrlSource.fromString(image);

  // Create geometry.
  const geometry = new Marzipano.EquirectGeometry([{ width: 1920 }]);

  // Create view.
  const limiter = Marzipano.RectilinearView.limit.traditional(
    1920,
    (120 * Math.PI) / 180
  );

  const view = new Marzipano.RectilinearView(initialView, limiter);

  // Create scene.
  const scene = panoViewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true,
  });
  return scene;
};

export const createPanoViewer = (panoElm: any, settings: ISettingsPano) => {
  const viewerOpts = {
    controls: {
      mouseViewMode: settings.mouseViewMode,
    },
  };
  const panoViewer = new Marzipano.Viewer(panoElm, viewerOpts);
  return panoViewer;
};

export const createHotSpot = (
  scene: any,
  positions: Iposition[],
  spots: any[]
) => {
  positions.forEach((position: Iposition, index: number) => {
    scene.hotspotContainer().createHotspot(spots[index].current, position);
  });
};
