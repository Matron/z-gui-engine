import * as io from "socket.io-client";
import * as util from "util";

export class SocketService {
    private socket: SocketIOClient.Socket;
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    createSocket() {
        try {
            this.socket  = io(this.url);
            util.log(`Connecting to socket: ${this.url}`);
        } catch (error) {
            util.error(`Error connecting to socket: ${this.url}`);
            throw error;
        }
    };
    
    getSocket() {
        return this.socket;
    };    
}
