import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import Globe from 'react-globe.gl';
import DataPoints from '../../data.json'

interface Label {
    lat: Number;
    lng: Number;
    name : String;
    url: String;
}

const globeMaterial = new THREE.MeshPhongMaterial();
globeMaterial.bumpScale = 10;

new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
    globeMaterial.specularMap = texture;
    globeMaterial.specular = new THREE.Color('grey');
    globeMaterial.shininess = 5;
});


export const World = () => {
    const globeEl = useRef<any>();
    const [width, setWidth] = useState(((window.innerWidth) / 3) * 2);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(((window.innerWidth) / 3) * 2);
            setHeight(window.innerHeight);
        });
    })


    useEffect(() => {
      const globe = globeEl.current as any;

      // Auto-rotate
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.35;

      // Add clouds sphere
      const CLOUDS_IMG_URL = 'https://raw.githubusercontent.com/turban/webgl-earth/master/images/fair_clouds_4k.png';
      const CLOUDS_ALT = 0.004;
      const CLOUDS_ROTATION_SPEED = -0.010;

      new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
        const clouds = new THREE.Mesh(
          new THREE.SphereBufferGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
          new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
        );
        globe.scene().add(clouds);

        (function rotateClouds() {
          clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
          requestAnimationFrame(rotateClouds);
        })();
      });
    }, []);

    return <Globe

        width={width}
        height={height}
      ref={globeEl}
      animateIn={false}

      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    />;
  };