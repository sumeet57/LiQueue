import Job from "./job";

interface JobData{
    type: string,
    payload: object
}

class Queue{
    adapter: any;

    constructor(adapter: any){
        this.adapter = adapter;
    }

    async add(ctx: JobData){
        const job = new Job(ctx.type, ctx.payload, 'pending');
        await this.adapter.saveJob(job);
        return job;
    }
}

export default Queue;