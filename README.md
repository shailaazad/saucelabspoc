# saucelabspoc

# Setup

```sh
npm install
SAUCE_CONNECT_DOWNLOAD_ON_INSTALL=true npm install sauce-connect-launcher
npm run sc -- -u <your_username> -k <your_accesskey> -p <proxyhost:port>
SAUCE_USERNAME=<your_username> SAUCE_ACCESSKEY=<your_accesskey> npm run test 
```
Consider adding SAUCE_USERNAME and SAUCE_ACCESSKEY to ~/.bash_profile
