import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  url = 'http://localhost/aplicativo/insert.php';

  constructor(private http: HttpClient, private loadingController: LoadingController, public navCtrl: NavController) { }

  nome: any;
  login: any;
  senha: any;

  ngOnInit() {
  }




  async cadastrar(){  
    const alertloading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 5000
    }) 
    alertloading.present();


    this.http.get(`${this.url}?nome=${this.nome}&login=${this.login}&senha=${this.senha}`).subscribe(data => {
      console.log(data);
      alertloading.dismiss();
      this.nome="";
      this.login="";
      this.senha="";
      this.navCtrl.navigateForward('home');

    });
  }

}
