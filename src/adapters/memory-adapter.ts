

class MemoryAdapter{

    jobs: any;

    constructor(config: any){
        this.jobs = new Map();
    }
    saveJob(job: any){
        this.jobs.add(job.id, job);
    }
    getNextPending(type: string){
        let selectedJob;
        for(const job of this.jobs.values()){
            if(job.status == 'pending' && type.includes(job.type)){
                selectedJob = job;
            }
        }
        return selectedJob;
    }
    updateStatus(id: string, status: string){
        const job = this.jobs.has(id);
        if(job.status == 'pending'){
            job.status = 'completed'
        }
        return job;
    }
}
export default MemoryAdapter;