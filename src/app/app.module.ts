import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PlayerComponent } from './player/player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { GameInfoComponent } from './game-info/game-info.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
    PlayerComponent,
    DialogAddPlayerComponent,
    GameInfoComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormsModule, //eingefügt um Fehler zu beheben: "can´t bint to ngModel..."
    MatCardModule,
    MatSliderModule,
    MatTooltipModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
