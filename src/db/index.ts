import Dexie, { Table } from 'dexie';
import { Todo } from '../interfaces'

export class DBClassDexie extends Dexie {
  todos!: Table<Todo>; 

  constructor() {
    super('dexie-db-sandbox');
    this.version(1).stores({
      todos: '++id, title, memo, complete' 
    });
  }
}

export const db = new DBClassDexie();