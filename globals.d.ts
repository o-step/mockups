declare module '*.png';
declare module '*.svg';

declare interface ICard {
  src: string;
  tags: string[];
  alt: string;
}

declare interface IFilter {
  icon: React.ReactElement;
  name: string;
  params: React.ReactElement;
}

declare interface IPerson {
  name: string;
  id: number;
}

declare interface IList {
  info: IPerson[];
}

declare interface IInitialContext {
  removePerson: (id: number) => void;
  users: IPerson[];
}
