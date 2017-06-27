<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// enabling PRC APIs.
Yii::setPathOfAlias('api', realpath(dirname(__FILE__).'/../../api'));

// enabling PRC batch
Yii::setPathOfAlias('batch', realpath(dirname(__FILE__).'/../../batch'));

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
require_once join(DIRECTORY_SEPARATOR, array(
  dirname(__FILE__),
  'conf.d', '_merge_default_configurations_function.php'));

return merge_default_configurations(array(
  'language'=>'en_us',
  'sourceLanguage'=>'en_us',
  'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
  'name'=>'PORTERS HR Business Cloud',
  'defaultController'=>'index',
  // preloading 'log' component
  'preload'=>array('log'),

  // autoloading model and component classes
  'import'=>array(
    'application.models.*',
    'application.models.office.*',
    'application.models.webparts.*',
    'application.components.*',
    'application.components.MainMenuWidget.*',
    'application.components.actions.*',
    'application.components.behaviors.*',
    'application.components.model.*',
    'application.components.modules.*',
    'application.components.InputAgeWidget.*',
    'application.components.InputDateWidget.*',
    'application.components.InputLimitWidget.*',
    'application.components.InputSearchDateWidget.*',
    'application.components.InputHierarchyDropDownWidget.*',
    'application.components.InputHierarchyCheckBoxWidget.*',
    'application.components.InputHierarchyRadioWidget.*',
    'application.components.InputSearchNumberWidget.*',
    'application.components.GridView.*',
    'application.components.StatuLog.*',
    'application.components.Validator.*',
    'application.components.Utils.*',
    'application.controllers.*',
    'application.components.DbAuthManager.*',
    'application.components.GroupBoxWidget.*',
    'application.components.FileUploadWidget.*',
    'application.components.ActionWidget.*',
    'application.components.AsynchronousInfo.*',
    'application.components.Bulk.*',
    'application.components.Log.*',
    ),
  // application components
  'components'=>array(
    'clientScript' => array(
      'class' => 'application.components.ClientScript',
      'packages' => array(
          'jquery' => false,
          'jquery.ui' => false,
          'yii' => false,
          'yiiactiveform' => false,
      ),
    ),
    'mailer' => array(
      'class' => 'application.components.mailer.MyMailer',
      ),
    'statePersister'=>array("class" =>'StatePersister'),
    'cache'=>array(
      'class'=>'application.components.CustomMemCache',
      'useMemcached'=>false,
      'servers'=>array(
        array(
          'host'=>'MEMCACHE_SERVER',
          'port'=>MEMCACHE_PORT,
          'weight'=>100,
        )
      )
      //'class'=>'system.caching.CDummyCache',
      ),
    'user'=>array(
      // enable cookie-based authentication
      'allowAutoLogin'=>false,
      'class'=>'WebUser',
      'loginUrl'=>array('index/login'),
      ),
    // uncomment the following to enable URLs in path-format
    'urlManager'=>array(
      'urlFormat'=>'path',
      'showScriptName'=>false,
      //'caseSensitive'=>false,
      'rules'=>array(
        '<controller:\w+>/<id:\d+>'=>'<controller>/view',
        '<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
        '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
        ),
      ),
    'viewRenderer'=>array(
      'class'=>'CPradoViewRenderer',
      ),
    'errorHandler'=>array(
      // use 'site/error' action to display errors
      'errorAction'=>'index/error',
      ),
    'request'=>array(
      'enableCsrfValidation'=>true,
      'enableCookieValidation'=>true,
      'class' => 'application.components.HttpRequest',
      ),
    'authManager'=>array(
      'class'=>'application.components.DbAuthManager.DbAuthManager',
      'connectionID'=>'db',
      ),
    'session'=>array(
      'class' => 'DbHttpSession',
      'connectionID' => 'office_db',
      'autoCreateSessionTable' => false,
      'sessionTableName' => 'agent_session',
      'timeout' => 10800,
      /*
      'cookieParams' => array(
        'domain' => '.example.com', // cookie now visible on example.com and all subdomains
       ),
       */
      ),
    'log'=>array(
      'class'=>'CLogRouter',
      'routes'=>array(
        array(
          'class'=>'CFileLogRoute',
          'levels'=>'error, warning, trace, info',
          ),
        ),
      ),
    'messages'=>array(
      'class'=>'CustomMessageSource',
      'forceTranslation'=>'true',
      ),
    ),
  // application-level parameters that can be accessed
  // using Yii::app()->params['paramName']
  'params'=>array(
    // this is used in contact page
    'adminEmail'=>'ADMIN_EMAIL',
    'hrbcSalesEmail'=>'SALES_EMAIL',
    'sitePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'../htdocs/site',
    'max_search_count'=>105,
    'pager_list_count'=>5,
    'resource_list_view_count'=>50,
    'EmailHost'=>'EMAIL_HOST',
    'EmailUser'=>'',
    'EmailPassword'=>'',
    'EmailFrom'=>'EMAIL_FROM',
    'EmailFromName'=>'EMAIL_NAME',
    'EmailPort'=>EMAIL_PORT,
    'EmailCharSet'=>'utf-8',
    'EmailEncoding'=>'quoted-printable',
    'EmailReturnPath'=>'EMAIL_RETURN_PATH',
    'salt'=>'plmkoijnbhuygvcftrdxsewazq',
    'free_trial'=>10,
    'JavaPath'  => 'JAVA_PATH',
    'TikaPath'  => 'TIKA_PATH',
    'ZipPath'   => 'ZIP_PATH',
    'fileSavePath' => dirname(__FILE__).DIRECTORY_SEPARATOR.'../../files/',
    'tmpPath' => '/tmp/',
    'NkfPath'   => '/usr/bin/nkf',
    'p_asset_path' => 'JS_BUILD_PATH',
    'webparts_app_id' => '12',
    'ran_app_id' => '1',
    'catch_app_id' => '',
    'mnogosearch_host'         => 'MNOGOSEARCH_HOST',
    'mnogosearch_port'         => 'MNOGOSEARCH_PORT',
    'mnogosearch_index_urn'    => 'MNOGOSEARCH_INDEX',
    'mnogosearch_search_urn'   => 'MNOGOSEARCH_SEARCH',
    'magic_mime_path' => 'MAGIC_MIME_PATH',
    'state_persister_connection_id' => 'office_db',
    'versionFilePath' => dirname(__FILE__).DIRECTORY_SEPARATOR.'../../systeminfo/version.txt',
    'javascript' => 'JS_BUILD_PARAMS',
    'privateapi_protocol' => 'PRIVATEAPI_PROTOCOL',
    'privateapi_host' => 'PRIVATEAPI_HOST',
    'privateapi_uri' => 'PRIVATEAPI_URI',
    'privateapi_port' => 'PRIVATEAPI_PORT',
    'https' => PROTOCOL_HTTPS,
    'customDocumentUrl' => 'CUSTOM_DOCUMENT_URL',
    'user_change_notice_to' => "USER_CHANGED_MAIL_TO",
    'tatUrl' => 'GET_TAT_URL',
  ),
));
