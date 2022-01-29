export namespace ADS {
    const START_COMMERCIAL: string;
}
export namespace ANALYTICS {
    const GET_EXTENSION: string;
    const GET_GAME: string;
}
export namespace BITS {
    const GET_LEADERBOARD: string;
    const GET_CHEERMOTES: string;
    const GET_EXTENSION_TRANSACTIONS: string;
}
export namespace CHANNELS {
    const GET_INFORMATION: string;
    const MODIFY_INFORMATION: string;
    const GET_EDITORS: string;
}
export namespace CHANNEL_POINTS {
    const CREATE_CUSTOM_REWARD: string;
    const DELETE_CUSTOM_REWARD: string;
    const GET_CUSTOM_REWARD: string;
    const GET_CUSTOM_REWARD_REDEMPTION: string;
    const UPDATE_CUSTOM_REWARD: string;
    const UPDATE_REDEMPTION_STATUS: string;
}
export namespace CHAT {
    const GET_CHANNEL_EMOTES: string;
    const GET_GLOBAL_EMOTES: string;
    const GET_EMOTE_SETS: string;
    const GET_CHANNEL_BADGES: string;
    const GET_GLOBAL_BADGES: string;
    const GET_SETTINGS: string;
    const UPDATE_SETTINGS: string;
}
export namespace CLIPS {
    const CREATE: string;
    const GET: string;
}
export namespace ENTITLEMENTS {
    const GET_CODE_STATUS: string;
    const GET_DROPS: string;
    const UPDATE_DROPS: string;
    const REDEEM_CODE: string;
}
export namespace EXTENSIONS {
    export const GET_CONFIGURATION_SEGMENT: string;
    export const SET_CONFIGURATION_SEGMENT: string;
    export const SET_REQUIRED_CONFIGURATION: string;
    export const SEND_PUBSUB_MESSAGE: string;
    export const GET_LIVE_CHANNELS: string;
    export const GET_SECRETS: string;
    export const CREATE_SECRET: string;
    export const SEND_CHAT_MESSAGE: string;
    const GET_1: string;
    export { GET_1 as GET };
    export const GET_RELEASED: string;
    export const GET_BITS_PRODUCTS: string;
    export const UPDATE_BITS_PRODUCTS: string;
}
export namespace EVENTSUB {
    const CREATE_SUBSCRIPTION: string;
    const DELETE_SUBSCRIPTION: string;
    const GET_SUBSCRIPTION: string;
    const GET_SUBSCRIPTIONS: string;
}
export namespace GAMES {
    export const GET_TOP: string;
    const GET_2: string;
    export { GET_2 as GET };
}
export namespace GOALS {
    const GET_3: string;
    export { GET_3 as GET };
}
export namespace HYPE_TRAIN {
    const GET_4: string;
    export { GET_4 as GET };
}
export namespace MODERATION {
    const CHECK_AUTOMOD_STATUS: string;
    const MANAGE_HELD_AUTOMOD_MESSAGES: string;
    const GET_AUTOMOD_SETTINGS: string;
    const UPDATE_AUTOMOD_SETTINGS: string;
    const GED_BANNED_EVENTS: string;
    const GET_BANNED_USERS: string;
    const BAN_USER: string;
    const UNBAN_USER: string;
    const GET_BLOCKED_TERMS: string;
    const ADD_BLOCKED_TERM: string;
    const REMOVE_BLOCKED_TERM: string;
    const GET_MODERATORS: string;
    const GET_MODERATOR_EVENTS: string;
}
export namespace POLLS {
    const GET_5: string;
    export { GET_5 as GET };
    const CREATE_1: string;
    export { CREATE_1 as CREATE };
    export const END: string;
}
export namespace PREDICTIONS {
    const GET_6: string;
    export { GET_6 as GET };
    const CREATE_2: string;
    export { CREATE_2 as CREATE };
    const END_1: string;
    export { END_1 as END };
}
export namespace SCHEDULE {
    const GET_7: string;
    export { GET_7 as GET };
    export const GET_ICALENDAR: string;
    export const UPDATE: string;
    export const CREATE_SEGMENT: string;
    export const UPDATE_SEGMENT: string;
    export const DELETE_SEGMENT: string;
}
export namespace SEARCH {
    export const CATEGORIES: string;
    const CHANNELS_1: string;
    export { CHANNELS_1 as CHANNELS };
}
export namespace MUSIC {
    namespace SOUNDTRACK {
        const CURRENT_TRACK: string;
        const PLAYLIST: string;
        const PLAYLISTS: string;
    }
}
export namespace STREAMS {
    export const GET_STREAM_KEY: string;
    const GET_8: string;
    export { GET_8 as GET };
    export const GET_FOLLOWED: string;
    export namespace MARKERS {
        const CREATE_3: string;
        export { CREATE_3 as CREATE };
        const GET_9: string;
        export { GET_9 as GET };
    }
}
export namespace SUBSCRIPTIONS {
    const GET_BROADCASTER_SUBSCRIPTIONS: string;
    const CHECK_USER: string;
}
export namespace TAGS {
    const GET_10: string;
    export { GET_10 as GET };
    export const GET_STREAM: string;
    export const REPLACE: string;
}
export namespace TEAMS {
    export const GET_CHANNEL_TEAMS: string;
    const GET_11: string;
    export { GET_11 as GET };
}
export namespace USERS {
    export namespace GET_12 {
        export const USER: string;
        export const FOLLOWS: string;
        export const BLOCK_LIST: string;
        export namespace EXTENSIONS_1 {
            const ALL: string;
            const ACTIVE: string;
        }
        export { EXTENSIONS_1 as EXTENSIONS };
    }
    export { GET_12 as GET };
    const UPDATE_1: string;
    export { UPDATE_1 as UPDATE };
    export const BLOCK: string;
    export const UNBLOCK: string;
    export const UPDATE_EXTENSIONS: string;
}
export namespace VIDEOS {
    const GET_13: string;
    export { GET_13 as GET };
    export const DELETE: string;
}
