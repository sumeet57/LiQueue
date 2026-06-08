

class Job {
    id: string;
    type: string;
    payload: any;
    status: 'pending' | 'active' | 'completed' | 'failed';

    constructor(
        type: string,
        payload: any,
        status: 'pending' | 'active' | 'completed' | 'failed'
    ) {
        this.id = crypto.randomUUID();
        this.type = type;
        this.payload = payload;
        this.status = status;
    }
}

export default Job