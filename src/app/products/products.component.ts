import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CommonModule , FormsModule , RouterOutlet],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('name') name: ElementRef | undefined;
  @ViewChild('description') description: ElementRef | undefined;
  @ViewChild('image') image: ElementRef | undefined;

  editMode: boolean = false;
  editIndex!: number;

  alertMessage: string = ''; 
  showAlert: boolean = false;  

  products: Array<any> = this.loadFromLocalStorage();

  defaultProducts = [
    { name: 'Laptop', description: 'High-performance laptops for all your computing needs.', imageUrl: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww' },
    { name: 'Mobile', description: 'Latest smartphones with cutting-edge features.', imageUrl: 'https://plus.unsplash.com/premium_photo-1680985551022-ad298e8a5f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlfGVufDB8fDB8fHww' },
    { name: 'Television', description: 'Smart TVs with 4K resolution and more.', imageUrl: 'https://plus.unsplash.com/premium_photo-1683133215610-854ad000bba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVsZXZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'WashingMachine', description: 'Efficient washing machines to make laundry easier.', imageUrl: 'https://plus.unsplash.com/premium_photo-1664372899366-d5fb20b332d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2FzaGluZyUyME1hY2hpbmV8ZW58MHx8MHx8fDA%3D' }
  ];

  newProduct = {
    name: '',
    description: '',
    imageUrl: ''
  };

  ngOnInit(): void {
    if (this.products.length === 0) {
      this.products = this.defaultProducts;
      this.saveToLocalStorage(); // Save to local storage after initializing
    }
  }

  addProduct() {
    if (this.editMode) {
      this.products[this.editIndex] = { ...this.newProduct };
      this.newProduct = { name: '', description: '', imageUrl: '' };
      this.editMode = false;
    } else {
      if (this.newProduct.name && this.newProduct.description && this.newProduct.imageUrl) {
        this.products.push({ ...this.newProduct });
        this.newProduct = { name: '', description: '', imageUrl: '' };
      }
    }

    this.saveToLocalStorage();
  }

  deleteProduct(index: number) {
    const proName = this.products[index].name;
    if (confirm('Are you sure? You want to delete this product. ' + proName + '?')) {
      this.products.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  editProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;

    if (this.name?.nativeElement) {
      this.name.nativeElement.value = this.products[index].name;
    }

    if (this.description?.nativeElement) {
      this.description.nativeElement.value = this.products[index].description;
    }

    if (this.image?.nativeElement) {
      this.image.nativeElement.value = this.products[index].imageUrl;
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  loadFromLocalStorage(): Array<any> {
    try {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const parsedProducts = JSON.parse(storedProducts);
        if (Array.isArray(parsedProducts)) {
          return parsedProducts;
        }
      }
    } catch (error) {
      console.error('Error loading products from localStorage:', error);
    }
    return [];
  }

  isFormValid(): boolean {
    return this.newProduct.name !== '' && this.newProduct.description !== '' && this.newProduct.imageUrl !== '';
  }

  getTotalProductCount(): number {
    return this.products.length;
  }

  totalpro() {
    this.alertMessage = `Total Products added in the cart is: ${this.products.length}`;
    this.showAlert = true;

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
