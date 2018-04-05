export const WRITE_UPDATE_ACTIVE_NAV = "WRITE_UPDATE_ACTIVE_NAV";

export function writeUpdateActiveNav(activeNav) {
    return {
        type: WRITE_UPDATE_ACTIVE_NAV,
        activeNav: activeNav
    };
}