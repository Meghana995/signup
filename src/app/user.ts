export class User {
    constructor(
        public referral:any,
        public firstName:string,
        public lastName:string,
        public email:string,
        public countryCode:any | null,
        public phone:number | null,
        public password: any | null,
        public confirmPassword: any | null,
        public subscribe:boolean

    ){}

    
}
