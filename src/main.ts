import { Aurelia, PLATFORM } from 'aurelia-framework';

export function configure(aurelia: Aurelia): void {    
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin(PLATFORM.moduleName('aurelia-nano-bar'));

    aurelia.start().then(() => {
            aurelia.setRoot(PLATFORM.moduleName('app'));
    });
}