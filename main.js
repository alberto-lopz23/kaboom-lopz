import kaboom from "./lib/kaboom.mjs"
import { uiManager } from "./utils/UiMAnager.js"
import { load } from "./utils/loaders.js"

// aqui va la magia
kaboom ( {
    width: 1300,
    height: 700,
    letterbox: true
})

load.sounds()
load.fonts()
load.assets()

const scenes = {
    menu: () => {
       uiManager.displayMainMenu()
    },
    controls: () => {
        uiManager.displayControls()
    },
    1: () => {

    },
    2: () => {

    },
    3: () => {

    },
    gameover: () => {

    },
    end: () => {

    }
}

for ( const key in scenes ) {
    scene(key, scenes[key])
}

go("menu")