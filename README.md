# eztwitch
 Twitch API CLI/wrapper

 EZ Twitch (or Easy Twitch, eztw for short) is a Twitch API CLI. A usable package will be developed soon.

## What you can do with EZ Twitch
Currently, you can fetch your Twitch API token. To do so, you have to configure EZ Twitch.

First, install the package as CLI:
```
npm i -g @redcrafter07/eztwitch
```

Then configure secret and client id from [your Twitch app console](https://dev.twitch.tv/console/apps)

```
eztwitch config -i <Your Client ID> -s <Your Secret> -a
```

### Config Parameters

```--clear``` or ```-c``` will delete everything inside your config.

```--delete <Config Value>``` or ```-d <Config Value>``` will remove an element from the config.

```--id <ID>``` or ```-i <ID>``` defines your client id.

```--secret``` or ```-s``` sets the secret of your application.

```--show``` will display your config. This has to be the only option provided, the others will be ignored.

```--token``` or ```-t``` saves your token to the config. Please provide with "Bearer" or "OAuth" at the beginning. (no function yet.)

```--token-autogen``` or ```-a``` will automatically generate a token when you fetch a streamer for example if it needs one (this feature will come soon)

If you've set your config parameters you can go ahead and get your token:

```
eztwitch token -c
```

## Token Command Parameters

```--config``` or ```-c``` uses the parameters provided in the config to get your token.

```--debug``` or ```-d``` will log the response no matter what.

```--id``` or ```-i``` sets your client id (not required if you use -c or --config)

```--noInfo``` or ```-n``` directly fetches your token and don't has a fancy console output.

```--secret``` or ```-s``` sets the token (not required if you use -c or --config)