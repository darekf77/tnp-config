/**
 * Dariusz Filipiak
 * @author darekf77@gmail.com
 * Recommended config for all isomorphic libs *
 */
//#region @backend
declare const global: any;
import { path, fse, os, child_process, crossPlatformPath } from 'tnp-core';

if (global && !global['ENV']) {
  global['ENV'] = {};
}
//#endregion

import { frameworkName } from 'tnp-core';

export { CoreHelpers as Helpers } from 'tnp-core';
import { Helpers } from 'tnp-core';

//#region config models

export namespace ConfigModels {
  export type EnvironmentName = 'local' | 'static' | 'dev' | 'stage' | 'prod' | 'online' | 'test' | 'qa' | 'custom';
  export type UIFramework = 'bootstrap' | 'material' | 'ionic';
  export type FrameworkVersion = 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'v8' | 'v9';
  export type CutableFileExt = 'scss' | 'css' | 'sass' | 'html' | 'ts';
  export type ImageFileExtension = 'jpg' | 'jpeg' | 'png' | 'svg';
  export type FileExtension = 'ts' | 'js' | 'json' | 'html' | ImageFileExtension | 'txt' | CutableFileExt;


  export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'jsonp';
  export type ParamType = 'Path' | 'Query' | 'Cookie' | 'Header' | 'Body';
  export type TsUsage = 'import' | 'export';

  export type LibType = 'unknow'
    | 'isomorphic-lib'
    | 'angular-lib' // https://cli.angular.io/
    | 'electron-client' // https://github.com/maximegris/angular-electron
    | 'ionic-lib'
    | 'angular-client'
    | 'ionic-client'
    | 'workspace'
    | 'container'
    | 'docker'
    | 'vscode-ext'
    | 'chrome-ext'
    | 'unknow-npm-project'
    | 'scenario'
    | 'navi'
    | 'leaf'
    | 'game-engine-lib-pixi' // https://github.com/pixijs/pixi.js
    | 'game-engine-lib-phaser' // https://github.com/photonstorm/phaser
    | 'game-engine-lib-excalibur' // https://github.com/excaliburjs/Excalibur
    | 'game-engine-lib-babylon' // https://github.com/BabylonJS/Babylon.js
    ;

  export type NewFactoryType = LibType | 'model' | 'single-file-project';
  export type CoreLibCategory = LibType | 'common';
  export interface Position {
    x: number;
    y: number;
  }

  export interface Size {
    w: number;
    h: number;
  }


  export interface GlobalNpmDependency {
    name: string; installName?: string; version?: string | number;
  }

  export interface GlobalCommandLineProgramDependency {
    name: string; website: string; version?: string;
  }
  export interface GlobalDependencies {
    npm?: GlobalNpmDependency[];
    programs?: GlobalCommandLineProgramDependency[];
  }

  export type FileEvent = 'created' | 'changed' | 'removed' | 'rename';
  export type OutFolder = 'dist' | 'bundle' | 'browser';
  export type DatabaseType = 'better-sqlite3' | 'mysql';

}


export const GlobalLibTypeName = {
  //#region @backend
  isomorphicLib: 'isomorphic-lib',
  angularLib: 'angular-lib',
  electronClient: 'electron-client',
  ionicLib: 'ionic-lib',
  angularClient: 'angular-client',
  ionicClient: 'ionic-client',
  workspace: 'workspace',
  container: 'container',
  docker: 'docker',
  unknowNpmProject: 'unknow-npm-project',
  vscodeExt: 'vscode-ext',
  chromeExt: 'chrome-ext',
  singleFileProject: 'single-file-project',
  navi: 'navi',
  scenario: 'scenario',
  //#endregion
};

export const LibTypeArr: ConfigModels.LibType[] = [
  //#region @backend
  GlobalLibTypeName.angularLib,
  GlobalLibTypeName.isomorphicLib,
  GlobalLibTypeName.angularClient,
  GlobalLibTypeName.ionicClient,
  GlobalLibTypeName.electronClient,
  GlobalLibTypeName.workspace,
  GlobalLibTypeName.container,
  GlobalLibTypeName.docker,
  GlobalLibTypeName.unknowNpmProject,
  GlobalLibTypeName.vscodeExt,
  GlobalLibTypeName.chromeExt,
  GlobalLibTypeName.navi,
  GlobalLibTypeName.scenario,
  //#endregion
] as ConfigModels.LibType[];


