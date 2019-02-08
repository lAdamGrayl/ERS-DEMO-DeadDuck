import {Component, OnInit} from '@angular/core';
import {ReimbursementService} from "../../services/reimbursement.service";
import {AuthService} from "../../services/auth.service";
import {Reimbursement} from "../../models/Reimbursement";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-approve-or-deny',
  templateUrl: './approve-or-deny.component.html',
  styleUrls: ['./approve-or-deny.component.css']
})
export class ApproveOrDenyComponent implements OnInit {
  reimbursements: Reimbursement[];
  showApprovedReimbursements: boolean = true;
  showDeniedReimbursements: boolean = true;
  showPendingReimbursements: boolean = true;

  constructor(private reimbursementService: ReimbursementService, private authService: AuthService) {
  }
  type1 = 'Lodging';
  type2 = 'Food';
  type3 = 'Travel';
  type4 = 'Other';
  status1 = 'Open';
  status2 = 'Approved';
  status3 = 'Rejected';

  ngOnInit() {
    this.reimbursementService.getAllReimbursements()
      .subscribe(reimbursements => {
        this.reimbursements = reimbursements;
      })
  }

  submitRequest(form: NgForm, reimbursementId: number) {
    let reimbursement = new Reimbursement();

    reimbursement.id = reimbursementId;
    reimbursement.resolverId = this.authService.getLoggedInUser().id;
    reimbursement.dateResolved = new Date();

    if (form.value['status'] === 'approve') {
      reimbursement.statusId = 2;
    } else if (form.value['status'] === 'deny') {
      reimbursement.statusId = 3;
    } else {
      reimbursement.statusId = 1;
    }

    this.reimbursementService.updateReimbursement(reimbursement)
      .subscribe(() => console.log('success'),
        () => console.log('failure'));
    window.location.reload();

  }

  fShowApprovedReimbursements() {
    this.showApprovedReimbursements = this.showApprovedReimbursements;
  }

  fShowDeniedReimbursements() {
    this.showDeniedReimbursements = this.showApprovedReimbursements;
  }

  fShowPendingReimbursements() {
    this.showPendingReimbursements = this.showPendingReimbursements;
  }
  refresh(): void{
    window.location.href = 'http://localhost:8080/login/';
  }

}
