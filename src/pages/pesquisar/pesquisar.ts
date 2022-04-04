import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReferenciaDTO } from '../../models/referencia.dto';

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {

  findCodigo : ReferenciaDTO = {
    codigo: null,
    descricao: '',
    pontos: null,
    valor: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisarPage');
  }

  search() {
    console.log(this.findCodigo);
    this.navCtrl.setRoot('PesquisarPage');
  }

}
