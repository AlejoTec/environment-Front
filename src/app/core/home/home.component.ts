import { Component } from '@angular/core';
import { Card } from './interfaces/card.interface';
import { CommonModule } from '@angular/common';

const imports = [
  CommonModule
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports
})
export class HomeComponent {
  cards: Card[] = [
    {
      title: '¿QUIENES SOMOS?',
      image: 'whoWeAre.jpg',
      link: '',
      desccription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat iusto aut adipisci iste, maxime, natus facere placeat harum atque odio debitis nisi fugit voluptatem obcaecati non earum nulla excepturi.'
    },
    {
      title: 'ACERCA DE NOSOTROS',
      image: 'about.jpg',
      link: '',
      desccription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat iusto aut adipisci iste, maxime, natus facere placeat harum atque odio debitis nisi fugit voluptatem obcaecati non earum nulla excepturi.'
    },
    {
      title: '¿TIENES PROBLEMAS?',
      image: 'anyProblem.jpg',
      link: '',
      desccription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat iusto aut adipisci iste, maxime, natus facere placeat harum atque odio debitis nisi fugit voluptatem obcaecati non earum nulla excepturi.'
    }
  ]
}
