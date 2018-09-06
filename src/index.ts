import { SocketService } from './socket/socket.service';
import { SocketEventsService } from './socket/socket-event.service';

export class Main {
    constructor() {
        let socketService = new SocketService('http://localhost:3001');
        socketService.createSocket();

        let socketEventsService = new SocketEventsService(socketService.getSocket());
        socketEventsService.loadListeners();
    }
}

new Main();