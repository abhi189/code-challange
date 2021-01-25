import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enrollee } from '../../enrollees.model';
import { EnrolleesService } from '../../enrollees.service';

@Component({
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss']
})
export class ListPage implements OnInit {

  loadingEnrollees: boolean;
  enrollees: Enrollee[];
  constructor(
    private enrolleeService: EnrolleesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.fetchEnrollees();
  }

  fetchEnrollees(): void {
    this.loadingEnrollees = true;
    this.enrolleeService.getAll()
    .subscribe((response: Enrollee[]) => {
      this.loadingEnrollees = false;
      this.enrollees = response;
    }, (error) => {
      this.loadingEnrollees = false;
    })
  }

  handleEnrolleeClick(enrollee: Enrollee): void {
    this.router.navigateByUrl(`/enrollees/${enrollee.id}`);
  }

}
