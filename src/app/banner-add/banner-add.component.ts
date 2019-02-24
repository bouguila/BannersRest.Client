import { Component,Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner-add',
  templateUrl: './banner-add.component.html',
  styleUrls: ['./banner-add.component.css']
})
export class BannerAddComponent {

  @Input() banner:any = { id: '', html: ''};
  error:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  addBanner() {
    this.rest.addBanner(this.banner).subscribe((result) => {
      console.log(result);
      this.router.navigateByUrl('/banners').then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    }, (err) => {
      this.error=err.error.errors;
      console.log(err);
    });
  }
}