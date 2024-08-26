export const extAllowedToExportAndReplaceTSJSCodeFiles = [
  'js',
  'ts',
  'tsx',
].map(ext => `.${ext}`);

export const extTemplatesFiles = ['html'].map(ext => `.${ext}`);

export const extForSassLikeFiles = ['scss', 'sass'].map(ext => `.${ext}`);

export const extForStyles = [
  ...extForSassLikeFiles,
  ...['css', 'less'].map(ext => `.${ext}`),
];

export const extAllowedToReplace = [
  ...extForStyles,
  ...extTemplatesFiles,
  ...extAllowedToExportAndReplaceTSJSCodeFiles,
];

export const REGEX_REGION = {
  TS_JS_SCSS_SASS: {
    START: new RegExp('\\/\\/\\s*\\#region'),
    END: new RegExp('\\/\\/\\s*\\#endregion'),
    EXT: [...extAllowedToExportAndReplaceTSJSCodeFiles, ...extForSassLikeFiles],
  },
  HTML: {
    START: new RegExp('\\<\\!\\-\\-\\s*\\#region'),
    END: new RegExp('\\<\\!\\-\\-\\s*\\#endregion'),
    EXT: extTemplatesFiles,
  },
  CSS: {
    START: new RegExp('\\/\\*\\s*\\#region'),
    END: new RegExp('\\/\\*\\s*\\#endregion'),
    EXT: extForStyles,
  },
};

export const backendNodejsOnlyFiles = [
  'backend.ts',
  // '.repository.ts', // deprecated in typeorm
].map(ext => `.${ext}`);

export const backendWebsqlNodejsFiles = ['subscriber.ts', 'test.ts'].map(
  ext => `.${ext}`,
);

export const frontendFiles = [
  'browser.ts',
  'component.ts',
  'container.ts',
  'directive.ts',
  'pipe.ts',
  'module.ts',
  'service.ts',
  'store.ts',
  'actions.ts',
  'action.ts',
  'effects.ts',
  'effect.ts',
  'reducers.ts',
  'reducer.ts',
  'selectors.ts',
  'selector.ts',
  'routes.ts',
  'resolver.ts',
  'resolvers.ts',
  'guard.ts',
  'guards.ts',
  'store.ts',
  'spec.ts',
  'e2e.ts',
  'cy.ts',
  'e2e-spec.ts',
].map(ext => `.${ext}`);

export const notNeededForExportFiles = ['routes.ts'].map(ext => `.${ext}`);

export const frontEndOnly = [
  ...extTemplatesFiles,
  ...extForStyles,
  ...frontendFiles,
];

export const appRelatedFiles = [
  ...extAllowedToReplace.map(ext => `app${ext}`),
  ...frontendFiles.map(ext => `app${ext}`),
  'app.models.ts',
  'app.env.ts',
  'app.constants.ts',
  'app.hosts.ts',
  'app.electron.ts',
];

export const TAGS = {
  BACKEND: `@${'back' + 'end'}`,
  BACKEND_FUNC: `@${'back' + 'endFunc'}`,
  BROWSER: `@${'brow' + 'ser'}`,
  WEBSQL_ONLY: `@${'web' + 'sqlOnly'}`,
  WEBSQL: `@${'web' + 'sql'}`,
  WEBSQL_FUNC: `@${'web' + 'sqlFunc'}`,
  NOT_FOR_NPM: `@${'not' + 'ForNpm'}`,
  CUT_CODE_IF_TRUE: '@cutCode' + 'IfTrue',
  CUT_CODE_IF_FALSE: '@cutCode' + 'IfFalse',
  COMMENT_REGION: `//${'#reg' + 'ion'}`,
  COMMENT_END_REGION: `//${'#end' + 'region'}`,
};

export const BaselineSiteJoinprefix = '__';

export const PREFIXES = {
  BASELINE: BaselineSiteJoinprefix,
  DELETED: '____DELETED____',
  ORIGINAL: '____ORIGINAL____',
  RESTORE_NPM: '____',
};

let HOST_FILE_PATH = '';
//#region @backend
HOST_FILE_PATH =
  process.platform === 'win32'
    ? 'C:/Windows/System32/drivers/etc/hosts'
    : '/etc/hosts';
//#endregion

export { HOST_FILE_PATH };

export namespace FilesNames {
  export const tmpLastSelectedJsonFile = 'tmp-last-selected.json';
}
