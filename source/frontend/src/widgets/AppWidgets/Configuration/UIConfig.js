import { useMemo } from "react";
import JsonEditor from "@techfreaque/json-editor-react";
import { getUiConfigSchema } from "./uiConfigSchema";
import defaultJsonEditorSettings from "../../../components/Forms/JsonEditor/JsonEditorDefaults";
import { useSaveUiConfig, useUiConfigContext } from "../../../context/config/UiConfigProvider";
import { useBotInfoContext } from "../../../context/data/BotInfoProvider";
import "./uiConfig.css"

export const availableUIConfigKeys = [
    "backtesting_run_settings", "backtesting_analysis_settings", "live_analysis_settings",
    "optimizer_campaigns_to_load", "optimizer_run_settings", "display_settings", "optimization_campaign"
]

export default function UIConfig({ configKeys }) {
    const uiConfig = useUiConfigContext();
    const botInfo = useBotInfoContext();
    const saveUiConfig = useSaveUiConfig()
    const dataFiles = botInfo?.data_files
    const currentSymbols = botInfo?.symbols
    const availableExchanges = botInfo?.exchange_names

    function handleEditorsAutosave() {
        if (!uiConfig) {
            return;
        }
        const newConfigs = { ...uiConfig }
        configKeys.forEach(configKey => {
            const newConfig = window.$JsonEditors[`uiConf-${configKey}`].getValue()
            const finalNewConfig = convertTimestamps(newConfig, true)
            newConfigs[configKey] = finalNewConfig
        })
        if (newConfigs) saveUiConfig(newConfigs);
    };
    return useMemo(() => (
        <div>
            {botInfo && configKeys.map(configKey => {
                return <JsonEditor
                    {...defaultJsonEditorSettings()}
                    schema={getUiConfigSchema(configKey, dataFiles, currentSymbols, availableExchanges)}
                    startval={convertTimestamps(uiConfig[configKey])}
                    editorName={`uiConf-${configKey}`}
                    onChange={handleEditorsAutosave}
                    disable_collapse={true}
                    key={configKey}
                    // language="es"
                    // languages={{
                    //     es: {
                    //         button_save: "Save",
                    //         button_copy: "Copy",
                    //         button_cancel: "Cancel",
                    //         button_add: "Add",
                    //     }
                    // }}
                />
            })} </div>
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [dataFiles,
        currentSymbols,
        availableExchanges,
    ])

}


function convertTimestamps(config, convertBack = false) {
    const newValues = {}
    config && Object.keys(config).forEach(configOptionKey => {
        if (configOptionKey.includes("timestamp")) {
            newValues[configOptionKey] = convertBack
                ? config[configOptionKey] * 1000
                : config[configOptionKey] / 1000
        } else {
            newValues[configOptionKey] = config[configOptionKey]
        }
    })
    return newValues
}