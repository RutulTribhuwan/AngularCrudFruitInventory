import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FruitService, Fruit } from '../fruit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fruit-form',
  templateUrl: './fruit-form.component.html',
  styleUrls: ['./fruit-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FruitFormComponent implements OnInit {

  fruitForm: FormGroup;
  fruitId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private fruitService: FruitService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.fruitForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.fruitId = +idParam;
      if (!isNaN(this.fruitId)) {
        this.fruitService.getFruit(this.fruitId).subscribe((fruit) => {
          this.fruitForm.patchValue(fruit);
        });
      } else {
        console.error('Invalid fruit ID');
      }
    }
  }

  onSubmit(): void {
    if (this.fruitForm.valid) {
      const fruit: Fruit = { id: this.fruitId, ...this.fruitForm.value };
      if (this.fruitId) {
        this.fruitService.updateFruit(fruit).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.fruitService.createFruit(fruit).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
