import { CommonModule } from '@angular/common';
import {
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';

interface Todo {
  id: number;
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class TextDisplayComponent {
  count: WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  todos: WritableSignal<Todo[]> = signal<Todo[]>([
    { id: 1, name: 'Learn signals part 1', done: false },
    { id: 2, name: 'Learn signals part 2', done: false },
    { id: 3, name: 'Learn signals part 3', done: false },
  ]);

  constructor() {
    effect(() => {
      console.log(
        `The count is ${this.count()} and doubleCount is ${this.doubleCount()} & todos are ${this.todos}`
      );
    });
  }

  onClick() {
    this.count.update((value) => value + 1);
  }
  onReset() {
    this.count.set(0);
  }

  onTodo(id: number) {
    this.todos.update((todos: Todo[]): any => {
      let todo = todos.find((todo: { id: number; }) => todo.id === id);
      if (todo) {
        todo.done = true;
      }
    });
  }
  onResetTodos() {
    this.todos.update((todos: Todo[]): any => todos.forEach((todo: { done: boolean; }): any => (todo.done = false)));
  }
}