export const CoreLibCategoryArr: ConfigModels.CoreLibCategory[] = [ // TODO this is for what ?
  //#region @backend
  GlobalLibTypeName.angularLib,
  GlobalLibTypeName.isomorphicLib,
  GlobalLibTypeName.angularClient,
  GlobalLibTypeName.electronClient,
  GlobalLibTypeName.ionicClient,
  GlobalLibTypeName.docker,
  'common'
  //#endregion
] as ConfigModels.CoreLibCategory[];

//#endregion

const allowedEnvironments: ConfigModels.EnvironmentName[] = [
  //#region @backend
  'static', 'dev', 'prod', 'stage', 'online', 'test', 'qa', 'custom'
  //#endregion
];

const allowedEnvironmentsObj = {};
allowedEnvironments.forEach(s => {
  // @ts-ignore
  allowedEnvironmentsObj[s] = s;
});

const firedev = 'firedev';
const morphi = 'morphi';
//#region @backend
const morphiPathUserInUserDir = path.join(crossPlatformPath(os.homedir()), '.firedev', morphi);
//#endregion
const urlMorphi = 'https://github.com/darekf77/morphi.git';

const filesNotAllowedToClean = {
  //#region @backend
  _gitignore: '.gitignore',
  _npmrc: '.npmrc',
  _npmignore: '.npmignore',
  tslint_json: 'tslint.json',
  _editorconfig: '.editorconfig',
  _angularCli_json: '.angular-cli.json',
  _vscode_launch_json: '.vscode/launch.json',
  //#endregion
};

const file = {

  _bowerrc: '.bowerrc',
  bower_json: 'bower.json',
  controllers_ts: 'controllers.ts',
  entities_ts: 'entities.ts',
  angular_json: 'angular.json',
  autob_actions_js: 'auto-actions.js',
  local_config_js: 'local-config.js',
  build_config_js: 'build-config.js',
  local_config: 'local-config',
  start_backend_ts: 'start.backend.ts',
  package_json: 'package.json',
  result_packages_json: 'result-packages.json',
  package_json5: 'package.json5',
  package_json__tnp_json: 'package.json_tnp.json',
  package_json__tnp_json5: 'package.json_tnp.json5',
  package_json__devDependencies_json: 'package.json_devDependencies.json',
  yarn_lock: 'yarn.lock',
  package_lock_json: 'package-lock.json',
  tnpEnvironment_json: 'tmp-environment.json',
  environment: 'environment',
  environment_js: 'environment.js',
  tmp_transaction_pid_txt: 'tmp-transaction-pid.txt',
  manifest_webmanifest: 'manifest.webmanifest',
  public_api_d_ts: 'public-api.d.ts',
  public_api_ts: 'public-api.ts',
  public_api: 'public-api',
  _babelrc: '.babelrc',
  index: 'index',
  index_d_ts: 'index.d.ts',
  index_ts: 'index.ts',
  index_js: 'index.js',
  index_js_map: 'index.js.map',
  db_json: 'db.json',
  db_for_tests_json: 'db-for-tests.json',
  tmpDockerImageId: 'tmp-docker-image-id',
  tmp_recent_json: 'recent.json',
  tmpIsomorphicPackagesJson: 'tmp-isomorphic-packages.json',
  tsconfig_json: 'tsconfig.json',
  README_MD: 'README.md',
  server_key: 'server.key',
  server_cert: 'server.cert',
  server_chain_cert: 'server-chain.cert',
  meta_config_md: 'meta-content.md',
  logo_png: 'logo.png',
  logo_svg: 'logo.svg',
  ...filesNotAllowedToClean

};

const packageJsonSplit = [
  //#region @backend
  file.package_json__tnp_json,
  file.package_json__tnp_json5,
  file.package_json__devDependencies_json,
  //#endregion
];

const tempFolders = { // DO NOT PUT ANYTHING SUPID HERE!!!

  bundle: 'bundle',
  vendor: 'vendor',
  docs: 'docs',
  dist: 'dist',
  tmp: 'tmp',
  tmpBundleRelease: 'tmp-bundle-release',
  tempSrc: 'tmp-src',
  tempSrcDist: 'tmp-src-dist',
  previewDistApp: 'dist-app',
  preview: 'preview',
  browser: 'browser',
  websql: 'websql',
  _browser: '.browser',
  module: 'module',
  backup: 'backup',
  node_modules: 'node_modules',
  client: 'client',
  tnp_tests_context: 'tmp-tests-context',
  tmpPackage: 'tmp-package',
  tmpScenarios: 'tmp-scenarios',
  tmpTestsEnvironments: 'tmp-tests-environments',
  testsEnvironments: 'tests-environments',

};

