export class log {
    constructor(text: any);
    text: any;
    end(): log;
    edit(text: any): log;
    getText(): any;
    clear(): log;
}
export class prompt {
    ask(question: any, callback: any): any;
}
