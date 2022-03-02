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



export const getAllRowsByField = (field: string, filter: number, sortBy: string) => {
  return db.todos.where(field).equals(filter).sortBy(sortBy)
}

export const countByFieldAndFilter = (field:string, filter:number) => {
  return db.todos.where(field).equals(filter).count()
}
export const modifyField = (id: number, field:string) => {
  db.todos.where({id: id}).modify((x) => ++x[field as keyof Todo])
}

export const deleteById = (id: number) => {
  db.todos.where({id: id}).delete()
}
