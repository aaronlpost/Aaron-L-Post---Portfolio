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
require '_app/statamic/auth.php';
require '_app/statamic/user.php';

# Third party bacon starts to sizzle...
require '_app/vendor/Lex/Autoloader.php';
require '_app/vendor/Yaml/spyc.php';

# The sultry smoke of initialization rises...
$config = Statamic::load_all_configs();

$public_path = isset($config['_public_path']) ? $config['_public_path'] : '';

$config['theme_path'] = '_themes/'.$config['_theme']."/";
$config['templates.path'] = Statamic_helper::reduce_double_slashes($public_path.'_themes/'.$config['_theme']."/");
$config['debug'] = $config['_debug'];
$config['view'] = new Statamic_View();

# The meat hits the skillet...
$app = new \Slim\Slim($config);
$app->config = $config;

# Loading the Markup languages
if (Statamic::get_setting('_content_type', false) == 'markdown_edge') {

  # Experimental Markup Features
  # including classes on all headers & attributes on fenced code blocks
  require '_app/vendor/Markup/markdown_edge.php';
} else {
  require '_app/vendor/Markup/markdown.php';
}

require '_app/vendor/Markup/smartypants.php';
require '_app/vendor/Markup/classTextile.php';

Statamic_View::set_layout("layouts/default");
require '_app/_routes.php';

$app->run(); # Breakfast is served.