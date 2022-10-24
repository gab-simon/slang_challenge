// export const token = 'MTE3Oi80K0VTdzdTTlpmb084MHJLSlNIcUtKU1FMSUYyVFlpTC9mTmNCQ2ZwWkU9';
export const token = '612|MDVI1kd5q5XhPHE2fY9es35bZK80uqvVeCu43zQ3';
// export const api = 'https://jsonplaceholder.typicode.com/posts/1';
export const baseURL =
  'https://api.contadigital.qrcard.tec.br/api/digital-account/wallet';

export enum ERROR {
  Unauthorized = 401,
  BadRequest = 400,
  TooManyRequests = 429,
  NoContent = 204,
}

export interface UserSessionOUT {
  user_sessions: { [user_id: string]: ActivityOUT[] };
}

export interface ActivityOUT {
  ended_at: Date;
  started_at: Date;
  activity_ids: number[];
  duration_seconds: number;
}

export interface UserSessionIN {
  activities: ActivityIN[];
}

export interface ActivityIN {
    id:            number;
    user_id:       string;
    answered_at:   string;
    first_seen_at: string;
}
