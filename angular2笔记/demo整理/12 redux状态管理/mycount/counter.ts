import { ActionReducer, Action, } from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


export const counterReducer=(state:any=[], action:Action)=> {
	switch (action.type) {
		case "getData":
			 return action.payload;

        case "addData":
			 return action.payload;

		case "deleteData":
			 return action.payload;

		case "selectData":
		     return action.payload;

		default:
			return state;
	}
}

