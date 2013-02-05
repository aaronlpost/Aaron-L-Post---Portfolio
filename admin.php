<?php
/**
 * Statamic
 * 
 * Statamic is a light-weight and flexible, file-based 
 * publishing engine, build for devs AND clients.
 *
 * @author Jack McDade (jack@statamic.com)
 * @author Mubasher Iqbal (mubs@statamic.com)
 * @copyright 2012 Statamic
 */

##################################################
# To run Statamic above webroot, uncomment the 
# following line. Make sure to update your
# public folder setting in your site config.

# chdir('..');

# #################################################

# Fire up Slim...
require '_app/vendor/Slim/Slim.php';
\Slim\Slim::registerAutoloader();

# Get our stuff cooking...
require '_app/statamic/helper.php';
require '_app/statamic/plugin.php';
require '_app/statamic/statamic.php';
require '_app/statamic/view.php';
require '_app/statamic/validate.php';
require '_app/statamic/auth.php';
require '_app/statamic/fieldset.php';
require '_app/statamic/user.php';
require '_app/statamic/hooks.php';

# Third party bacon starts to sizzle...
require '_app/vendor/Lex/Autoloader.php';
require '_app/vendor/Markup/markdown.php';
require '_app/vendor/Markup/smartypants.php';
require '_app/vendor/Markup/classTextile.php';
require '_app/vendor/Yaml/spyc.php';

# The sultry smoke of initialization rises...
$config = Statamic::load_all_configs();

$config['theme_path'] = Statamic_helper::reduce_double_slashes('/'.$config['_admin_path'].'/'.'themes/'.$config['_admin_theme'].'/');

# The meat hits the skillet...
$admin_app = new \Slim\Slim(array(
  'view'             => new Statamic_View(),
  '_admin_path'      => $config['_admin_path'],
  'theme_path'       => $config['theme_path'],
  'templates.path'   => '.'.$config['theme_path'],
  'cookies.lifetime' => $config['_cookies.lifetime']
));

// Cookies for desert
$admin_app->add(new \Slim\Middleware\SessionCookie(
  array('expires' => $config['_cookies.lifetime'])
));

# Get the config
$admin_app->config = $config;

/////////////////////////////////////////////////////////////////////////////////////////////////
// ENVIRONMENTS
/////////////////////////////////////////////////////////////////////////////////////////////////

$environments = Statamic::get_setting('_environments');

if (is_array($environments)) {
  $environment = Statamic::detect_environment($environments, $admin_app->request()->getUrl());
  if ($environment) {
    $admin_app->config['environment'] = $environment;
    $admin_app->config['is_'.$environment] = true;
    $environment_config = Spyc::YAMLLoad(file_get_contents("_config/environments/{$environment}.yaml"));
    $admin_app->config = array_merge($admin_app->config, $environment_config);
  }
}

# Is the control panel disabled?
if (Statamic::get_setting('_admin_enabled', true) !== TRUE) {
  Statamic_View::set_templates(array_reverse(array("denied")));
  Statamic_View::set_layout("layouts/disabled");
  $admin_app->render(null, array('route' => 'disabled', 'app' => $admin_app));
  exit();
}

Statamic_View::set_layout("layouts/default");

require $config['_admin_path'].'/_routes.php';
require $config['_admin_path'].'/fieldtype.php';
require $config['_admin_path'].'/helper.php';

$admin_app->run(); # Breakfast is served.