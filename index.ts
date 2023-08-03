import { concatMap, mergeMap, switchMap, exhaustMap, from, of } from 'rxjs';
import { delay } from 'rxjs/operators';

var emitValues = (operator) => {
  from([1, 2, 3, 4, 5])
    .pipe(operator((x) => of(x).pipe(delay(500))))
    .subscribe((x) => console.log(x));
};

emitValues(concatMap);
emitValues(mergeMap);
emitValues(switchMap);
emitValues(exhaustMap);
