export interface productDetailInterface {
    id: number;
    track_list: {
        id: number;
        name: string;
        duration: string;
        audio: string;
        coverart: string;
        vinyl: number;
    }[];
    ratings: {
        id: number;
        description: string;
        stars: number;
        created_at: string;
        updated_at: string;
        product: number;
        user: number;
    }[];
    name: string;
    description: string;
    price: string;
    stock: number;
    overall_rating: number;
    available: boolean;
    created_at: string;
    updated_at: string;
    album: string;
    release_date: string;
    condition: string;
    speed: number;
    size: number;
    weight: string;
    image: string;
    category:{
        name:string;
        id:number;
    };
    artist:{
        name:string;
        id:number;
    };
    label:{
        name:string;
        id:number;
    };
    genre:{
        name:string;
        id:number;
    };
}

export interface productInterface {
    id: number;
    name: string;
    price: string;
    image: string;
    stock: number;
    quantity: number;
}