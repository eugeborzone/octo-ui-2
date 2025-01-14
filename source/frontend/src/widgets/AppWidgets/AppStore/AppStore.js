import React from "react";
import {useAppStoreDataContext, useAppStoreUserContext, useFetchAppStoreData} from "../../../context/data/AppStoreDataProvider";
import AppList from "./AppList";
import AntSidebar from "../../../components/Sidebars/AntSidebar/AntSidebar";
import TradingConfig from "../Configuration/TradingConfig";
import ProfileAvatar from "../Stats/ProfileAvatar";
import {useBotInfoContext} from "../../../context/data/BotInfoProvider";
import "./AppCards/ratingStyle.css"

const hiddenCategories = ["Legacy Strategy"]
export const strategyModeSettingsName = "Strategy Mode Settings"
export const strategyName = "Strategy"
export const strategyModeName = "Strategy Mode"

export default function AppStore() {
    const appStoreData = useAppStoreDataContext();
    const botInfo = useBotInfoContext();
    const appStoreUser = useAppStoreUserContext()
    const isLoggedIn = Boolean(appStoreUser?.token)
    const availableCategories = appStoreData && (Object.keys(appStoreData)?.filter(category => (! hiddenCategories.includes(category))) || [])

    const [selectedCategories, setSelectedCategories] = React.useState(strategyName);
    const _useFetchAppStoreData = useFetchAppStoreData();
    React.useEffect(() => {
        _useFetchAppStoreData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [botInfo, isLoggedIn]);

    const currentStrategy = appStoreData.Strategy ? appStoreData.Strategy?.[Object.keys(appStoreData.Strategy).filter(strategy => (appStoreData.Strategy[strategy].is_selected))?.[0]] : {}
    const content = (<AppList selectedCategories={selectedCategories}
        currentStrategy={currentStrategy}
        setSelectedCategories={setSelectedCategories}
        appStoreData={appStoreData}/>)
    const menuItems = [
        ...(availableCategories?.map(categoryName => {
            if (categoryName === strategyName) {
                return {
                    label: botInfo?.current_profile?.profile?.name,
                    key: categoryName,
                    content: content,
                    icon: (<ProfileAvatar marginRight="5px"/>)
                }
            } else if (categoryName === strategyModeName) {
                return {label: categoryName, key: categoryName, content: content, antIcon: "BranchesOutlined"}
            } else {
                return {label: categoryName, content: content, key: categoryName}
            }
        }) || []), {
            label: strategyModeSettingsName,
            key: strategyModeSettingsName,
            antIcon: "ControlOutlined",
            dontScroll: true,
            noPadding: true,
            content: (<TradingConfig/>)
        },

    ]

    return (<AntSidebar menuItems={menuItems}
        currentlySelectedMenu={selectedCategories}
        setCurrentlySelectedMenu={setSelectedCategories}/>)
}
