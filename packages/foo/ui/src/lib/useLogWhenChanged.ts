import { useEffect } from 'react';

export function useLogWhenChanged(deps: unknown[]) {
  useEffect(
    () => {
      console.log('deps changed', deps);
    },

    // Deps error here
    [],
  );
}