const stylesFilesExtension = [
  //#region @backend
  'css',
  'sass',
  'scss',
  'less',
  //#endregion
];

const folder = {

  scripts: 'scripts',
  scenarios: 'scenarios',
  bower: 'bower',
  src: 'src',
  out: 'out',
  app: 'app',
  lib: 'lib',
  libs: 'libs',
  source: 'source',
  custom: 'custom',
  components: 'components',
  assets: 'assets',
  generated: 'generated',
  apps: 'apps',
  shared: 'shared',
  // entities: 'entities',
  // controllers: 'controllers',
  // projects: 'projects',
  workspace: 'workspace',
  container: 'container',
  bin: 'bin',
  _bin: '.bin',
  _vscode: '.vscode',
  project: 'project',
  external: 'external',
  tmpDist: 'tmp-dist',
  tmpFor(d: ConfigModels.OutFolder) {
    return `tmp-src-${d}`;
  },
  targetProjects: {
    DEFAULT_PATH_GENERATED: 'tmp-target-projects/generated',
    DEFAULT_PATH_ORIGINS: 'tmp-target-projects/origins',
  },
  ...tempFolders

};

// @LAST RESOLVE TNP LOCATION !!! for each context and RELEASE TNP-CONFIG
let dirnameForTnp: string;
//#region @backend
dirnameForTnp = crossPlatformPath(path.resolve(__dirname, '..'));
//#endregion
const firedevProjectsRelative = `../morphi/projects`;

//#region @backend

if (process.platform === 'win32' && dirnameForTnp.endsWith('dist')) { // TODO QUICK_FIX for windows
  dirnameForTnp = crossPlatformPath(path.dirname(dirnameForTnp));
}

if (dirnameForTnp.endsWith(`/tnp-config/dist`)) {
  // local folder with tnp
  dirnameForTnp = dirnameForTnp.replace(`/tnp-config/dist`, '/tnp');
} else if (dirnameForTnp.endsWith(`/tnp/node_modules/tnp-config`)) {
  // local folder with tnp
  dirnameForTnp = dirnameForTnp.replace(`/tnp/node_modules/tnp-config`, '/tnp');
} else {
  // global tnp node_modules being use in firedev case
  dirnameForTnp = dirnameForTnp.replace(/\/tnp\-config$/, '/tnp');
}
global.dirnameForFiredev = dirnameForTnp;
// console.log('dirnameForTnp after', dirnameForTnp)
// process.exit(0)

if (path.basename(dirnameForTnp) === 'node_modules') {
  dirnameForTnp = crossPlatformPath(path.join(dirnameForTnp, 'tnp'))
}

// TOD0
// console.log(`[firedev-config] dirnameForTnp : ${dirnameForTnp}`);
// process.exit(0)
//#endregion

//#region @backend
function pathResolved(...partOfPath: string[]) {
  // console.log('pathResolved', partOfPath);

  if (global['frameworkName'] && global['frameworkName'] === firedev) {
    const joined = partOfPath.join('/');
    const projectsInUserFolder = crossPlatformPath(path.join(
      crossPlatformPath(os.homedir()),
      '.firedev',
      morphi,
      'projects',
    ));
    let pathResult = joined.replace(
      (dirnameForTnp + '/' + firedevProjectsRelative),
      projectsInUserFolder,
    );

    pathResult = crossPlatformPath(path.resolve(pathResult));

    if (pathResolved.prototype.resolved) {
      // console.info(`Firedev base projects in are ok.`);
    } else {

      const morhiVscode = path.join(path.dirname(morphiPathUserInUserDir), 'morphi/.vscode');

      if (!fse.existsSync(morphiPathUserInUserDir) && !global.skipCoreCheck) {
        if (!fse.existsSync(path.dirname(morphiPathUserInUserDir))) {
          fse.mkdirpSync(path.dirname(morphiPathUserInUserDir));
        }

        try {
          child_process.execSync(`${frameworkName} env:install --skipCoreCheck`, { stdio: [0, 1, 2] })
        } catch (error) {
          Helpers.error(`[${frameworkName}][config] Not able to install local global environment`, false, true);
        }

        try {
          child_process.execSync(`git clone ${urlMorphi}`, {
            cwd: path.dirname(morphiPathUserInUserDir),
            stdio: [0, 1, 2],
          });
          Helpers.remove(morhiVscode);
        } catch (error) {
          Helpers.error(`[${frameworkName}][config] Not able to clone repository: ${urlMorphi} in:
           ${morphiPathUserInUserDir}`, false, true);
        }

        try {
          child_process.execSync(`${frameworkName} init:core --skipCoreCheck`, {
            stdio: [0, 1, 2]
          });
        } catch (error) {
          Helpers.error(`[${frameworkName}][config] Not able init core project`, false, true);
        }
      }

      pathResolved.prototype.resolved = true;
    }
    return pathResult;
  }
  return crossPlatformPath(path.resolve(path.join(...partOfPath)));
}
//#endregion

