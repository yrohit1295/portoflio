import mixpanel from "mixpanel-browser";

const token = import.meta.env.VITE_MIXPANEL_TOKEN;

if (token) {
    mixpanel.init(token, { ip: true });
}

export function trackEvent(name, props = {}) {
    if (token) {
        mixpanel.track(name, props);
    }
}

export function trackPageView(page, title) {
    if (token) {
        mixpanel.track("Page View", { page, title });
    }
}
