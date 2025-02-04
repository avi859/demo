import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../appPipes/filter.pipe";

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  namesearch: string = '';

  // Initialize the product array with values from localStorage, if available
  productArr: Array<{ Product: string, price: string, Availability: string }> = JSON.parse(localStorage.getItem('productArr') || '[]');

  ngOnInit(): void {
    if (this.productArr.length === 0) {
      // If no products in localStorage, set initial default values
      this.productArr = [
        { Product: 'Mobile', price: '7000 Rs', Availability: 'Available' },
        { Product: 'TV', price: '50000 Rs', Availability: 'Unavailable' },
        { Product: 'Laptop', price: '60000 Rs', Availability: 'Available' },
        { Product: 'Headphones', price: '2000 Rs', Availability: 'Unavailable' },
        { Product: 'Smartwatch', price: '3000 Rs', Availability: 'Unavailable' },
        { Product: 'Camera', price: '25000 Rs', Availability: 'Available' },
      ];
    }

    console.log(this.productArr);
  }

  // Add product to the array and save to localStorage
  onAddProduct(addPro: HTMLInputElement): void {
    if (addPro.value.trim() === '') {
      alert('Please enter a valid product name.');
      return;
    }

    this.productArr.push({
      Product: addPro.value,
      price: '80000 Rs',
      Availability: 'Available',
    });

    // Store the updated product list in localStorage
    localStorage.setItem('productArr', JSON.stringify(this.productArr));

    addPro.value = ''; // Clear input field after adding product
  }

  // Delete product from the array and update localStorage
  onDeleteProduct(index: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.productArr.splice(index, 1);

      // Update localStorage with the new product list
      localStorage.setItem('productArr', JSON.stringify(this.productArr));
    }
  }
}
