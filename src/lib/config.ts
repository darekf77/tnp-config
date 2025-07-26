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

import {
  areTrustedForPatchUpdate,
  fileName,
  filesNotAllowedToClean,
  folderName,
  tempFoldersName,
  urlRepoTaon,
} from './constants';

//#endregion

//#region resolve tnp location
// @LAST RESOLVE TNP LOCATION !!! for each context and RELEASE TNP-CONFIG
let dirnameForTnp: string;
//#region @backend
dirnameForTnp = crossPlatformPath(path.resolve(__dirname, '..'));

if (process.platform === 'win32' && dirnameForTnp.endsWith('dist')) {
  // TODO QUICK_FIX for windows
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
global.dirnameForTaon = dirnameForTnp;

if (path.basename(dirnameForTnp) === 'node_modules') {
  dirnameForTnp = crossPlatformPath(path.join(dirnameForTnp, 'tnp'));
}

//#endregion
//#endregion

//#region config
export const config = {
  dirnameForTnp,
  packagesThat: {
    areTrustedForPatchUpdate,
  },
  regexString: {
    pathPartStringRegex: `(\/([a-zA-Z0-9]|\\-|\\_|\\+|\\.)*)`,
  },
  placeholders: {
    forProjectsInEnvironmentFile: '//<PLACEHOLDER_FOR_PROJECTS>',
  },
  array: {
    isomorphicPackages: 'isomorphicPackages',
  },
  frameworkName,
  /**
   * @deprecated pacakge json will be generated
   */
  packageJsonFrameworkKey: 'tnp',
  frameworkNames: {
    productionFrameworkName: 'taon',
    developmentFrameworkName: 'tnp',
  },
  startPort: 6001,
  frameworks: ['bootstrap', 'ionic', 'material'] as CoreModels.UIFramework[],
  //#region @backend
  tempFiles: {
    FILE_NAME_ISOMORPHIC_PACKAGES: 'tmp-isomorphic-packages.json',
  },
  /**
   * @deprecated use urlRepoTaon instead
   */
  urlRepoTaon,
  pathes: {
    logoSvg: 'logo.svg',
    logoPng: 'logo.png',
  },
  //#endregion
  /**
   * @deprecated use folderName instead
   */
  folder: folderName,
  /**
   * @deprecated use tempFoldersName instead
   */
  tempFolders: tempFoldersName,
  // @ts-ignore
  filesNotAllowedToClean: Object.keys(filesNotAllowedToClean).map(
    key => filesNotAllowedToClean[key],
  ) as string[],
  /**
   * @deprecated use fileName instead
   */
  file: fileName,
  reservedArgumentsNamesUglify: ['reservedExpOne', 'reservedExpSec'],
  filesExtensions: {
    filetemplate: 'filetemplate',
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
    //#endregion
  ],
  helpAlias: ['-h', '--help', '-help', 'help'],
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
