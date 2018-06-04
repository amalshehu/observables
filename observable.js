const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs')
const { map, filter, switchMap } = require('rxjs/operators')

// Even numbers ranges from 1 to 200, then mapped by adding the same.
// range(1, 200)
//   .pipe(filter(x => x % 2 === 1), map(x => x + x))
//   .subscribe(x => console.log(x))

// Creating observable

const obs = Observable.create(observer => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
})

obs.subscribe(value => console.log(value))
