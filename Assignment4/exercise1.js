const os = require('os');
const {
    Observable
} = require('rxjs');

const obs$ = Observable.create((observer) => {
    console.log("Checking you system ...");
    if (os.totalmem() < 4 * 1024 * 1024 * 1024) {
        observer.error("This app needs at least 4 GB of RAM");
    }

    if (os.cpus().length < 2) {
        observer.error("Processor is not supported");
    }
    observer.complete();
});

function checkSystem() {
    const sub = obs$.subscribe(
        x => console.log(x),
        err => console.log(err),
        () => console.log("System is checked successfully")
    );
}

checkSystem();
