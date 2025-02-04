import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  userList: any[] = [];
  isListVisible: boolean = false;
  noDataFound: boolean = false;  // Add a flag for no data

  constructor(private http: HttpClient) {}

  getAllUser(): void {
    if (!this.isListVisible) {
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
        (res: any) => {
          if (res && res.length > 0) {
            this.userList = res;
            this.noDataFound = false;  // Data found, set the flag to false
          } else {
            this.userList = [];
            this.noDataFound = true;  // No data found, set the flag to true
          }
        },
        (error) => {
          console.error('Error fetching data', error);
          this.userList = [];
          this.noDataFound = true;  // Handle error and show "No Data Found"
        }
      );
    } else {
      this.userList = [];
      this.noDataFound = false;  // Hide data and reset the flag
    }

    this.isListVisible = !this.isListVisible;
  }
  truncateAddress(address: string): string {
    return address.length > 10 ? address.slice(0, 10) + '...' : address;
  }
}
