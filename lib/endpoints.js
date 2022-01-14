module.exports = {
	ADS: {
		START_COMMERCIAL: '/helix/channels/commercial'
	},
	ANALYTICS: {
		GET_EXTENSION: '/helix/analytics/extensions',
		GET_GAME: '/helix/analytics/games'
	},
	BITS: {
		GET_LEADERBOARD: '/helix/bits/leaderboard',
		GET_CHEERMOTES: '/helix/bits/cheermotes',
		GET_EXTENSION_TRANSACTIONS: '/helix/extensions/transactions'
	},
	CHANNELS: {
		GET_INFORMATION: '/helix/channels',
		MODIFY_INFORMATION: '/helix/channels',
		GET_EDITORS: '/helix/channels/editors'
	},
	CHANNEL_POINTS: {
		CREATE_CUSTOM_REWARD: '/helix/channel_points/custom_rewards',
		DELETE_CUSTOM_REWARD: '/helix/channel_points/custom_rewards',
		GET_CUSTOM_REWARD: '/helix/channel_points/custom_rewards',
		GET_CUSTOM_REWARD_REDEMPTION: '/helix/channel_points/custom_rewards/redemptions',
		UPDATE_CUSTOM_REWARD: '/helix/channel_points/custom_rewards',
		UPDATE_REDEMPTION_STATUS: '/helix/channel_points/custom_rewards/redemptions'
	},
	CHAT: {
		GET_CHANNEL_EMOTES: '/helix/chat/emotes',
		GET_GLOBAL_EMOTES: '/helix/chat/emotes/global',
		GET_EMOTE_SETS: '/helix/chat/emotes/set',
		GET_CHANNEL_BADGES: '/helix/chat/badges',
		GET_GLOBAL_BADGES: '/helix/chat/badges/global',
		GET_SETTINGS: '/helix/chat/settings',
		UPDATE_SETTINGS: '/helix/chat/settings'
	},
	CLIPS: {
		CREATE: '/helix/clips',
		GET: '/helix/clips'
	},
	ENTITLEMENTS: {
		GET_CODE_STATUS: '/helix/entitlements/codes',
		GET_DROPS: '/helix/entitlements/drops',
		UPDATE_DROPS: '/helix/entitlements/drops',
		REDEEM_CODE: '/helix/entitlements/codes'
	},
	EXTENSIONS: {
		GET_CONFIGURATION_SEGMENT: '/helix/extensions/configurations',
		SET_CONFIGURATION_SEGMENT: '/helix/extensions/configurations',
		SET_REQUIRED_CONFIGURATION: '/helix/extensions/required_configuration',
		SEND_PUBSUB_MESSAGE: '/helix/extensions/pubsub',
		GET_LIVE_CHANNELS: '/helix/extensions/live',
		GET_SECRETS: '/helix/extensions/jwt/secrets',
		CREATE_SECRET: '/helix/extensions/jwt/secrets',
		SEND_CHAT_MESSAGE: '/helix/extensions/chat',
		GET: '/helix/extensions',
		GET_RELEASED: '/helix/extensions/released',
		GET_BITS_PRODUCTS: '/helix/bits/extensions',
		UPDATE_BITS_PRODUCTS: '/helix/bits/extensions'
	},
	EVENTSUB: {
		CREATE_SUBSCRIPTION: '/helix/eventsub/subscriptions',
		DELETE_SUBSCRIPTION: '/helix/eventsub/subscriptions',
		GET_SUBSCRIPTION: '/helix/eventsub/subscriptions',
		GET_SUBSCRIPTIONS: '/helix/eventsub/subscriptions'
	},
	GAMES: {
		GET_TOP: '/helix/games/top',
		GET: '/helix/games'
	},
	GOALS: {
		GET: '/helix/goals'
	},
	HYPE_TRAIN: {
		GET: '/helix/hypetrain/events'
	},
	MODERATION: {
		CHECK_AUTOMOD_STATUS: '/helix/moderation/enforcements/status',
		MANAGE_HELD_AUTOMOD_MESSAGES: '/helix/moderation/automod/message',
		GET_AUTOMOD_SETTINGS: '/helix/moderation/automod/settings',
		UPDATE_AUTOMOD_SETTINGS: '/helix/moderation/automod/settings',
		GED_BANNED_EVENTS: '/helix/moderation/banned/events',
		GET_BANNED_USERS: '/helix/moderation/banned',
		BAN_USER: '/helix/moderation/bans',
		UNBAN_USER: '/helix/moderation/bans',
		GET_BLOCKED_TERMS: '/helix/moderation/blocked_terms',
		ADD_BLOCKED_TERM: '/helix/moderation/blocked_terms',
		REMOVE_BLOCKED_TERM: '/helix/moderation/blocked_terms',
		GET_MODERATORS: '/helix/moderation/moderators',
		GET_MODERATOR_EVENTS: '/helix/moderation/moderators/events'
	},
	POLLS: {
		GET: '/helix/polls',
		CREATE: '/helix/polls',
		END: '/helix/polls'
	},
	PREDICTIONS: {
		GET: '/helix/predictions',
		CREATE: '/helix/predictions',
		END: '/helix/predictions'
	},
	SCHEDULE: {
		GET: '/helix/schedule',
		GET_ICALENDAR: '/helix/schedule/icalendar',
		UPDATE: '/helix/schedule',
		CREATE_SEGMENT: '/helix/schedule/segment',
		UPDATE_SEGMENT: '/helix/schedule/segment',
		DELETE_SEGMENT: '/helix/schedule/segment'
	},
	SEARCH: {
		CATEGORIES: '/helix/search/categories',
		CHANNELS: '/helix/search/channels'
	},
	MUSIC: {
		SOUNDTRACK: {
			CURRENT_TRACK: '/helix/soundtrack/current_track',
			PLAYLIST: '/helix/soundtrack/playlist',
			PLAYLISTS: '/helix/soundtrack/playlists'
		}
	},
	STREAMS: {
		GET_STREAM_KEY: '/helix/streams/key',
		GET: '/helix/streams',
		GET_FOLLOWED: '/helix/streams/followed',
		MARKERS: {
			CREATE: '/helix/streams/markers',
			GET: '/helix/streams/markers'
		}
	},
	SUBSCRIPTIONS: {
		GET_BROADCASTER_SUBSCRIPTIONS: '/helix/subscriptions',
		CHECK_USER: '/helix/subscriptions/user'
	},
	TAGS: {
		GET: '/helix/tags/streams',
		GET_STREAM: '/helix/streams/tags',
		REPLACE: '/helix/streams/tags'
	},
	TEAMS: {
		GET_CHANNEL_TEAMS: '/helix/teams/channels',
		GET: '/helix/teams'
	},
	USERS: {
		GET: {
			USER: '/helix/users',
			FOLLOWS: '/helix/users/follows',
			BLOCK_LIST: '/helix/users/blocks',
			EXTENSIONS: {
				ALL: '/helix/users/extensions/list',
				ACTIVE: '/helix/users/extensions'
			}
		},
		UPDATE: '/helix/users',
		BLOCK: '/helix/users/blocks',
		UNBLOCK: '/helix/users/blocks',
		UPDATE_EXTENSIONS: '/helix/users/extensions'
	},
	VIDEOS: {
		GET: '/helix/videos',
		DELETE: '/helix/videos'
	}
};
