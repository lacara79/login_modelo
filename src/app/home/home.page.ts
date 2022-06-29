import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url = 'http://localhost/aplicativo/select.php';

  login: any;
  senha: any;

  lista: any;

  constructor(private http: HttpClient, private loadingController: LoadingController, private alertController: AlertController) {}

  async entrarLogin(){///
    const alertControllerErro = await this.alertController.create({
      message: 'Login incorreto, tente novamente.',
      buttons: ['ok']
    }) 

    const alertControllerOk = await this.alertController.create({
      message: 'Login Correto.',
      buttons: ['ok']
    }) 

    const alertloading = await this.loadingController.create({
      message: 'Entrando...'
    }) 
    alertloading.present();


    this.http.get(`${this.url}?login=${this.login}&senha=${this.senha}`).subscribe(data => {
      this.lista = data;
      console.log(this.lista);
      alertloading.dismiss();

      if (this.lista == "ops"){
        alertControllerErro.present();
      }
      else
      {
        alertControllerOk.present();
      }
    })
  }
}
