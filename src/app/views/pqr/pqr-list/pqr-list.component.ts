import { Component, OnInit } from '@angular/core';
import { PqrService } from 'src/app/commons/services/pqr.service';

@Component({
  selector: 'app-pqr-list',
  templateUrl: './pqr-list.component.html',
  styleUrls: ['./pqr-list.component.scss']
})
export class PqrListComponent implements OnInit {

  obj: any = {
    title: 'PCC Module',
    subtitle: 'PCC List',
    claimList: {},
    selectedPqr: 0,
    description: 'For your convenience we have created this page where you can to file requests, petition, complaint or claim.',
    users: [
      {
        username: "Jair"
      },
      {
        username: "Jaime",
      },
      {
        username: "Luchi",
      }
    ],
    types: [
      {
        id: 1,
        name: "Petition"
      },
      {
        id: 2,
        name: "Complaint"
      },
      {
        id: 3,
        name: "Claim"
      }
    ]
  };
  
  constructor(private pqrService: PqrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.pqrService.getAll().subscribe((data: any) => {
      if (data.data.length > 0) {
        this.obj.pqrs = data.data;
        this.obj.pqrs.map((x:any) => x.TypePqr = TypePcc[x.Type]);
        console.log(this.obj.pqrs);
      }
    });
  }

  selectRelated(item: any){
    this.obj.claimList = item.ClaimList;
    this.obj.selectedPqr = item;
  }
}

export enum TypePcc {
  Petition = 1,
  Complaint = 2,
  Claim = 3
}
