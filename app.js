// Copyright (c) 2023 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'
import {responsiveImmersiveComponent} from './components/responsive-immersive'
import {
  portalCameraComponent, tapToPlacePortalComponent,
  promptFlowComponent, spinComponent,
} from './components/portal-components'

AFRAME.registerComponent('portal-camera', portalCameraComponent)
AFRAME.registerComponent('spin', spinComponent)

AFRAME.registerComponent('prompt-flow', promptFlowComponent)
AFRAME.registerComponent('tap-to-place-portal', tapToPlacePortalComponent)

AFRAME.registerComponent('responsive-immersive', responsiveImmersiveComponent)

AFRAME.registerComponent('auto-play-video', {
  schema: {
    video: {type: 'string'},
  },
  init() {
    const v = document.querySelector(this.data.video)
    v.play()
  },
})

import {oneFingerRotateComponent} from './move.js'
AFRAME.registerComponent('movement', oneFingerRotateComponent)
