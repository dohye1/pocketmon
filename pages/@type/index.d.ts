export {};

declare global {
  type PocketmonAPI = {
    count: number;
    next: string;
    previous: string;
    results: Pocketmon[];
  };
  type Pocketmon = { name: string; url: string };
}
