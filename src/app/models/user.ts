export class User{
    
    constructor(
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public country?: string,
        public age?: number,
        public isMale?: boolean,
        public hobby?: Array<string>,
        public comments?: string,
        public visits?: Array<Date>
    ){}

    public hasHikingHobby() : boolean{
        if(this.hobby && this.hobby.length > 0){
            return this.hobby.find((el) => el == 'Hiking') !== undefined
        }
            
        return false;
    }

    public hasSwimmingHobby() : boolean{
        if(this.hobby && this.hobby.length > 0){
            return this.hobby.find((el) => el == 'Swimming') !== undefined;
        }
            
        return false;
    }

    public hasRunningHobby() : boolean{
        if(this.hobby && this.hobby.length > 0){
            return this.hobby.find((el) => el == 'Running') !== undefined;
        }
            
        return false;
    }
}
