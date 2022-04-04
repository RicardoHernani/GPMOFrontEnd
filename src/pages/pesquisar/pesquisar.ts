import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PesquisaCodigoDTO } from '../../models/pesquisa_codigo.dto';

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {

  findCodigo : PesquisaCodigoDTO = {
    codigo: null
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
