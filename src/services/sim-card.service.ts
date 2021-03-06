import { Injectable } from "@angular/core";
import { SimCardModel } from "../pages/model/sim-card-model";
import { map, catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { from } from "rxjs/observable/from";
@Injectable()
export class SimCadService{
    json = [
        {
            "status":"Activo",
            "name":"uriel",
            "ubicacion":"x.avatar_url",
            "id":1,
            "consumo":98
        },
        {
            "status":"Activo",
            "name":"Irvin",
            "ubicacion":"x.avatar_url",
            "id":2,
            "consumo":90
        },
        {
            "status":"Inactivo",
            "name":"Victor",
            "ubicacion":"x.avatar_url",
            "id":3,
            "consumo":2
        },
        {
            "status":"Activo",
            "name":"Pepe",
            "ubicacion":"x.avatar_url",
            "id":4,
            "consumo":2
        },
        {
            "status":"Inactivo",
            "name":"x.name",
            "ubicacion":"x.avatar_url",
            "id":5,
            "consumo":2
        },

        {
            "status":"Inactivo",
            "name":"Tania",
            "ubicacion":"x.avatar_url",
            "id":6,
            "consumo":2
        },
        {
            "status":"Activo",
            "name":"Ivette",
            "ubicacion":"x.avatar_url",
            "id":7,
            "consumo":2
        },
    ];
    constructor(){}
    getInfoCard(){
        return from(this.json).pipe(
            map((x:any)=>{
                let simCardObj = new SimCardModel();
                simCardObj.status=x.status;
                simCardObj.name=x.name;
                simCardObj.ubicacion=x.ubicacion;
                simCardObj.id=x.id;
                simCardObj.consumo=x.consumo;
                return simCardObj;
            }),
            catchError(this.handleError)
        );
    }
    handleError(error: any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server Error');
        //lo de arriba es igual al de abajo
        //return Observable.throw(error.json() !=null ? error.json : 'Server Error');//throw es la excepcion de tipo observable
    }
    modificStatus(id, status: string){
        this.json[id].status=status;
    }
}