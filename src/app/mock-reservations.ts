import { User } from './User'
import { Service } from './Service'
import { Reservation } from './Reservation'


export const RESERVATIONS: Reservation[] = [
    {
        id:'1',
        userId:'1',
        service:'Hair dye',
        reservationDateTime:'12/12/20; 11:30',
        reservationDuration:'60 min',
    },
    {
        id:'2',
        userId:'2',
        service:'Birthday',
        reservationDateTime:'30/01/20; 12:00',
        reservationDuration:'10 min',
    },
    {
        id:'3',
        userId:'1',
        service:'Eye checkup',
        reservationDateTime:'04/04/22; 08:00',
        reservationDuration:'60 min'
    }
]

export const SERVICES: Service[] = [
    {
        id:'1',
        name:'Hair dye'
    },
    {
        id:'2',
        name:'Eye checkup'
    },
    {
        id:'3',
        name:'Birthday'
    },
    {
        id:'4',
        name:'Dinner'
    }
]

export const USERS: User[] = [
    {
        id:'1',
        name:'Jussi Sakari',
        email:'jsatuaho@hotmail.com',
        password:'parmalat'
    },
    {
        id:'2',
        name:'Sampo Tapio',
        email:'SampoTS@wurth.fi',
        password:'ErinPateSebu'
    },
    {
        id:'3',
        name:'Olli Ilmari',
        email:'pinkku.os@valmet.fi',
        password:'caipirinha'
    }
]