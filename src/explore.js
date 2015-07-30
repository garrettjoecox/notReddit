import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

@inject(Router)
export class Explore{

	constructor(router){
		this.router = router;
	}

  categories = [
    { name: 'Minecraft Servers',   categoryId: 'minecraft-servers', count: 57,  votes: 359 },
    { name: 'Custom Zombies Maps', categoryId: 'custom-zombies-maps', count: 430, votes: 2043 },
    { name: 'iOS Tweaks',          categoryId: 'ios-tweaks', count: 263, votes: 4045 },
    { name: 'Mixtape Sites',       categoryId: 'mixtape-sites', count: 15,  votes: 94 },
    { name: 'Minecraft Mods',      categoryId: 'minecraft-mods', count: 784, votes: 3402 }
  ]

}