const moduleNameAngularLib = [
  //#region @backend
  folder.components,
  folder.module,
  folder.dist,
  folder.browser,
  //#endregion
];

const moduleNameIsomorphicLib = [
  //#region @backend
  folder.src,
  folder.dist,
  folder.browser,
  //#endregion
];

const argsReplacementsBuild = {
  //#region @backend
  // SHORTCUTS
  'ba': 'build:app',
  'baw': 'build:app:watch',

  'bw': 'build:watch',
  's': 'start',
  'sw': 'start:watch',


  // buid dist watch with automatic container/previewProjects popuilation
  // 'bap': 'build:app:prod',
  // 'bapw': 'build:app:prod:watch',

  // (dist)app build for normal development - watch is ng serve
  'bda': 'build:dist:app',
  'bdap': 'build:dist:app:prod',
  // 'bdaw': 'build:dist:app:watch',

  // (dist)app build for normal development (PRODUCTION MINIFIED CODE)
  // 'badpw': 'build:app:dist:prod:watch',
  // 'badp': 'build:app:dist:prod',

  // (dist)lib build - watch is ng build
  'bd': 'build:dist',
  'bdw': 'build:dist:watch',
  // (dist)lib build - watch is ng build (PRODUCTION MINIFIED CODE)
  // 'bdp': 'build:dist:prod',
  // 'bdpw': 'build:dist:prod:watch',

  // (bundle)app build for static code (firedev plugins, project final code, etc.)
  'bba': 'build:bundle:app',
  'bbap': 'build:bundle:app:prod',
  // 'bbaw': 'build:bundle:app:watch',
  // (bunle)lib build for static code (firedev plugins, project final code, etc.)
  'bb': 'build:bundle',
  'bbw': 'build:bundle:watch',
  // (bunle)lib build for static code with ng build (PRODUCTION MINIFIED CODE)
  // 'bbp': 'build:bundle:prod',
  // 'bbpw': 'build:bundle:prod:watch',

  // 'sb': 'static:build',
  // 'sbp': 'static:build:prod',
  // 'sbd': 'static:build:dist',
  // 'sbl': 'static:build:lib',
  // 'sba': 'static:build:app',
  // 'cb': 'clean:build'
  //#endregion
};

const argsReplacementsOther = {
  //#region @backend
  // github docs
  'ghpush': 'githubpush',
  'ghpull': 'githubpull',
  // last
  'l': 'last',
  'sl': 'show:last',
  'lb': 'last:build',
  // install
  'i': 'install',
  'si': 'sinstall',
  'il': 'install:locally',
  'rc': 'recommit',
  // release
  'rp': 'release:prod',
  'r': 'release',
  'rmajor': 'release:major',
  'rminor': 'release:minor',
  'r:major': 'release:major',
  'r:minor': 'release:minor',
  // 'ra': 'release:all',
  'ar': 'auto:release',
  'ard': 'auto:release:docs',

  're': 'reinstall',
  // versopm
  '--version': 'version',
  '-v': 'version',
  // open
  'occ': 'open:core:container',
  'ocp': 'open:core:project',
  'o': 'open',
  // test
  'twd': 'test:watch:debug',
  'tdw': 'test:watch:debug',
  'tw': 'test:watch',
  'td': 'test:debug',
  't': 'test',
  // git push
  'pt': 'push:tag',
  'p': 'push',
  'pa': 'pushalll',
  // other
  'sj': 'select:java',
  'scm': 'showcoremodules',
  'tpu': 'target:proj:update',
  'ugd': 'update:global:deps',
  'ud': 'update:deps', // same as npm i
  'dgl': 'detect:global:libs',
  'pr': 'print:relatives',
  'c': 'container',
  'au': 'autoupdate',
  'up': 'update',
  'rev': 'revert',
  'rw': 'revert',

  //#endregion
};

