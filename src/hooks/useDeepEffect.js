import { useEffect, useRef } from 'react';
import _ from 'lodash';

function useDeepCompareMemoize(value) {
  const ref = useRef();
  if (!_.isEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

export function useDeepEffect(callback, dependencies) {
  useEffect(callback, useDeepCompareMemoize(dependencies));
}
