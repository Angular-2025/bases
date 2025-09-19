import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonBallSuper {
  public dragonballService = inject(DragonBallService);

  //? just to to be:
  //? constructor(public dragonballService: DragonBallService) {}
}
