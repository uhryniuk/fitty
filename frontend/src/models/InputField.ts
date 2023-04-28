export enum InputFieldType {
    TEXT = 'text',
    BUTTON = 'button',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
    TEXTAREA = 'textarea',
    DROPDOWN = 'dropdown',
}

const InputStyles = {
    'text': 'form-control input-lg',
    'button': '',
    'checkbox': '',
    'radio': '',
    'textarea': '',
    'dropdown': '',
}

export class InputFieldData {
    type: InputFieldType;
    id: string | null;
    name: string | null;
    value: any;
    placeholder: string | null;
    event: string;
    func: Function;
    args: {};
    styles: string;
    label: string | undefined;

    constructor(type: InputFieldType, id?:string, label?:string | undefined, name?: string,  value?:string, placeholder?:string, event?: string, func?: Function, args?: {}){
        this.type = type;
        this.id = id != undefined ? id : null;
        this.label = label;
        this.name = name != undefined ? name : null;
        this.value = value != undefined ? value : null;
        this.placeholder = placeholder != undefined ? placeholder : null;
        this.event = event != undefined ? event : "";
        this.func = func != undefined ? func : () => {};
        this.args = args != undefined ? args : {};

        this.styles = InputStyles[this.type];
    }
}