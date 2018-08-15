# saucelabspoc

# Setup

```sh
npm install
SAUCE_CONNECT_DOWNLOAD_ON_INSTALL=true npm install sauce-connect-launcher
npm run sc -- -u <your_username> -k <your_accesskey> -p <proxyhost:port>
SAUCE_USERNAME=<your_username> SAUCE_ACCESSKEY=<your_accesskey> npm run test 
```
Consider adding SAUCE_USERNAME and SAUCE_ACCESSKEY to ~/.bash_profile

## Connecting to Charles
[Follow instructions here](https://medium.com/@dragan.glumac/automated-tests-with-charles-proxy-7e449eac46ce)

Charles config is stored in `${HOME}/Library/Preferences/com.xk72.charles.config`

```sh
# start charles in headless mode
Charles -headless -config <path-to-your-saved-config-file> &
```
