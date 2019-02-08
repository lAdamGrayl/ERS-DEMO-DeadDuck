import { Component, OnInit } from '@angular/core';
import { Reimbursement} from "../../models/Reimbursement";
import {ReimbursementService} from "../../services/reimbursement.service";

@Component({
  selector: 'app-view-all-reimbursements',
  templateUrl: './view-all-reimbursements.component.html',
  styleUrls: ['./view-all-reimbursements.component.css']
})
export class ViewAllReimbursementsComponent implements OnInit {
  reimbursements: Reimbursement[];

  constructor(private reimbursementService: ReimbursementService) { }
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
  refresh(): void{
    window.location.href = 'http://localhost:8080/login/';
  }

}
