

class MemoryAdapter{

    job: any;

    constructor(config: any){
        this.job = new Map();
    }

    saveJob(job: any){
        this.job.add(job.id, job)
    }
}