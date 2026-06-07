

class Job {
    type: string;
    payload: any;
    status: 'pending' | 'active' | 'completed' | 'failed';

    constructor(
        type: string,
        payload: any,
        status: 'pending' | 'active' | 'completed' | 'failed'
    ) {
        this.type = type;
        this.payload = payload;
        this.status = status;
    }
}