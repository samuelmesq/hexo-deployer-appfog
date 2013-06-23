var extend = hexo.extend,
  exec = require(hexo.lib_dir + 'util').exec,
  config = hexo.config.deploy;

extend.deployer.register('appfog', function(args, callback){
  if (!config.app){
    console.log('\nYou should configure deployment settings in %s first!\n', '_config.yml'.bold);
    return console.log([
      'Example:',
      '  deploy:',
      '    type: appfog',
      '    app: <app name>',
      '',
      'More info: http://zespia.tw/hexo/docs/deploy.html'
    ].join('\n') + '\n');
  }
  var cmd_string = 'cd public && af update ' + config.app; 

  exec({
    command: cmd_string,
    exit: function(code){
      if (code === 0){
        console.log('Deploy completely.');
      }
    }
  });
});