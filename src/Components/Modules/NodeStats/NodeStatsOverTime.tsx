/*
Copyright 2021 ChainSafe Systems
SPDX-License-Identifier: LGPL-3.0-only
*/
import React, { useMemo } from "react"
import { createStyles, makeStyles, useTheme } from "@chainsafe/common-theme"
import { Typography } from "@chainsafe/common-components"
import { useEth2CrawlerApi } from "../../../Contexts/Eth2CrawlerContext"
import { ECTheme } from "../../Themes/types"
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts"

const useStyles = makeStyles(({ constants, breakpoints }: ECTheme) => {
  return createStyles({
    root: {
      padding: constants.generalUnit * 2,
      width: "inherit",
      height: "inherit",
    },
    chartContainer: {
      height: "40vh",
      width: "100%",
      [breakpoints.down("sm")]: {
        height: "30vh",
      },
    },
    title: {
      marginBottom: constants.generalUnit * 4,
    },
  })
})

const NodeStatusOverTime = () => {
  const classes = useStyles()
  const theme: ECTheme = useTheme()

  const { nodeStatsOverTime } = useEth2CrawlerApi()

  const chartData = useMemo(
    () =>
      nodeStatsOverTime.map((nodeStat) => ({
        time: new Date(nodeStat.time * 1000).toISOString().split("T")[0],
        totalNodes: nodeStat.totalNodes,
        syncedNodes: nodeStat.syncedNodes,
        unsyncedNodes: nodeStat.unsyncedNodes,
      })),
    [nodeStatsOverTime]
  )

  return (
    <div className={classes.root}>
      <Typography component="p" variant="h4" className={classes.title}>
        Node count over time
      </Typography>
      <div className={classes.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={chartData}>
            <XAxis dataKey="time" hide />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line
              type="monotone"
              dataKey="totalNodes"
              stroke={theme.constants.chartColors.color3}
            />
            <Line
              type="monotone"
              dataKey="syncedNodes"
              stroke={theme.constants.chartColors.color2}
            />
            <Line
              type="monotone"
              dataKey="unsyncedNodes"
              stroke={theme.constants.chartColors.color1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default NodeStatusOverTime