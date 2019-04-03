// (() => new Promise((resolve) => resolve('promise'))) ()
//             .then((p) => console.log(p))
//             setTimeout(()=> console.log('timeout'),0);
//             setImmediate(()=> console.log('immediate'));
//             queueMicrotask(()=> console.log('microtask'));
//             process.nextTick(()=> console.log('nexttick'));

Array.prototype.even = async function () {
        let result = await this.filter((num) => (num + 1) % 2)
        return result;
                }

Array.prototype.odd = async function () {
        let result = await this.filter((num) => num % 2)
        return result;
    }

console.log('start');
console.log([1, 2, 3, 4, 5, 6, 7, 8].even());
console.log([1, 2, 3, 4, 5, 6, 7, 8].odd());
console.log('end');

    
 