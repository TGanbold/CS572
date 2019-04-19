import { Component } from "@angular/core";
import { DataServiceService } from '../data-service.service';

@Component({
    selector: `app-users`,
    template: `
        <div *ngFor="let user of users">
        <a [routerLink]="['users',user.login.uuid]" (click)="sendUUID(user.login.uuid)">
        Id: {{user.id.value}},Name: {{user.name.first}},Email: {{user.email}}
        </a>
        </div>            
        `,
    styles: [``]
})
export class UsersComponent{
    title = 'Users component';
    users:any;
    constructor(private dataService: DataServiceService){ }
    
    sendUUID(id){
        this.dataService.emitValue(id);
    }  

    ngOnInit(){
        this.users = this.dataService.getCachedData();
    }
   
}