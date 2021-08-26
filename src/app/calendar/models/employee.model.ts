interface IEvent {
    from: string;
    to: string;
    type: string;
}

export interface IEmployee {
    _id: string;
    firstName: string;
    lastName: string;
    manager: string;
    events: Array<IEvent>;
}