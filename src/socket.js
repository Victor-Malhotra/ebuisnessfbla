import { io } from 'socket.io-client';

const URL = 'http://localhost:5000/';
const socket = io(URL, {
  autoConnect: false,
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  secure: true,
  agent: false,
  upgrade: false,
  rejectUnauthorized: false,
  query: `id=${JSON.parse(localStorage.getItem('user'))?._id}`,
});

export default socket;
