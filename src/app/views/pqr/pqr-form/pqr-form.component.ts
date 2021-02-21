import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { PqrService } from 'src/app/commons/services/pqr.service';

@Component({
  selector: 'app-pqr-form',
  templateUrl: './pqr-form.component.html',
  styleUrls: ['./pqr-form.component.scss']
})
export class PqrFormComponent implements OnInit {

  obj: any = {
    title: 'PCC Module',
    subtitle: 'Add PCC',
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

  pqrForm = this.fb.group({
    username: ['', Validators.required],
    type: [{ value: '', disabled: true }, Validators.required],
    pcc: [{ value: '', disabled: true }],
    messageuser: [{ value: '', disabled: true }, Validators.required],
    pqrId: ['']
  });

  public result: any = {};

  constructor(private pqrService: PqrService,
    private fb: FormBuilder) {
  }

  get username() {
    return this.pqrForm.get('username');
  }
  get type() {
    return this.pqrForm.get('type');
  }
  get pcc() {
    return this.pqrForm.get('pcc');
  }
  get messageuser() {
    return this.pqrForm.get('messageuser');
  }
  get pqrId() {
    return this.pqrForm.get('pqrId');
  }

  createForm() {
    this.pqrForm = this.fb.group({
      username: ['', Validators.required],
      type: ['', Validators.required],
      pcc: [{ value: '', disabled: true }],
      messageuser: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  save() {
    this.pqrId?.setValue(this.pcc?.value);
    console.log(this.pqrForm.value);
    this.pqrService.create(this.pqrForm.value).subscribe((data: any) => {
      this.result = data;
      this.clearData();
    }, (error) => {
      this.result = error.error;
    });
  }

  getClaims() {
    this.clearData();
    this.pqrService.getAllPccByUserId(this.username?.value).subscribe((data: any) => {
      this.obj.pccs = data.data;
      this.enableFields();
    }, (error) => {
      console.log(error);
    });
  }

  enableFields() {
    this.type?.enable();
    this.messageuser?.enable();
  }

  clearData() {
    this.type?.disable();
    this.type?.reset();
    this.type?.setValue('');
    this.messageuser?.disable();
    this.messageuser?.reset();
    this.pcc?.reset();
    this.pcc?.setValue('');
    this.pcc?.disable();
  }

  getPcc() {
    this.pcc?.reset();
    this.pcc?.setValue('');
    if (this.type?.value !== 3 || this.obj.pccs.length === 0) {
      this.pcc?.disable();
    } else {
      this.pcc?.setValidators(Validators.required);
      this.pcc?.enable();
    }
  }
}
