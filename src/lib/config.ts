//#region imports & constants
import { CoreModels } from 'tnp-core/src';
//#region @backend
declare const global: any;
import { path, fse, os, child_process, crossPlatformPath } from 'tnp-core/src';

if (global && !global['ENV']) {
  global['ENV'] = {};
}
//#endregion

import { frameworkName } from 'tnp-core/src';

export { CoreHelpers as Helpers } from 'tnp-core/src';

//#endregion

//#region config models


export const GlobalLibTypeName = {
  //#region @backend
  isomorphicLib: 'isomorphic-lib',
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

export const LibTypeArr: CoreModels.LibType[] = [
  //#region @backend
  GlobalLibTypeName.isomorphicLib,
  GlobalLibTypeName.container,
  GlobalLibTypeName.docker,
  GlobalLibTypeName.unknowNpmProject,
  GlobalLibTypeName.vscodeExt,
  GlobalLibTypeName.chromeExt,
  GlobalLibTypeName.navi,
  GlobalLibTypeName.scenario,
  //#endregion
] as CoreModels.LibType[];


export const CoreLibCategoryArr: CoreModels.CoreLibCategory[] = [ // TODO this is for what ?
  //#region @backend
  GlobalLibTypeName.isomorphicLib,
  GlobalLibTypeName.docker,
  'common'
  //#endregion
] as CoreModels.CoreLibCategory[];

//#endregion

//#region constants /  allowed Environments
const allowedEnvironments: CoreModels.EnvironmentName[] = [
  //#region @backend
  'static', 'dev', 'prod', 'stage', 'online', 'test', 'qa', 'custom'
  //#endregion
];
const allowedEnvironmentsObj = {};
allowedEnvironments.forEach(s => {
  // @ts-ignore
  allowedEnvironmentsObj[s] = s;
});
//#endregion

//#region constants / morphi url
const urlMorphi = 'https://github.com/darekf77/morphi.git';
//#endregion

//#region constants / files not allowed to clean
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
//#endregion

//#region constants / file (files aliases)
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
  tsconfig_lib_json: 'tsconfig.lib.json',
  README_MD: 'README.md',
  server_key: 'server.key',
  server_cert: 'server.cert',
  server_chain_cert: 'server-chain.cert',
  meta_config_md: 'meta-content.md',
  logo_png: 'logo.png',
  logo_svg: 'logo.svg',
  ric_proj_json: 'ric-project.json',
  ...filesNotAllowedToClean,
};
//#endregion

//#region constants / package json split
const packageJsonSplit = [
  //#region @backend
  file.package_json__tnp_json,
  file.package_json__tnp_json5,
  file.package_json__devDependencies_json,
  //#endregion
];
//#endregion

//#region constants / temp folders
const tempFolders = { // DO NOT PUT ANYTHING SUPID HERE!!!
  vendor: 'vendor',
  docs: 'docs',
  dist: 'dist',
  tmp: 'tmp',
  tmpDistRelease: 'tmp-dist-release',
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
//#endregion

//#region constants / folder (folders aliases)
const folder = {
  scripts: 'scripts',
  scenarios: 'scenarios',
  bower: 'bower',
  src: 'src',
  out: 'out',
  app: 'app',
  lib: 'lib',
  libraries: 'libraries',
  libs: 'libs',
  source: 'source',
  custom: 'custom',
  migrations: 'migrations',
  components: 'components',
  assets: 'assets',
  generated: 'generated',
  apps: 'apps',
  shared: 'shared',
  container: 'container',
  bin: 'bin',
  _bin: '.bin',
  _vscode: '.vscode',
  project: 'project',
  external: 'external',
  tmpDist: 'tmp-dist',
  tmpFor(d: CoreModels.OutFolder) {
    return `tmp-src-${d}`;
  },
  targetProjects: {
    DEFAULT_PATH_GENERATED: 'tmp-target-projects/generated',
    DEFAULT_PATH_ORIGINS: 'tmp-target-projects/origins',
  },
  ...tempFolders,
};
//#endregion

//#region constants / trusted packages for update
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
//#endregion

//#region constants / active framework version
const activeFramewrokVersions = ['v4'] as CoreModels.FrameworkVersion[];
//#endregion


//#region resolve tnp location
// @LAST RESOLVE TNP LOCATION !!! for each context and RELEASE TNP-CONFIG
let dirnameForTnp: string;
//#region @backend
dirnameForTnp = crossPlatformPath(path.resolve(__dirname, '..'));

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

if (path.basename(dirnameForTnp) === 'node_modules') {
  dirnameForTnp = crossPlatformPath(path.join(dirnameForTnp, 'tnp'))
}

//#endregion
//#endregion

//#region config
export const config = {
  dirnameForTnp,
  packagesThat: {
    areTrustedForPatchUpdate,
  },
  /**
   * @deprecated
   */
  quickFixes: {
    //#region @backend
    /**
     * @deprecated
     */
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
  defaultFrameworkVersion: 'v4' as CoreModels.FrameworkVersion,
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
  frameworks: ['bootstrap', 'ionic', 'material'] as CoreModels.UIFramework[],
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
  urlMorphi,
  argsGlobalFlags: [ // TODO do I need this ?
    '-verbose',
    '-firedev',
    '-reinitDb',
    '-restartWorker',
    '-useWorker',
    '-dist',
  ],
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
        name: 'online' as CoreModels.EnvironmentName
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
        'css',
        'sass',
        'scss',
        'less',
      ].map(f => `.${f}`);
    },
    //#endregion
  },
  notFiredevProjects: [
    //#region @backend
    'unknow', 'unknow-npm-project', 'scenario', 'navi'
    //#endregion
  ] as CoreModels.LibType[],
  /**
   * Build allowed types
   */
  allowedTypes: {
    //#region @backend
    /**
     * Projects for build:app:watch command
     */
    app: [
      GlobalLibTypeName.isomorphicLib,
      GlobalLibTypeName.docker,
      GlobalLibTypeName.container,
      GlobalLibTypeName.vscodeExt,
    ] as CoreModels.LibType[],
    /**
     * Projects for build:(dist):(watch) command
     */
    libs: [
      GlobalLibTypeName.isomorphicLib,
      GlobalLibTypeName.container,
      GlobalLibTypeName.docker,
      GlobalLibTypeName.vscodeExt,
    ] as CoreModels.LibType[]
    //#endregion
  },
  filesExtensions: {
    filetemplate: 'filetemplate',
  },
  projectTypes: {
    //#region @backend
    forNpmLibs: [
      GlobalLibTypeName.isomorphicLib,
    ],
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
      { name: 'rimraf', version: '3.0.2' },
      { name: 'mkdirp' },
      { name: 'renamer', version: '2.0.1' },
      { name: 'nodemon' },
      { name: 'madge' },
      { name: 'yarn' },
      { name: 'firedev-http-server' },
      { name: 'increase-memory-limit' },
      { name: 'bower' },
      { name: 'prettier' },
      { name: 'fkill', installName: 'fkill-cli' },
      // { name: 'yo' },
      { name: 'mocha' },
      { name: 'jest' },
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
//#endregion

//#region globa isomorphic deps
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
//#endregion
