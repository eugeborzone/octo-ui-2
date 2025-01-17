import { faRefresh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Button,
} from "@mui/material"
import {useEffect, useRef} from "react"
import {useState} from "react"
import {cancelOrder, closePosition, getAllOrders, getAllPositions, getAllTrades} from "../../../api/actions"
import DataTableMui from "../../../components/Tables/MuiDataTable"
import {useBotDomainContext} from "../../../context/config/BotDomainProvider"
import {useIsBotOnlineContext} from "../../../context/data/IsBotOnlineProvider"
import {useIsInViewport} from "../../../context/data/ViewPortProvider"

export const dataTableSources = {
    ORDERS: "Open Orders",
    POSITIONS: "Open Positions",
    TRADES: "Trades History"
}

export const dataTableSourcesList = [dataTableSources.ORDERS, dataTableSources.POSITIONS, dataTableSources.TRADES,]

export default function DataTable({dataSource}) {
    const [tableData, setTableData] = useState()
    const [tableColumns, setTableColumns] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const isOnline = useIsBotOnlineContext()
    const botDomain = useBotDomainContext()
    const ref = useRef(null);
    const isInViewport = useIsInViewport(ref);
    useEffect(() => {
        if (dataSource === dataTableSources.ORDERS) {
            setTableColumns(orderTableCols)
        } else if (dataSource === dataTableSources.POSITIONS) {
            setTableColumns(positionsTableCols)
        } else if (dataSource === dataTableSources.TRADES) {
            setTableColumns(tradesTableCols)
        }
    }, [dataSource])
    function reloadTable(){
        handleFetchTableData(dataSource, botDomain, setIsLoading, setTableData);
    }
    
    useEffect(() => {
        if (isInViewport) handleFetchTableData(dataSource, botDomain, setIsLoading, setTableData);
    }, [botDomain, dataSource, isInViewport])
    const actionTitle = dataSource === dataTableSources.ORDERS ? "Cancel" : dataSource === dataTableSources.POSITIONS ? "Close" : undefined
    function onActionClick(row, setIsClosing) {
        const _setIsClosing = (newState) => {
            setIsClosing(newState)
            if (!newState) reloadTable()
        }
        if (dataSource === dataTableSources.ORDERS) {
            cancelOrder(botDomain, row.id, _setIsClosing)
        } else if (dataSource === dataTableSources.POSITIONS) {
            closePosition(botDomain, row.symbol, row.side, _setIsClosing)
        }
    }

    return (
        <div ref={ref}>
            <DataTableMui tableData={tableData}
                tableColumns={tableColumns}
                tableTitle={dataSource}
                onActionClick={onActionClick}
                actionTitle={actionTitle}
                toolbarContent={(<Button
                    disabled={
                    isLoading || ! isOnline
                }
                onClick={
                    () => handleFetchTableData(dataSource, botDomain, setIsLoading, setTableData)
            }>
               <FontAwesomeIcon icon={faRefresh} style={{marginRight: "5px"}} /> Refresh {dataSource}</Button>)}
                />
        </div>
    )
}

function handleFetchTableData(dataSourceName, botDomain, setIsLoading, setTableData) {
    if (dataSourceName === dataTableSources.ORDERS) {
        getAllOrders(botDomain, setIsLoading, setTableData)
    } else if (dataSourceName === dataTableSources.POSITIONS) {
        getAllPositions(botDomain, setIsLoading, setTableData)
    } else if (dataSourceName === dataTableSources.TRADES) {
        getAllTrades(botDomain, setIsLoading, setTableData)
    }
}

const orderTableCols = {
    exchange: {
        title: "Exchange"
    },
    symbol: {
        title: "Symbol"
    },
    type: {
        title: "Type"
    },
    date: {
        title: "Date"
    },
    amount: {
        title: "Amount"
    },
    price: {
        title: "Price"
    },
    cost: {
        title: "Cost"
    },
    market: {
        title: "Market"
    },
    SoR: {
        title: "Exchange Type"
    },
    id: {
        title: "Id"
    },
}

const tradesTableCols = {
    exchange: {
        title: "Exchange"
    },
    symbol: {
        title: "Symbol"
    },
    type: {
        title: "Type"
    },
    date: {
        title: "Date"
    },
    amount: {
        title: "Amount"
    },
    price: {
        title: "Price"
    },
    ref_market_cost: {
        title: "Ref Market Cost"
    },
    cost: {
        title: "Cost"
    },
    market: {
        title: "Market"
    },
    fee_cost: {title: "Fee Cost"},
    fee_currency: {title: "Fee Currency"},
    SoR: {
        title: "Exchange Type"
    },
    id: {
        title: "Id"
    },
}

const positionsTableCols = {
    exchange: {
        title: "Exchange"
    },
    symbol: {
        title: "Symbol"
    },
    side: {
        title: "side"
    },
    amount: {
        title: "Amount"
    },
    entry_price: {
        title: "Entry Price"
    },
    unrealized_pnl: {
        title: "Unrealized PnL"
    },
    value: {
        title: "Value"
    },
    market: {
        title: "Market"
    },
    contract: {
        title: "Contract"
    },
    liquidation_price: {title: "Liquidation Price"},
    SoR: {
        title: "Exchange Type"
    },

}
