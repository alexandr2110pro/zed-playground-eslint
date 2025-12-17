import { type FooDto } from '@org/foo-dto';

export async function fooList(): Promise<FooDto[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return [
    {
      id: 'foo1',
      name: 'Foo 1',
      description: 'Foo 1 description',
      pic: 'https://picsum.photos/200/300',
    },
    {
      id: 'foo2',
      name: 'Foo 2',
      description: 'Foo 2 description',
      pic: 'https://picsum.photos/200/300',
    },
    {
      id: 'foo3',
      name: 'Foo 3',
      description: 'Foo 3 description',
      pic: 'https://picsum.photos/200/300',
    },
  ];
}
