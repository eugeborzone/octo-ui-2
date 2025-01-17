import {useVisiblePairsContext} from "../../../context/config/VisiblePairProvider";
import {useMemo} from "react";
import {
    Dropdown,
    Tooltip
} from "antd";
import {Trans} from "react-i18next";
import {useVisibleExchangesContext} from "../../../context/config/VisibleExchangesProvider";
import { useBotColorsContext } from "../../../context/config/BotColorsProvider";
import AntButton from "../../../components/Buttons/AntButton";
import AppWidgets from "../../WidgetManagement/RenderAppWidgets";
import { usePairSelectorMenuOpenContext, useUpdatePairSelectorMenuOpenContext } from "../../../context/data/BotExchangeInfoProvider";

export default function PairsSelector({content}) {
    const visiblePairs = useVisiblePairsContext();
    const visibleExchanges = useVisibleExchangesContext();
    const menuIsOpen =usePairSelectorMenuOpenContext()
    const setMenuIsOpen = useUpdatePairSelectorMenuOpenContext()
    return useMemo(() => {
        return (<div style={
            {margin: "auto"}
        }>
            <PairConfiguratorDropdown setMenuIsOpen={setMenuIsOpen}
                menuIsOpen={menuIsOpen?.open}
                content={content}
            >
            <Tooltip key={visiblePairs}
                title={
                    (<Trans i18nKey="pairExchangeSettings.currentPairTooltip"/>)
            }>
                <AntButton selected={true}
                    onClick={
                        () => setMenuIsOpen({open: true, wantsClose: false})
                }
                    buttonVariant="text"
                >
                    <div>
                        <div style={
                            {lineHeight: "16px"}
                        }> {visiblePairs} </div>
                        <div style={
                            {lineHeight: "15px"}
                        }> {visibleExchanges} </div>
                    </div>
                </AntButton>
            </Tooltip>
                </PairConfiguratorDropdown>
        </div>)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [content, menuIsOpen?.open, visibleExchanges, visiblePairs])
}


function PairConfiguratorDropdown({content, setMenuIsOpen, menuIsOpen, children}) {
    return (<Dropdown onOpenChange={(open)=>setMenuIsOpen({open, wantsClose: true})}
        open={menuIsOpen}
        destroyPopupOnHide={true}
        dropdownRender={
            () => {
                return (<PairConfigurator content={content} />)
            }
        }
        selectable={false}
        multiple={true}
        trigger="click"
        placement="bottomRight"
        arrow={
            {pointAtCenter: true}
    }
        >{children}</Dropdown>)
}

function PairConfigurator({content}) {
    const botColors = useBotColorsContext();
    return (<div style={{
        backgroundColor: botColors.background,
        border: `1px solid ${botColors.border}`,
    }}>
       { content && (<AppWidgets layout={content}/>)}
    </div>)
}