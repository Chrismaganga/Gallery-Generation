
import  { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Settings = () => {
  const [imageSettings, setImageSettings] = useState({ brightness: 50, contrast: 50 });
  const [videoSettings, setVideoSettings] = useState({ volume: 50, playbackRate: 1 });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setImageSettings({ ...imageSettings, [name]: value });
  };

  const handleVideoChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setVideoSettings({ ...videoSettings, [name]: value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2>Image Settings</h2>
      <label>
        Brightness:
        <input
          type="range"
          name="brightness"
          min="0"
          max="100"
          value={imageSettings.brightness}
          onChange={handleImageChange}
        />
      </label>
      <label>
        Contrast:
        <input
          type="range"
          name="contrast"
          min="0"
          max="100"
          value={imageSettings.contrast}
          onChange={handleImageChange}
        />
      </label>

      <h2>Video Settings</h2>
      <label>
        Volume:
        <input
          type="range"
          name="volume"
          min="0"
          max="100"
          value={videoSettings.volume}
          onChange={handleVideoChange}
        />
      </label>
      <label>
        Playback Rate:
        <input
          type="range"
          name="playbackRate"
          min="0.5"
          max="2"
          step="0.1"
          value={videoSettings.playbackRate}
          onChange={handleVideoChange}
        />
      </label>

      <Canvas style={{ width: '100%', height: '400px' }}>
        <OrbitControls />
        {/* Add your 3D objects here */}
      </Canvas>
    </div>
  );
};

export default Settings;