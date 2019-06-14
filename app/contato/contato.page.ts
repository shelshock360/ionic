import { Component, OnInit } from '@angular/core';
import{Contato} from './entidades/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  contato:Contato= new Contato();
  constructor() { }

  ngOnInit() {
  }

}
