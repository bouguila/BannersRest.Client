import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.getBanners();
  }

  getBanners() {
    this.banners = [];
    this.rest.getBanners().subscribe((data: {}) => {
      console.log(data);
      this.banners = data;
    });
  }

  add() {
    this.router.navigate(['/banner-add']);
  }

  delete(id) {
    this.rest.deleteBanner(id)
      .subscribe(res => {
          this.getBanners();
        }, (err) => {
          console.log(err);
        }
      );
  }

  deleteClicked(event, data) {
    debugger
    event.stopPropagation();
    this.delete(data.id)
  }
  
}