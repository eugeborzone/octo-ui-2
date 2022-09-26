import { useCallback } from "react";
import createNotification from "../components/Notifications/Notification";
import { backendRoutes } from "../constants/backendConstants";
import { useBotDomainContext } from "../context/config/BotDomainProvider";
import { useFetchPlotData } from "../context/data/BotPlottedElementsProvider";
import fetchAndStoreFromBot, { defaultSuccessNotification, sendAndInterpretBotUpdate } from "./fetchAndStoreFromBot";

export async function fetchBotConfigs(
    useSaveBotConfig,
    botDomain,
    configKeys
) {
    await fetchAndStoreFromBot(
        botDomain + backendRoutes.botConfig + `?config_keys=${configKeys}`,
        useSaveBotConfig
    );
}

export async function fetchStrategyDesignConfig(botDomain, saveStrategyDesignConfig) {
    await fetchAndStoreFromBot(botDomain + backendRoutes.strategyDesignConfig, saveStrategyDesignConfig);
}

export async function saveStrategyDesignConfig(botDomain, newConfig) {
    sendAndInterpretBotUpdate(newConfig, botDomain + backendRoutes.strategyDesignConfig, () => { })
}

export const useSaveTentaclesConfig = () => {
    const _fetchPlotData = useFetchPlotData();
    const botDomain = useBotDomainContext()
    const logic = useCallback((newConfigs,) => {
        JSON.parse(
            JSON.stringify(newConfigs).replace(/ /g, "_")
        )
        const success = (updated_data, update_url, result, msg, status) => {
            _fetchPlotData()
            createNotification(msg)
        }
        sendAndInterpretBotUpdate(newConfigs, botDomain + backendRoutes.updateTentaclesConfig, success)
    }, [_fetchPlotData, botDomain]);
    return logic;
};