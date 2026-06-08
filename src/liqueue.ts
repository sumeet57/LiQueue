import MemoryAdapter from "./adapters/memory-adapter";
import Queue from "./queue";

interface config{
    adapter: string,
}
interface job{
    title: string,
    payload: object
}

class LiQueue{

    title: string;
    adapter: any;
    queue: any;


    constructor(
        title: string,
        adapter : any,
    ){
        this.title = title,
        this.adapter = adapter,
        this.queue = new Queue(this.adapter);
    }

    static create(title: string, c: config){
        let adapterinstance;
        switch(c.adapter){
            case 'memory':
                adapterinstance = new MemoryAdapter(c);
                break;
            default:
                adapterinstance = new MemoryAdapter(c);
                break;
        }

        return new LiQueue(title, adapterinstance);
    }

    async add(ctx: job){
        return this.queue.add(ctx);
    }
    
}