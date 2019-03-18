import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
  ) {
    this.initializeApp();
  }

  goProfile(){
    this.navCtrl.navigateForward('/profile');
    this.menuCtrl.close();
  }
  goAdmin(){
    this.navCtrl.navigateForward('/admin');
    this.menuCtrl.close();
  }
  goSettings(){
    this.navCtrl.navigateForward('/settings');
    this.menuCtrl.close();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
