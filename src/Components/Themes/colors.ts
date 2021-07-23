/*
Copyright 2021 ChainSafe Systems
SPDX-License-Identifier: LGPL-3.0-only
*/
import { IConstants } from "@chainsafe/common-theme"

export interface EcColors extends IConstants {
  chartPrimaryColors: {
    main: string
    light: string
    dark: string
  }
  chartColors: {
    color1: string
    color2: string
    color3: string
    color4: string
    color5: string
  }
}