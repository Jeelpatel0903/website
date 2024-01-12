import { Component, OnInit } from '@angular/core';
import { UserauthserviceService } from './../../services/userauthservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private api: UserauthserviceService) { }

  ngOnInit(): void {
  }

  registerFunction(data: any) {
    this.api.userregisterapi(data).subscribe((result) => {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    })
  }

}


