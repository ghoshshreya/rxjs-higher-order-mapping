import {
  concatMap,
  mergeMap,
  switchMap,
  exhaustMap,
  from,
  of,
  interval,
  take,
  throwError,
} from 'rxjs';
import { delay } from 'rxjs/operators';

var emitValues = (operator) => {
  from([1, 2, 3, 4, 5])
    .pipe(
      operator((x) => {
        // Simulating an error scenario
        // if (x === 4) {
        //   return of(x).pipe(delay(500), () =>
        //     throwError(() => new Error('Inner Observale error'))
        //   );
        // }
        return of(x).pipe(delay(500));
      })
    )
    .subscribe({
      next: (x) => console.log(x),
      error: (error) => console.error('Oops', error),
      complete: () => console.log('Completed'),
    });
};

// emitValues(concatMap);
emitValues(mergeMap);
// emitValues(switchMap);
// emitValues(exhaustMap);
