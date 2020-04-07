export interface ApiStatusOptions {
  title: string;
  url: string;
  interval: string;
  condition: string;
  lastchecked: string;
  state: string;
}

export const defaults: ApiStatusOptions = {
  title: '',
  url: '',
  interval: '0',
  condition: 'UP',
  lastchecked: 'NOT YET',
  state: 'IDLE',
};
