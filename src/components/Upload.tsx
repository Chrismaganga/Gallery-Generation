import React, { useState } from 'react';
import * as THREE from 'three';

    const Upload = () => {
        const [videoFile, setVideoFile] = useState<File | null>(null);
        const [imageFile, setImageFile] = useState<File | null>(null);

        const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files[0]) {
                setVideoFile(event.target.files[0]);
            }
        };

        const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files[0]) {
                setImageFile(event.target.files[0]);
            }
        };

        const render3DScene = () => {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            camera.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
            };

            animate();
        };

        return (
            <div>
                <input type="file" accept="video/*" onChange={handleVideoUpload} />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={render3DScene}>Render 3D Scene</button>
                {videoFile && <video src={URL.createObjectURL(videoFile)} controls />}
                {imageFile && <img src={URL.createObjectURL(imageFile)} alt="Uploaded" />}
            </div>
        );
    };

    export default Upload;
 