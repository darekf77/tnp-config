import { Helpers } from 'tnp-core/src';

console.log('nothing here');

export function start() {
  Helpers.info('helo');
}

export default start;

//#region  tnp-config component
//#region @browser
@Component({ template: 'hello world fromr tnp-config' })
export class TnpConfigComponent {}
//#endregion
//#endregion

//#region  tnp-config module
//#region @browser
@NgModule({
  declarations: [TnpConfigComponent],
  imports: [CommonModule],
  exports: [TnpConfigComponent],
})
export class TnpConfigModule {}
//#endregion
//#endregion
