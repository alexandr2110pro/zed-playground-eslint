'use client';

import { useEffect, useState } from 'react';

import { FooDto } from '@org/foo-dto';

import { useLogWhenChanged } from './useLogWhenChanged';

export function FooList({ data }: { data: FooDto[] }) {
  const [local, setLocal] = useState<FooDto[]>([]);

  useLogWhenChanged([local]);

  useEffect(
    () => {
      // error react-hooks/set-state-in-effect
      setLocal(data);
    },

    // missing dependency error
    [],
  );

  return (
    <div className="mx-auto mt-4 flex max-w-96 flex-col gap-2">
      {local.map(item => (
        <FooListItem foo={item} key={item.id} />
      ))}
    </div>
  );
}

export function FooListItem({ foo }: { foo: FooDto }) {
  return (
    <div
      className="flex items-center gap-4 overflow-hidden rounded-xl
        border-slate-200 bg-slate-50 p-4 text-slate-700 shadow-xl"
    >
      {/* this should report no-img-element rule */}
      <img
        src={foo.pic}
        alt={foo.name}
        className="size-16 overflow-hidden rounded-lg bg-slate-50 object-cover
          p-px shadow"
      />
      <div className="flex grow flex-col">
        <h2 className="font-semibold">{foo.name}</h2>
        <p>{foo.description}</p>
      </div>
    </div>
  );
}
