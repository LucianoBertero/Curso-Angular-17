import {
  Component,
  OnDestroy,
  OnInit,
  computed,
  effect,
  signal,
} from '@angular/core';
import { User } from '../../interface/user-request.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent implements OnDestroy, OnInit {
  ngOnInit(): void {
    setInterval(() => {
      this.counter.update((current) => current + 1);
    }, 1000);
  }
  public user = signal<User>({
    id: 1,
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
  });

  public counter = signal(10);
  public fullName = computed(() => {
    `${this.user().first_name} ${this.user().last_name}`;
  });

  public userChangedEffect = effect(() => {
    console.log('Usser change effect trigger');
  });

  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
  }
  onFieldUpdated(field: keyof User, value: string) {
    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number(value);
      }

      return current;
    });
  }
  increseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
