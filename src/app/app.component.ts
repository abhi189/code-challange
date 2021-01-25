import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from './@core/services/seo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.init();
  }
}
