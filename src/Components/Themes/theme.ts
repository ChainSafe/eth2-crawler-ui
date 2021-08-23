/*
Copyright 2021 ChainSafe Systems
SPDX-License-Identifier: LGPL-3.0-only
*/
import { createTheme } from "@chainsafe/common-theme"
import { EcConstants } from "./constants"

export const theme = createTheme<EcConstants>({
  themeConfig: {
    palette: {
      primary: {
        main: "#3552BF",
        hover: "#2E00B0",
        background: "#242e3c",
      },
      background: { default: "#131825" },
      text: {
        primary: "#f6f6f6" 
      }

    },
    constants: {
      ...({
        chartPrimaryColors: {
          main: "#3552BF",
          light: "2E00B0",
          dark: "#000000",
        },
        chartColors: {
          color1: "#0C1D7C",
          color2: "#3349C5",
          color3: "#566BDF",
          color4: "#B7C1FC",
          color5: "#CFD6FC",
        },
        chartSizes: {
          chartBoxHeight: 300,
          chartHeight: 280,
        },
        headerHeight: 50,
      } as EcConstants),
    },
    overrides: {
      Typography: {
        h1: {
          fontSize: 48,
          lineHeight: "58px",
          fontStyle: "normal",
          fontWeight: "normal"
        },
        h2: {
          fontSize: "38.0413px",
          lineHeight: "45px",
          fontStyle: "normal",
          fontWeight: "normal"
        },
        h3: {
          fontSize: "22.3773px",
          lineHeight: "31px",
          fontStyle: "normal",
          fontWeight: "normal"
        },
        h4: {
          fontSize: 20,
          lineHeight: "28px",
          fontStyle: "normal",
          fontWeight: "normal"
        }
      }
    }
  },
})