const areTrustedForPatchUpdate = [
  //#region @backend
  '@angular',
  '@ngrx',
  'rxjs',
  'zone.js',
  'tslib',
  'typescript',
  'webpack'
  //#endregion
];

const activeFramewrokVersions = ['v4'] as ConfigModels.FrameworkVersion[];

export const config = {
  packagesThat: {
    areTrustedForPatchUpdate,
  },
  //#region @backend
  get dbLocation() {
    let dbFileName = config.file.db_json;
    if (global.testMode) {
      dbFileName = config.file.db_for_tests_json;
    }
    const location = crossPlatformPath(path.join(crossPlatformPath(os.homedir()), `.${frameworkName}`, dbFileName));
    return location;
  },

  //#endregion

  quickFixes: {
    //#region @backend
    missingLibs: []
    //#endregion
  },
  packageJsonSplit,
  regexString: {
    pathPartStringRegex: `(\/([a-zA-Z0-9]|\\-|\\_|\\+|\\.)*)`
  },
  placeholders: {
    forProjectsInEnvironmentFile: '//<PLACEHOLDER_FOR_PROJECTS>'
  },
  array: {
    isomorphicPackages: 'isomorphicPackages'
  },
  defaultFrameworkVersion: 'v4' as ConfigModels.FrameworkVersion,
  activeFramewrokVersions,
  coreProjectVersions: ['v1', ...activeFramewrokVersions],
  CONST: {
    //#region @backend
    UNIT_TEST_TIMEOUT: 30000,
    INTEGRATION_TEST: 30000,
    BACKEND_HTTP_REQUEST_TIMEOUT: 3000,
    //#endregion
  },
  debug: {
    //#region @backend
    sourceModifier: [

    ],
    baselineSiteJoin: {
      DEBUG_PATHES: [
        // "src/apps/auth/AuthController.ts",
        // '/src/app/+preview-components/preview-components.component.ts',
        // '/src/controllers.ts',
        // '/src/app/+preview-components/components/+preview-buildtnpprocess/preview-buildtnpprocess.component.ts'
      ],
      DEBUG_MERGE_PATHES: [
        // "src/apps/auth/AuthController.ts",
        // '/src/app/+preview-components/components/+preview-buildtnpprocess/preview-buildtnpprocess.component.ts'
        // '/components/formly/base-components/editor/editor-wrapper.component.ts'
        // '/src/app/+preview-components/components/+preview-buildtnpprocess/preview-buildtnpprocess.component.ts'
      ]
    }
    //#endregion
  },
  frameworkName,
  frameworkNames: {
    tnp: 'tnp',
    firedev: 'firedev'
  },
  startPort: 6001,
  frameworks: ['bootstrap', 'ionic', 'material'] as ConfigModels.UIFramework[],
  //#region @backend
  tempFiles: {
    FILE_NAME_ISOMORPHIC_PACKAGES: 'tmp-isomorphic-packages.json'
  },
  OVERRIDE_FROM_TNP: [ // TODO put in config ?
    'scripts',
    'description',
    'license',
    'private',
    'author',
    'homepage',
    'main',
    'engines',
    'categories',
    'keywords',
    'activationEvents',
  ],
  morphiPathUserInUserDir,
  urlMorphi,
  argsReplacementsBuild,
  argsGlobalFlags: [ // TODO do I need this ?
    '-verbose',
    '-firedev',
    '-reinitDb',
    '-restartWorker',
    '-useWorker',
    '-dist',
    '-bundle',
  ],
  argsReplacements: {
    ...argsReplacementsBuild,
    ...argsReplacementsOther,
  },
  coreBuildFrameworkNames: [
    'tnp',
    'tnp-ins',
    'tnp-debug',
    'firedev',
    'firedev-debug',
    'firedev-ins',
    'morphi',
    'morphi-debug',
    'morphi-ins',
  ],
  ports: {
    // VPN_SPLIT_CLIENT: 5656,
    VPN_SPLIT_SERVER: 5757,
  },
  domains: {
    localhost: 'localhost',
    firedev_io: 'firedev.io',
  },
  pathes: {

    logoSvg: 'logo.svg',
    logoPng: 'logo.png',

    /**
     * Location of compiled source code for tnp framework
     * Can be in 3 places:
     * - <..>/tnp/dist @DEPRACATED
     * - <..>/tnp/bundle @DEPRACATED
     * - <some-project>/node_modules/tnp @DEPRACATED
     *  - <some-project>/node_modules/tnp-config
    */
    tnp_folder_location: dirnameForTnp,
    tnp_vscode_ext_location: pathResolved(dirnameForTnp, firedevProjectsRelative, 'plugins', 'tnp-vscode-ext'),

    tnp_tests_context: pathResolved(dirnameForTnp, folder.tnp_tests_context),
    tnp_db_for_tests_json: pathResolved(dirnameForTnp, folder.bin, file.db_for_tests_json),

    scripts: {
      HELP_js: pathResolved(dirnameForTnp, folder.scripts, 'HELP.js'),
      allHelpFiles: path.join(dirnameForTnp, folder.scripts, '/**/*.js'),
      allPattern: path.join(dirnameForTnp, `/${folder.scripts}/**/*.js`),
    },

    projectsExamples: (version?: ConfigModels.FrameworkVersion) => {
      version = (!version || version === 'v1') ? '' : `-${version}` as any;
      const result = {
        workspace: pathResolved(dirnameForTnp, `${firedevProjectsRelative}/container${version}/workspace${version}`),
        container: pathResolved(dirnameForTnp, `${firedevProjectsRelative}/container${version}`),
        projectByType(libType: ConfigModels.NewFactoryType) {
          if (libType === 'vscode-ext') {
            // @ts-ignore
            if (version === '') { // TODO current version handle somehow
              // @ts-ignore
              version = '-v2';
            }
            return pathResolved(dirnameForTnp, `${firedevProjectsRelative}/container${version}/${libType}${version}`);
          }
          return pathResolved(dirnameForTnp, `${firedevProjectsRelative}/container${version}/${libType}${version}`);
        },
        singlefileproject: pathResolved(dirnameForTnp, `${firedevProjectsRelative}/container${version}/single-file-project${version}`)
      };
      return result;
    }
  },
  //#endregion
  allowedEnvironments,
  folder,
  tempFolders,
  // @ts-ignore
  filesNotAllowedToClean: Object.keys(filesNotAllowedToClean).map(key => filesNotAllowedToClean[key]) as string[],
  file,
  default: {
    //#region @backend
    cloud: {
      environment: {
        name: 'online' as ConfigModels.EnvironmentName
      }
    }
    //#endregion
  },
  SUBERIZED_PREFIX: `---stuberized`,
  names: {
    env: allowedEnvironmentsObj,
    baseline: 'baseline',
    defaultServer: 'default server',
  },
  reservedArgumentsNamesUglify: [
    'reservedExpOne',
    'reservedExpSec'
  ],
  extensions: {
    //#region @backend
    /**
       * Modify source: import,export, requires
       */
    get modificableByReplaceFn() {
      return [
        'ts',
        'js',
        ...stylesFilesExtension,
      ].map(f => `.${f}`);
    },
    //#endregion
  },
  notFiredevProjects: [
    //#region @backend
    'unknow', 'unknow-npm-project', 'scenario', 'navi'
    //#endregion
  ] as ConfigModels.LibType[],
  /**
   * Build allowed types
   */
  allowedTypes: {
    //#region @backend
    /**
     * Projects for build:app:watch command
     */
    app: [
      GlobalLibTypeName.angularClient,
      GlobalLibTypeName.angularLib,
      GlobalLibTypeName.isomorphicLib,
      GlobalLibTypeName.ionicClient,
      GlobalLibTypeName.docker,
      GlobalLibTypeName.container,
      GlobalLibTypeName.vscodeExt,
    ] as ConfigModels.LibType[],
    /**
     * Projects for build:(dist|bundle):(watch) command
     */
    libs: [
      GlobalLibTypeName.angularLib,
      GlobalLibTypeName.isomorphicLib,
      GlobalLibTypeName.workspace,
      GlobalLibTypeName.container,
      GlobalLibTypeName.docker,
      GlobalLibTypeName.vscodeExt,
    ] as ConfigModels.LibType[]
    //#endregion
  },
  moduleNameAngularLib,
  moduleNameIsomorphicLib,
  filesExtensions: {
    filetemplate: 'filetemplate',
    styles: stylesFilesExtension,
  },
  projectTypes: {
    //#region @backend
    forNpmLibs: [
      GlobalLibTypeName.angularLib,
      GlobalLibTypeName.isomorphicLib,
    ],
    with: {
      angularAsCore: [
        GlobalLibTypeName.angularClient,
        GlobalLibTypeName.angularLib,
        GlobalLibTypeName.ionicClient,
      ],
      componetsAsSrc: [
        GlobalLibTypeName.angularLib,
      ],
    }
    //#endregion
  },
  // environmentName,
  localLibs: [
    //#region @backend
    'eslint',
    'mkdirp',
    'gulp',
    'npm-run',
    'rimraf',
    'nodemon',
    'release-it',
    'tsc',
    'watch',
    'http-server',
    'ts-node',
    'sort-package-json',
    'concurrently',
    'sloc',
    'morphi'
    //#endregion
  ],
  helpAlias: [
    '-h',
    '--help',
    '-help',
    'help'
  ],
  required: {
    npm: [
      //#region @backend
      // { name: '@angular/cli', version: '13' },
      { name: 'ncc', version: '0.36.0', installName: '@vercel/ncc' },
      { name: 'extract-zip', version: '1.6.7' },
      { name: 'watch', version: '1.0.2' },
      { name: 'cpr' },
      { name: 'check-node-version' },
      { name: 'npm-run', version: '4.1.2' },
      { name: 'rimraf' },
      { name: 'mkdirp' },
      { name: 'renamer', version: '2.0.1' },
      { name: 'nodemon' },
      { name: 'madge' },
      { name: 'yarn' },
      { name: 'firedev-http-server' },
      { name: 'increase-memory-limit' },
      { name: 'bower' },
      { name: 'fkill', installName: 'fkill-cli' },
      // { name: 'yo' },
      { name: 'mocha' },
      // { name: 'chai' },
      { name: 'ts-node' },
      { name: 'firedev-vsce' },
      // { name: 'stmux' },
      { name: 'webpack-bundle-analyzer' },
      // { name: 'ng', installName: '@angular/cli' },
      // { name: 'ngx-pwa-icons', version: '0.1.2' },
      // { name: 'real-favicon', installName: 'cli-real-favicon' },
      { name: 'babel', installName: 'babel-cli' },
      { name: 'javascript-obfuscator', version: '4' },
      { name: 'uglifyjs', installName: 'uglify-js' },
      //#endregion
    ],
    niceTools: [
      //#region @backend
      { name: 'speed-test' },
      { name: 'npm-name' }, // check if name is available on npm
      { name: 'vantage', platform: 'linux' }, // inspect you live applicaiton
      { name: 'clinic', platform: 'linux' }, // check why nodejs is slow
      { name: 'vtop', platform: 'linux' }, // inspect you live applicaiton,
      { name: 'public-ip' },
      { name: 'empty-trash' },
      { name: 'is-up' }, // check if website is ok
      { name: 'is-online' }, // check if internet is ok,
      { name: 'ttystudio' }, // record terminal actions,
      { name: 'bcat' }, // redirect any stream to browser,
      { name: 'wifi-password', installName: 'wifi-password-cli' },
      { name: 'wallpaper', installName: 'wallpaper-cli' },
      { name: 'brightness', installName: 'brightness-cli' },
      { name: 'subdownloader' },
      { name: 'rtail' }, // monitor multiple server
      { name: 'iponmap' }, // show ip in terminal map,
      { name: 'jsome' }, // display colored jsons,
      { name: 'drawille', isNotCli: true }, // 3d drwa in temrinal
      { name: 'columnify', isNotCli: true }, // draw nice columns in node,
      { name: 'multispinner', isNotCli: true }, // progres for multiple async actions
      { name: 'cfonts' }, // draw super nice fonts in console
      //#endregion
    ],
    programs: [,
      //#region @backend
      {
        name: 'code',
        website: 'https://code.visualstudio.com/'
      }
      //#endregion
    ]
  }
};



// export const GlobalIsomorphicDependencies: ConfigModels.GlobalDependencies = {
//   npm: [
//     { name: 'rimraf' },
//     { name: 'npm-run', version: '4.1.2' },
//     { name: 'cpr' },
//     { name: 'check-node-version' },
//     { name: 'vsce' },
//   ],
//   programs: [
//     // {
//     //   name: 'code',
//     //   website: 'https://code.visualstudio.com/'
//     // }
//   ] as { name: string; website: string }[]
// };
