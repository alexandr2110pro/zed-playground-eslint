import { useEffect } from 'react';

export function useLogWhenChanged(deps: unknown[]) {
  // More than three empty lines below should be an error - due to 'no-multiple-empty-lines'
  // Less than three - no error, because this project overrides the root rule

  useEffect(
    () => {
      console.log('deps changed', deps);
    },

    // this should have an error but it is not.
    [],
  );

  return {
    foo: 'bar',
  };
}
