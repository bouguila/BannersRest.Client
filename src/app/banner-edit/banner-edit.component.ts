import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {

  @Input() banner:any = { id: '', html: '',created:'',modified:''};
  error:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getBanner(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.banner = data;
    });
  }

  updateBanner() {
    this.rest.updateBanner(this.route.snapshot.params['id'], this.banner).subscribe(
      (result) => {
        this.ngOnInit();
      console.log(result);
    }, (err) => {
      this.error=err.error.errors;
    });
  }

}