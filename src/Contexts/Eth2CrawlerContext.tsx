import React, { useState, useEffect } from "react"
import { GraphQLClient } from "graphql-request"
import {
  GetClientCounts,
  GetClientCounts_aggregateByAgentName,
} from "../GraphQL/types/GetClientCounts"
import {
  GetOperatingSystems,
  GetOperatingSystems_aggregateByOperatingSystem,
} from "../GraphQL/types/GetOperatingSystems"
import { GetNetworks, GetNetworks_aggregateByNetwork } from "../GraphQL/types/GetNetworks"
import { LOAD_CLIENTS, LOAD_NETWORKS, LOAD_OPERATING_SYSTEMS } from "../GraphQL/Queries"

type Eth2CrawlerContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

interface IEth2CrawlerContext {
  clients: GetClientCounts_aggregateByAgentName[]
  operatingSystems: GetOperatingSystems_aggregateByOperatingSystem[]
  networks: GetNetworks_aggregateByNetwork[]
}

const Eth2CrawlerContext = React.createContext<IEth2CrawlerContext | undefined>(undefined)

const subgraphUrl = process.env.REACT_APP_GRAPHQL_URL || ""
const graphClient = new GraphQLClient(subgraphUrl)

const Eth2CrawlerProvider = ({ children }: Eth2CrawlerContextProps) => {
  const [clients, setClients] = useState<GetClientCounts_aggregateByAgentName[]>([])
  const [operatingSystems, setOperatingSystems] = useState<
    GetOperatingSystems_aggregateByOperatingSystem[]
  >([])
  const [networks, setNetworks] = useState<GetNetworks_aggregateByNetwork[]>([])

  const getInitialData = async () => {
    graphClient.request<GetClientCounts>(LOAD_CLIENTS).then((result) => {
      setClients(result.aggregateByAgentName)
    })
    graphClient.request<GetOperatingSystems>(LOAD_OPERATING_SYSTEMS).then((result) => {
      setOperatingSystems(result.aggregateByOperatingSystem)
    })
    graphClient.request<GetNetworks>(LOAD_NETWORKS).then((result) => {
      setNetworks(result.aggregateByNetwork)
    })
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <Eth2CrawlerContext.Provider
      value={{
        clients,
        operatingSystems,
        networks,
      }}
    >
      {children}
    </Eth2CrawlerContext.Provider>
  )
}

const useEth2CrawlerApi = () => {
  const context = React.useContext(Eth2CrawlerContext)
  if (context === undefined) {
    throw new Error("useEth2CrawlerApi must be used within a Eth2CrawlerProvider")
  }
  return context
}

export { Eth2CrawlerProvider, useEth2CrawlerApi }
