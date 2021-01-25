import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enrollee } from '../../enrollees.model';
import { EnrolleesService } from '../../enrollees.service';


@Component({
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {

  loadingEnrollee: boolean;
  enrolleeDetails: Enrollee;
  editEnabled: boolean;
  private enrolleeId: string;
  constructor(
    private enrolleeService: EnrolleesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      (params) => {
        this.enrolleeId = params.get('enrolleeId');
        this.fetchEnrollee(this.enrolleeId);
      }
    )
  }

  fetchEnrollee(id: string): void {
    if (!id) {
      return;
    }
    this.loadingEnrollee = true;
    
    this.enrolleeService.get(id)
    .subscribe((response: Enrollee) => {
      this.loadingEnrollee = false;
      this.enrolleeDetails = response;
    }, (error) => {
      this.loadingEnrollee = false;
    })
  }

  update(form: NgForm): void {
    const enrollee: Enrollee = {
      id: form.value.id,
      name: form.value.name,
      active: form.value.active === 'active' ? true : false,
      dateOfBirth: form.value.dateOfBirth
    };

    this.loadingEnrollee = true;
    this.enrolleeService.put(this.enrolleeId, enrollee)
    .subscribe((response: Enrollee) => {
      this.loadingEnrollee = false;
      this.enrolleeDetails = response;
      this.editEnabled = false;
      this.fetchEnrollee(this.enrolleeId);
    }, 
    (error) => {
      this.loadingEnrollee = false;
    })
  }

  handleEditClick(): void {
    this.editEnabled = !this.editEnabled;
  }

  handleBackClick(): void {
    this.router.navigateByUrl('')
  }

}
