import { SocketService } from './socket/socket.service';
import { SocketEventsService } from './socket/socket-event.service';

export class Main {
    constructor() {
        console.log(process.env.GAME_ENGINE_URL);
        let url = process.env.GAME_ENGINE_URL || 'https://z-game-engine.herokuapp.com/';
        let socketService = new SocketService(url);
        socketService.createSocket();

        let socketEventsService = new SocketEventsService(socketService.getSocket());
        socketEventsService.loadListeners();
    }
}

new Main();