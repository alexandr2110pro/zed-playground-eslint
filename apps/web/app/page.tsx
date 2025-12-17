// local (to the app) modules, registered via the tsconfig paths settings
// are auto-imported though all intended mechanisms. Good.
import { InAppComponent } from '@/components/InAppComponent';

// FIXME: Modules referenced via ts project references are not auto-importable.
// if you remove those imports, Zed would not suggest auto imports
// not through autocomplete triggered on the component usage (in jsx block)
// not through code actions (or how you call it in zed)

import { fooList } from '@org/foo-dal';
import { FooList } from '@org/foo-ui';

export default async function Index() {
  const data = await fooList();

  return (
    <div className="container">
      <InAppComponent />
      <FooList data={data} />
    </div>
  );
}
