import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe1', 'This is a simply a test', 'https://th.bing.com/th/id/R.d6d0377ca78d2533af58263f4bec0ff6?rik=rpyXTij%2bfTMTTQ&riu=http%3a%2f%2fouritaliantable.com%2fwp-content%2fuploads%2f2010%2f06%2fcrabmeat-pasta.jpg&ehk=EifnzejPe1GBTonvlkdik%2baqdwgigs9bmYZK%2bKGwPm4%3d&risl=&pid=ImgRaw&r=0'),
    new Recipe('A test Recipe2', 'This is a simply a test', 'https://th.bing.com/th/id/R.d6d0377ca78d2533af58263f4bec0ff6?rik=rpyXTij%2bfTMTTQ&riu=http%3a%2f%2fouritaliantable.com%2fwp-content%2fuploads%2f2010%2f06%2fcrabmeat-pasta.jpg&ehk=EifnzejPe1GBTonvlkdik%2baqdwgigs9bmYZK%2bKGwPm4%3d&risl=&pid=ImgRaw&r=0'),
    new Recipe('A test Recipe3', 'This is a simply a test', 'https://th.bing.com/th/id/R.d6d0377ca78d2533af58263f4bec0ff6?rik=rpyXTij%2bfTMTTQ&riu=http%3a%2f%2fouritaliantable.com%2fwp-content%2fuploads%2f2010%2f06%2fcrabmeat-pasta.jpg&ehk=EifnzejPe1GBTonvlkdik%2baqdwgigs9bmYZK%2bKGwPm4%3d&risl=&pid=ImgRaw&r=0')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
 