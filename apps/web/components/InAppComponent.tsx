'use client';

import { useEffect, useState } from 'react';

export function InAppComponent() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      console.log('Count updated: ', count);
    },

    // we have an error here - good
    [],
  );

  return (
    <div className="min-h-[60vh] bg-slate-100 px-4 py-10">
      <div
        className="mx-auto flex max-w-96 flex-col gap-4 overflow-hidden
          rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-700
          shadow-xl"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-lg leading-tight font-semibold">Counter</h1>
            <p className="text-sm text-slate-500">A tiny state demo</p>
          </div>

          <div
            className="flex items-center justify-center px-3 py-2 text-2xl
              font-semibold text-slate-800 tabular-nums"
          >
            {count}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCount(c => c - 1)}
            className="inline-flex flex-1 items-center justify-center rounded-lg
              border border-slate-200 bg-white px-4 py-2 font-medium
              text-slate-700 shadow transition hover:bg-slate-50
              active:translate-y-px"
          >
            −
          </button>

          <button
            type="button"
            onClick={() => setCount(0)}
            className="inline-flex items-center justify-center rounded-lg border
              border-slate-200 bg-white px-4 py-2 text-sm font-medium
              text-slate-600 shadow transition hover:bg-slate-50
              active:translate-y-px"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={() => setCount(c => c + 1)}
            className="inline-flex flex-1 items-center justify-center rounded-lg
              border border-slate-200 bg-white px-4 py-2 font-medium
              text-slate-700 shadow transition hover:bg-slate-50
              active:translate-y-px"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
