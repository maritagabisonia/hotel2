
export class RoomType {
    checkinDate: Date;
    checkoutDate: Date;
    numberofAdults: number;
    numberofChildren: number;


    constructor(checkinDate: Date,
        checkoutDate: Date,
        numberofAdults: number,
        numberofChildren: number
    ) {
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
        this.numberofChildren = numberofChildren;
        this.numberofAdults = numberofAdults;


    };
}