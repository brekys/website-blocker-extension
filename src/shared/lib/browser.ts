export function createTab(url: string) {
    return chrome.tabs.create({url})
}

export type NetRule = chrome.declarativeNetRequest.Rule

export const NetRuleActionType = chrome.declarativeNetRequest.RuleActionType

export const NetRuleResourceType = chrome.declarativeNetRequest.ResourceType

export async function setNetRules(newRules: NetRule[]) {
    const oldRules = await chrome.declarativeNetRequest.getDynamicRules()

    const oldRuleIds = oldRules.map(rule => rule.id)

    await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: oldRuleIds,
        addRules: newRules,
    })
}

export async function setBrowserInterval(name: string, bg: () => void, timeout: number) {
    await chrome.alarms.create(name, {
        delayInMinutes: timeout / (1000 * 60),
        periodInMinutes: timeout / (1000 * 60),
    })

    chrome.alarms.onAlarm.addListener(alarm => {
        if (name === alarm.name) {
            bg()
        }
    })
}

let currentIcon: string = ''

export function setIcon(url: string) {
    if (url !== currentIcon) {
        currentIcon = url

        return chrome.action.setIcon({path: chrome.runtime.getURL(url)})
    }
}
