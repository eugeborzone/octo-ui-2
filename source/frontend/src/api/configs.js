import {backendRoutes, botLayoutKey} from "../constants/backendConstants";
import {defaultBotTemplate} from "../constants/uiTemplate/defaultPages/allPages";
import fetchAndStoreFromBot, {sendAndInterpretBotUpdate} from "./fetchAndStoreFromBot";

export async function fetchBotConfigs(useSaveBotConfig, botDomain, configKeys) {
    await fetchAndStoreFromBot(botDomain + backendRoutes.botConfig + `?config_keys=${configKeys}`, useSaveBotConfig);
}

export async function fetchUIConfig(botDomain, saveUIConfig) {
    const success = (updated_data, update_url, result, msg, status) => {
        if (!msg?.[botLayoutKey]?.isCustom) {
            msg[botLayoutKey] = defaultBotTemplate
        }
        saveUIConfig(msg)
    }
    sendAndInterpretBotUpdate({}, botDomain + backendRoutes.uIConfig, success, undefined, "get")
}

export async function saveUIConfig(botDomain, newConfig, callbackSucces, callbackFail) {
    sendAndInterpretBotUpdate(newConfig, botDomain + backendRoutes.uIConfig, callbackSucces ? callbackSucces : () => {}, callbackFail)
}

export async function fetchProConfig(botDomain, saveProConfig, onFinished) {
    const success = (updated_data, update_url, result, msg, status) => {
        saveProConfig(msg)
        onFinished?.(msg)
    }
    sendAndInterpretBotUpdate({}, botDomain + backendRoutes.proConfig, success, undefined, "get")
}

export async function saveProConfig(botDomain, newConfig, callbackSucces, callbackFail) {
    sendAndInterpretBotUpdate(newConfig, botDomain + backendRoutes.proConfig, callbackSucces ? callbackSucces : () => {}, callbackFail)
}
