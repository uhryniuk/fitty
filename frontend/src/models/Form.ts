
import type { InputFieldData } from "./InputField";

export class Form {
    title: string;
    fields: InputFieldData[];
    subform: Form[] | undefined = [];

    constructor(title: string, fields: InputFieldData[], subform?: Form[]){
        this.title = title;
        this.fields = fields;
        this.subform = subform;
    }

}