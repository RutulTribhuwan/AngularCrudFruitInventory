import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Add CommonModule and RouterModule here
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  fruits: any[] = [];

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits().subscribe(fruits => {
      this.fruits = fruits;
    });
  }

  deleteFruit(id: number): void {
    this.fruitService.deleteFruit(id).subscribe(() => {
      this.fruits = this.fruits.filter(fruit => fruit.id !== id);
    });
  }
}
