import React from "react"
import NodeMap from "../Modules/Maps/NodeMap"
import NodeDemographicCharts from "../Modules/Charts/NodeDemographics"
import NodeSoftwareStatistics from "../Modules/Charts/NodeSoftwareStatistics"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"

const useStyles = makeStyles(({ constants, breakpoints }: ITheme) => {
  return createStyles({
    root: {
      margin: `${constants.generalUnit * 4}px 0`,
      display: "grid",
      gridRowGap: constants.generalUnit * 2,
      [breakpoints.down("lg")]: {
        margin: `${constants.generalUnit * 4}px ${constants.generalUnit * 2}px`,
      },
    },
    nodeDemographics: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridColumnGap: constants.generalUnit * 2,
      [breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        gridColumnGap: constants.generalUnit * 2,
        gridRowGap: constants.generalUnit * 2,
      },
    },
    nodeMapRoot: {
      height: "50vh",
      width: "100%",
    },
  })
})

function HomePage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.nodeDemographics}>
        <NodeDemographicCharts />
        <NodeMap rootClassName={classes.nodeMapRoot} />
      </div>
      <div>
        <NodeSoftwareStatistics />
      </div>
    </div>
  )
}

export default HomePage
