import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{

  constructor(public vehicleService:VehicleService,
    public toastrService :ToastrService,
    public router: Router){

 }

 listData:any = []

 ngOnInit(): void {
   let list = JSON.parse(JSON.stringify(this.vehicleService.getList('added_list')));
   this.listData = JSON.parse(list)
   console.log(this.listData)
 }

}
