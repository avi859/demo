import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, RouterLink, RouterOutlet } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

   intervalSubscription : Subscription | undefined;
  //  counterObservable = interval(4000);

  
  ngOnInit(): void {
  //  let customObservable = Observable.create((observer: { next: (arg0: number) => void; }) => {
  //   let count = 0;
  //   setInterval(() => {
  //     observer.next(count)
  //     count++;
  //   } , 1000)
  //  })

  //  this.intervalSubscription = customObservable.subscribe((data: any)=>{
  //   console.log(data);
  //  })

  // this.intervalSubscription=interval(1000).subscribe((val)=>{
  //   console.log(val);
  // })

  // this.intervalSubscription = this.counterObservable.subscribe((val)=>{
  //   console.log(val);
  // })

  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe()
  }

  stopInterval(){
    this.intervalSubscription?.unsubscribe(); 
  }
  startInterval(){
    this.intervalSubscription=interval(1000).subscribe((val)=>{
      console.log(val);
    })
  }

  onClick(){
    alert('Click on the NavBar Link for further Proceed ')
  } 
  
  
}
