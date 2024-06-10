export class RoomType {
    roomTypeId: number;
    name: string;
    defaultPrice: number;
    quantity: number;
    isDelete: boolean;
    description: string;
    maxAdult: number;
    maxChildren: number;
    maxPeople: number
    facilities: [
        {
            facilityId: number;
            facilityName: string;
            facilityImage: string;
        }
    ];
    images: string;

    constructor(roomTypeId: number,
        name: string,
        defaultPrice: number,
        quantity: number,
        isDelete: boolean,
        description: string,
        maxAdult: number,
        maxChildren: number,
        maxPeople: number,
        facilities: [
            {
                facilityId: number;
                facilityName: string;
                facilityImage: string;
            }
        ],
        images: string
    ) {
        this.roomTypeId = roomTypeId;
        this.name = name;
        this.defaultPrice = defaultPrice;
        this.quantity = quantity;
        this.isDelete = isDelete;
        this.description = description;
        this.maxAdult = maxAdult;
        this.maxChildren = maxChildren;
        this.maxPeople = maxPeople;
        this.facilities = facilities;
        this.images = images;
    };
}