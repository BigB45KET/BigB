import { Component } from '@angular/core';
import { Details } from './details';
import { FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
    selector:'doc-comp',
    templateUrl:'./doc.component.html',
    styleUrls:['./doc.component.css']

})

export class DocumentComponent{

    //private details:Details;
    private details:Details=new Details();
    //constructor(private details:Details){

    //}
    private fileUp:any;
    public decide=false;

    
        userForm=new FormGroup({
            AddharNo:new FormControl(),
            PanCardNo:new FormControl(),
            BankAcNo:new FormControl(),
            Nominee:new FormControl(),
            Documents:new FormGroup({
                PoliceVerification:new FormControl(Validators.required),
                PanCard:new FormControl(),
                NomineeDetails:new FormControl()
            })

        })

    constructor(){

    }

    onSubmit(){
        console.log(this.details);
    }
    dispplay(){
        this.decide=true;
    }
    
}