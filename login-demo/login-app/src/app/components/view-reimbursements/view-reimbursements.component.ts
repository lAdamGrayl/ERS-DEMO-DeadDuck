import {Component, OnInit} from '@angular/core';
import {ReimbursementService} from "../../services/reimbursement.service";
import {AuthService} from '../../services/auth.service';
import {Reimbursement} from "../../models/Reimbursement";

@Component({
  selector: 'app-view-reimbursements',
  templateUrl: './view-reimbursements.component.html',
  styleUrls: ['./view-reimbursements.component.css']
})
export class ViewReimbursementsComponent implements OnInit {
  reimbursements: Reimbursement[];

  constructor(
    private reimbursementService: ReimbursementService,
    private authService: AuthService) {
  }
  type1 = 'Lodging';
  type2 = 'Food';
  type3 = 'Travel';
  type4 = 'Other';
  status1 = 'Open';
  status2 = 'Approved';
  status3 = 'Rejected';

  ngOnInit() {
    let loggedInUserId = this.authService.getLoggedInUser().id;
    this.reimbursementService.getReimbursementsByAuthorId(loggedInUserId)
      .subscribe(reimbursements => this.reimbursements = reimbursements);
  }
  refresh(): void{
    window.location.href = 'http://localhost:8080/login/';
  }

}

