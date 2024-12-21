// src/lib/constants.tsx

export const APP_NAME = "React Blender App";
export const APP_DESCRIPTION = "An app meant to generate 3D images and videos with advanced frequency.";
export const DEFAULT_CANVAS_WIDTH = 800;
export const DEFAULT_CANVAS_HEIGHT = 600;
export const DEFAULT_BACKGROUND_COLOR = "#ffffff";
export const SUPPORTED_FILE_FORMATS = ["obj", "fbx", "stl", "blend"];
export const MAX_UPLOAD_SIZE_MB = 50;
export const RENDER_QUALITY_OPTIONS = ["Low", "Medium", "High", "Ultra"];
export const DEFAULT_RENDER_QUALITY = "High";
export const ANIMATION_FRAME_RATE = 24;
export const DEFAULT_LIGHT_INTENSITY = 1.0;
export const DEFAULT_CAMERA_POSITION = { x: 0, y: 0, z: 5 };
export const DEFAULT_CAMERA_TARGET = { x: 0, y: 0, z: 0 };
export const API_ENDPOINTS = {
    RENDER: "/api/render",
    UPLOAD: "/api/upload",
    DOWNLOAD: "/api/download",
};
export const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Upload", path: "/upload" },
    { name: "Settings", path: "/settings" },
    { name: "Contacts", path: "/settings" },

];

export const FOOTER_SOCIAL_ITEMS = [
    { name: "Facebook", url: "https://www.facebook.com" },
    { name: "Twitter", url: "https://www.twitter.com" },
    { name: "Instagram", url: "https://www.instagram.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
];


