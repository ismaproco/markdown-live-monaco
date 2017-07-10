declare const require: any;

export class MonacoEditorService {
  private _loaded = false;
  private _loadPromise: Promise<void>;

  private createdEditors:any[] = [];

  constructor(
  ) {
    this._loadPromise = new Promise<void>(resolve => {
      // Fast path - monaco is already loaded
      if (typeof ((<any>window).monaco) === 'object') {
        resolve();
        return;
      }

      const onGotAmdLoader = () => {
        // Load monaco
        (<any>window).require.config({ paths: { 'vs': '/assets/monaco/vs' } });
        (<any>window).require(['vs/editor/editor.main'], () => {
          this._loaded = true;
          resolve();
        });
      };

      // Load AMD loader if necessary
      if (!(<any>window).require) {
        const loaderScript = document.createElement('script');
        loaderScript.type = 'text/javascript';
        loaderScript.src = '/assets/monaco/vs/loader.js';
        loaderScript.addEventListener('load', onGotAmdLoader);
        document.body.appendChild(loaderScript);
      } else {
        onGotAmdLoader();
      }
    });
  }

  get monacoLoaded() {
    return this._loaded;
  }

  // Returns promise that will be fulfilled when monaco is available
  waitForMonaco(): Promise<void> {
    return this._loadPromise;
  }

  // set the loaded editor reference
  setEditorReference(_editor:any){
    this.createdEditors.push( _editor );
  }

  getEditors() {
    return this.createdEditors;
  }

}
