import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Globe from "react-globe.gl";
import clouds from "../assets/fair_clouds_4k.png";
import lines from "../assets/lines-blue.png";

import globeImage from "../assets/earth-blue-marble.jpg";
import topology from "../assets/earth-topology.png";
import nightSky from "../assets/night-sky.png";
import water from "../assets/earth-water.png";

interface Label {
  lat: Number;
  lng: Number;
  name: String;
  url: String;
}

const globeMaterial = new THREE.MeshPhongMaterial();
globeMaterial.bumpScale = 10;

new THREE.TextureLoader().load(water, (texture) => {
  globeMaterial.specularMap = texture;
  globeMaterial.specular = new THREE.Color("grey");
  globeMaterial.shininess = 5;
});

export const World = () => {
  const globeEl = useRef<any>();
  const [width, setWidth] = useState((window.innerWidth / 3) * 2);
  const [height, setHeight] = useState(window.innerHeight);

  const shieldRing = { lat: 0, lng: 0 };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth((window.innerWidth / 3) * 2);
      setHeight(window.innerHeight);
    });
  });

  useEffect(() => {
    const globe = globeEl.current as any;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;

    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.008;

    new THREE.TextureLoader().load(clouds, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereBufferGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });

    new THREE.TextureLoader().load(lines, (cloudsTexture) => {
      const lineLayer = new THREE.Mesh(
        new THREE.SphereBufferGeometry(
          globe.getGlobeRadius() * (1 + 0.02),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({
          map: cloudsTexture,
          transparent: true,
          side: THREE.DoubleSide,
        })
      );
      globe.scene().add(lineLayer);

      (function rotateClouds() {
        lineLayer.rotation.y += (-0.05 * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, []);

  return (
    <Globe
      width={width}
      height={height}
      ref={globeEl}
      animateIn={false}
      globeImageUrl={globeImage}
      bumpImageUrl={topology}
      backgroundImageUrl={nightSky}
    />
  );
};
