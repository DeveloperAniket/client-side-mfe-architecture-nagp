import { Component, OnInit } from '@angular/core';
import { SharedLibService } from '../../../../shared-lib/src/public-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.scss'
})
export class PremiumComponent implements OnInit {
  constructor(private sharedLibService: SharedLibService, private route: ActivatedRoute) { }
  workerResult: any;
  enablePayment: boolean = false;
  enableCalculatePremium: boolean = true;
  policyNumber: string | undefined;
  policyPremium: number | undefined;
  finalPolicyPremium: number  = 0;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.policyNumber = params['policy'];
      this.setPolicyPremium();
    });
  }

  // Web Worker Integration
  generatePremiumWorkerResponse(policyNumber: any, PolicyPremium: number) {
    const input = {
      PolicyNumber: policyNumber,
      PolicyPremium: PolicyPremium
    };
    const worker = new Worker(new URL('./premium.worker', import.meta.url));
    worker.onmessage = ({ data }) => {
      this.workerResult = data;
      this.finalPolicyPremium = this.workerResult;
    };
    worker.postMessage(input);
  }

  setPolicyPremium(): void {
    if (this.policyNumber && this.policyNumber.length > 0) {
      if (this.sharedLibService.getPolicy(this.policyNumber)) {
        this.policyPremium = this.sharedLibService.getPolicy(this.policyNumber)['premium'];
      }
    } else {
      this.policyPremium = 0;
    }
  }

  payment(): void {
    if (!this.policyNumber || !this.policyPremium) {
      alert("Please provide the policyNumber and Premium");
      return;
    }
    if (this.policyNumber.length > 0 && this.finalPolicyPremium > 0) {
      alert("Payment is completed for Policy: " + this.policyNumber + " with premium amount: " + this.finalPolicyPremium);
      this.enablePayment = false;
    }
  }

  calculatePremium(): void {
    if (!this.policyNumber || !this.policyPremium) {
      alert("Please provide the policyNumber and Premium");
      return;
    }
    this.enableCalculatePremium = false;
    this.enablePayment = true;
    this.generatePremiumWorkerResponse(this.policyNumber, this.policyPremium);
  }
}
