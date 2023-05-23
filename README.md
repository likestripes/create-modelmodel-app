oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-modelmodel-app
$ create-modelmodel-app COMMAND
running command...
$ create-modelmodel-app (--version)
create-modelmodel-app/0.0.0 darwin-x64 node-v20.2.0
$ create-modelmodel-app --help [COMMAND]
USAGE
  $ create-modelmodel-app COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`create-modelmodel-app hello PERSON`](#create-modelmodel-app-hello-person)
* [`create-modelmodel-app hello world`](#create-modelmodel-app-hello-world)
* [`create-modelmodel-app help [COMMANDS]`](#create-modelmodel-app-help-commands)
* [`create-modelmodel-app plugins`](#create-modelmodel-app-plugins)
* [`create-modelmodel-app plugins:install PLUGIN...`](#create-modelmodel-app-pluginsinstall-plugin)
* [`create-modelmodel-app plugins:inspect PLUGIN...`](#create-modelmodel-app-pluginsinspect-plugin)
* [`create-modelmodel-app plugins:install PLUGIN...`](#create-modelmodel-app-pluginsinstall-plugin-1)
* [`create-modelmodel-app plugins:link PLUGIN`](#create-modelmodel-app-pluginslink-plugin)
* [`create-modelmodel-app plugins:uninstall PLUGIN...`](#create-modelmodel-app-pluginsuninstall-plugin)
* [`create-modelmodel-app plugins:uninstall PLUGIN...`](#create-modelmodel-app-pluginsuninstall-plugin-1)
* [`create-modelmodel-app plugins:uninstall PLUGIN...`](#create-modelmodel-app-pluginsuninstall-plugin-2)
* [`create-modelmodel-app plugins update`](#create-modelmodel-app-plugins-update)

## `create-modelmodel-app hello PERSON`

Say hello

```
USAGE
  $ create-modelmodel-app hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/likestripes/create-modelmodel-app/blob/v0.0.0/dist/commands/hello/index.ts)_

## `create-modelmodel-app hello world`

Say hello world

```
USAGE
  $ create-modelmodel-app hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ create-modelmodel-app hello world
  hello world! (./src/commands/hello/world.ts)
```

## `create-modelmodel-app help [COMMANDS]`

Display help for create-modelmodel-app.

```
USAGE
  $ create-modelmodel-app help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for create-modelmodel-app.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `create-modelmodel-app plugins`

List installed plugins.

```
USAGE
  $ create-modelmodel-app plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ create-modelmodel-app plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `create-modelmodel-app plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-modelmodel-app plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ create-modelmodel-app plugins add

EXAMPLES
  $ create-modelmodel-app plugins:install myplugin 

  $ create-modelmodel-app plugins:install https://github.com/someuser/someplugin

  $ create-modelmodel-app plugins:install someuser/someplugin
```

## `create-modelmodel-app plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ create-modelmodel-app plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ create-modelmodel-app plugins:inspect myplugin
```

## `create-modelmodel-app plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ create-modelmodel-app plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ create-modelmodel-app plugins add

EXAMPLES
  $ create-modelmodel-app plugins:install myplugin 

  $ create-modelmodel-app plugins:install https://github.com/someuser/someplugin

  $ create-modelmodel-app plugins:install someuser/someplugin
```

## `create-modelmodel-app plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ create-modelmodel-app plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ create-modelmodel-app plugins:link myplugin
```

## `create-modelmodel-app plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-modelmodel-app plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-modelmodel-app plugins unlink
  $ create-modelmodel-app plugins remove
```

## `create-modelmodel-app plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-modelmodel-app plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-modelmodel-app plugins unlink
  $ create-modelmodel-app plugins remove
```

## `create-modelmodel-app plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ create-modelmodel-app plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ create-modelmodel-app plugins unlink
  $ create-modelmodel-app plugins remove
```

## `create-modelmodel-app plugins update`

Update installed plugins.

```
USAGE
  $ create-modelmodel-app plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
