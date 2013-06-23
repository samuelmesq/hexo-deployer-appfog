# Appfog deployer for [Hexo]

This plugin help deploy hexo in appfog


## Usage

### Install

```
npm install hexo-deployer-appfog --save
```

### Configure

Edit `_config.yml`. Fill `app` with the name of your application on appfog.

``` yaml
deploy:
  type: appfog
  app: 
```

### Disable

Edit `_config.yml`.
``` yaml
deploy:
  type:
```

### Uninstall

Execute the following command. Don't forget to disable the plugin before uninstalling.

```
npm uninstall hexo-deployer-appfog
```
[Hexo]: http://zespia.tw/hexo