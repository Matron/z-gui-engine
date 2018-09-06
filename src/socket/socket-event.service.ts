import * as util from "util";

export class SocketEventsService {
    private socket: SocketIOClient.Socket;

    constructor(socket: SocketIOClient.Socket) {
        this.socket = socket;
    }

    loadListeners() {
        this.socket.on('disconnect', function() {
            util.log('Socket disconnected');
        });
        
        this.socket.on('connect', function() {
            util.log('Socket connected');
        });
    }
}
