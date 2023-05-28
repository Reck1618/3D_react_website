import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#808B96',
    button_color: '#566573',
    button_hover_color: '#db6b16',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './Batman-Logo.png',
    fullDecal: './threejs.png',
})

export default state;