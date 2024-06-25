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

export interface verifyInterface {
    access: string;
    refresh: string;
    ok: boolean;
}

export interface meInterface {
    id: number
    password: string
    last_login: string
    is_superuser: boolean
    username: string
    first_name: string
    last_name: string
    email: string
    is_staff: boolean
    is_active: boolean
    date_joined: string
    isSuspended: boolean
    phone: string
    street: string
    city: string
    state: string
    country: string
    postal_code: string
    about: string
    created_at: string
    updated_at: string
    photo: string
    groups: []
    user_permissions: []
}