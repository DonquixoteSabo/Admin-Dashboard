export interface Task {
  text: string;
  status: 'new' | 'urgent' | 'default';
  finished: boolean;
  id: string;
}
