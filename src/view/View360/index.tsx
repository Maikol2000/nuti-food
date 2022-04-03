import React, { useEffect, useRef, useState } from "react";
import { shopCenter, shopOutside, shopViewProduct } from "@assets/images";
import TouchPoint from "@shared/components/TouchPoint";
import { createHotSpot, createPanoViewer, createScene } from "./function";
import { Iposition } from "./inteface";
import { data } from "./data";

const View360 = () => {
  const pano: any = useRef();
  const spotOutside0: any = useRef();

  const spotOutside = [spotOutside0];

  const spotInside0: any = useRef();
  const spotInside1: any = useRef();

  const spotInside = [spotInside0, spotInside1];

  const spotProduct0: any = useRef();
  const spotProduct1: any = useRef();
  const spotProduct2: any = useRef();
  const spotProduct3: any = useRef();
  const spotProduct4: any = useRef();
  const spotProduct5: any = useRef();
  const spotProduct6: any = useRef();
  const spotProduct7: any = useRef();
  const spotProduct8: any = useRef();

  const spotProduct = [
    spotProduct0,
    spotProduct1,
    spotProduct2,
    spotProduct3,
    spotProduct4,
    spotProduct5,
    spotProduct6,
    spotProduct7,
    spotProduct8,
  ];

  const [windowWith, setWindowWith] = useState(window.screen.availWidth);
  const [changeScene, setChangeScene] = useState("outside");

  const handleChangeWindowWith = () => {
    setWindowWith(window.screen.availWidth);
  };

  window.addEventListener("resize", handleChangeWindowWith);

  useEffect(() => {
    const panoViewer = createPanoViewer(pano.current, data.settings);

    const scenes = data.scenes.map((sceneData) => {
      const scene = createScene(
        panoViewer,
        sceneData.initialViewParameters,
        sceneData.image
      );
      let positions: Iposition[];
      let spots!: any[];

      if (sceneData.name === "outside") {
        spots = spotOutside;
      }
      if (sceneData.name === "inside") {
        spots = spotInside;
      }
      if (sceneData.name === "product") {
        spots = spotProduct;
      }

      if (windowWith <= 390) {
        positions = sceneData.linkHotspots.mobile;

        createHotSpot(scene, positions, spots);
      } else {
        positions = sceneData.linkHotspots.desktop;

        createHotSpot(scene, positions, spots);
      }
      return scene;
    });

    switch (changeScene) {
      case "outside":
        scenes[0].switchTo({
          transitionDuration: 1000,
        });
        break;
      case "inside":
        scenes[1].switchTo({
          transitionDuration: 1000,
        });
        break;
      case "product":
        scenes[2].switchTo({
          transitionDuration: 1000,
        });
        break;
      default:
        scenes[0].switchTo({
          transitionDuration: 1000,
        });
    }
  }, [windowWith, changeScene]);
  return (
    <div>
      <div ref={pano} style={{ width: "100%", height: "100%" }}></div>
      <TouchPoint
        ref={spotOutside0}
        type="360"
        onClick={() => {
          setChangeScene("inside");
        }}
      />

      <TouchPoint
        ref={spotInside0}
        type="360"
        onClick={() => {
          setChangeScene("product");
        }}
      />
      <TouchPoint
        ref={spotInside1}
        type="360"
        onClick={() => {
          setChangeScene("outside");
        }}
      />

      <TouchPoint link="/productadult" ref={spotProduct0} type="360" />
      <TouchPoint link="/productfridgefirst" ref={spotProduct1} type="360" />
      <TouchPoint link="/productfridgesecond" ref={spotProduct2} type="360" />
      <TouchPoint link="/productfamilyfirst" ref={spotProduct3} type="360" />
      <TouchPoint link="/productfamilysecond" ref={spotProduct4} type="360" />
      <TouchPoint
        ref={spotProduct5}
        type="360"
        onClick={() => {
          setChangeScene("inside");
        }}
      />
      <TouchPoint link="/producdactri" ref={spotProduct6} type="360" />
      <TouchPoint link="productchild0to6" ref={spotProduct7} type="360" />
      <TouchPoint link="/productchild6to12" ref={spotProduct8} type="360" />
    </div>
  );
};

export default View360;
