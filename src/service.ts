import { AxiosRequestConfig } from 'axios';
import api from './api';
import { UserSessionOUT } from './consts';

// export interface UserSessionOUT {
//   user_sessions: { [key: string]: ActivityOUT[] };
// }

// export interface ActivityOUT {
//   ended_at: Date;
//   started_at: Date;
//   activity_ids: number[];
//   duration_seconds: number;
// } 

const userService = {
  listUser: () => api.get(''),
  storeUser: (data: UserSessionOUT) => api.post('/sessions', data),
};

export default userService;
