import { SocketService } from './socket/socket.service';
import { SocketEventsService } from './socket/socket-event.service';

export class Main {
    constructor() {
        let url = process.env.GAME_ENGINE_URL || 'http://localhost:3001';
        let socketService = new SocketService(url);
        socketService.createSocket();

        let socketEventsService = new SocketEventsService(socketService.getSocket());
        socketEventsService.loadListeners();
    }
}

new Main();