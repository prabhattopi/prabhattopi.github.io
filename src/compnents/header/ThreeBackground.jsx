import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x7ec8ff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x4db5ff, 1.1, 40);
    pointLight.position.set(0, 0, 8);
    scene.add(pointLight);

    const meshGroup = new THREE.Group();
    scene.add(meshGroup);

    const torusGeometry = new THREE.TorusKnotGeometry(1.8, 0.45, 120, 16);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x4db5ff,
      roughness: 0.2,
      metalness: 0.65,
      emissive: 0x10263f,
      emissiveIntensity: 0.75,
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(0, 0.6, 0);
    meshGroup.add(torusKnot);

    const ringGeometry = new THREE.TorusGeometry(4.4, 0.08, 20, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x8fd6ff,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = 0.9;
    ring.rotation.y = 0.35;
    scene.add(ring);

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 750;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 30;
      starPositions[i + 1] = (Math.random() - 0.5) * 20;
      starPositions[i + 2] = (Math.random() - 0.5) * 24;
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xa7e0ff,
      size: 0.03,
      transparent: true,
      opacity: 0.9,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", onResize);

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      const t = performance.now() * 0.00035;
      torusKnot.rotation.x += 0.004;
      torusKnot.rotation.y += 0.005;
      ring.rotation.z += 0.0016;
      stars.rotation.y += 0.0006;
      meshGroup.position.y = Math.sin(t * 8) * 0.2;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(frameId);
      scene.remove(torusKnot, ring, stars, meshGroup, ambientLight, pointLight);
      torusGeometry.dispose();
      torusMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="header__three-bg" ref={containerRef} aria-hidden="true" />;
};

export default ThreeBackground;
