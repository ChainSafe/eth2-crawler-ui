/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNodeStats
// ====================================================

export interface GetNodeStats_getNodeStats {
  __typename: "NodeStats";
  totalNodes: number;
  nodeSyncedPercentage: number;
  nodeUnsyncedPercentage: number;
}

export interface GetNodeStats {
  getNodeStats: GetNodeStats_getNodeStats;
}

export interface GetNodeStatsVariables {
  percentage: number;
}