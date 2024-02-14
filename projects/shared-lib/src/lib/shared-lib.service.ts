import { Injectable } from '@angular/core';
import insurance_policies from '../data/policies.json';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  constructor() {
    this.loadStorage();
  }


  loadStorage() {
    localStorage.setItem("policies", JSON.stringify(insurance_policies));
  }

  getPolicy(policyNumber: any) {
    let policyInput = policyNumber.toUpperCase()
    let localStoragePolicies: any = localStorage.getItem("policies");
    let policies: any = JSON.parse(localStoragePolicies);
    const policy = policies.filter((policy: any) => policy["policyNumber"] === policyInput);
    if (policy[0]) {
      return policy[0];
    } else {
      alert("No Policy Found for policyNumber: " + policyNumber);
      return undefined;
    }
  }
}
