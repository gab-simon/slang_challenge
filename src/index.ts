import confetti from 'canvas-confetti';
import { ERROR, UserSessionIN, UserSessionOUT } from './consts';
import userService from './service';
import moment from 'moment';
import { GroupBy, teste } from './teste';

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

/* First Step */
const response = await userService
  .listUser()
  .then((success: any) => {
    console.log(success?.data);
    let x: UserSessionIN[] = [
      {
        activities: [
          {
            id: 198891,
            user_id: 'emr5zqid',
            answered_at: '2021-09-13T02:38:34.117-04:00',
            first_seen_at: '2021-09-13T02:38:16.117-04:00',
          },
          {
            id: 43990,
            user_id: 'emr5zqid',
            answered_at: '2021-09-13T02:42:07.117-04:00',
            first_seen_at: '2021-09-13T02:41:51.117-04:00',
          },
          {
            id: 37191,
            user_id: 'emr5zqid',
            answered_at: '2021-09-14T00:31:36.117-04:00',
            first_seen_at: '2021-09-14T00:31:25.117-04:00',
          },
          {
            id: 37133,
            user_id: 'emr5zqid',
            answered_at: '2021-09-14T00:37:51.117-04:00',
            first_seen_at: '2021-09-14T00:31:25.117-04:00',
          },
          {
            id: 17133,
            user_id: 'brr5zqid',
            answered_at: '2021-09-14T00:37:42.117-04:00',
            first_seen_at: '2021-09-14T00:31:25.117-04:00',
          },
          {
            id: 27133,
            user_id: 'brr5zqid',
            answered_at: '2021-09-14T00:37:36.117-04:00',
            first_seen_at: '2021-09-14T00:31:25.117-04:00',
          },
        ],
      },
    ];

    validateSession(x);
  })
  .catch((error: any) => {
    let errorStatus = error?.response?.status;

    if (errorStatus === ERROR.Unauthorized) {
      console.log('401 - Unauthorized');
    } else if (errorStatus === ERROR.BadRequest) {
      console.log('400 - Bad Request');
    } else if (errorStatus === ERROR.TooManyRequests) {
      console.log('429 - Too many requests ');
    } else {
      console.log('error!');
    }
  });

/* Second Step */

function validateDate(answered: string, firstSeen: string) {
  var answeredDateTime = moment(answered, 'DD-MM-YYYY hh:mm:ss')
    .subtract(5, 'minutes')
    .format('DD/MM/YYYY hh:mm:ss');

  var firstSeenDateTime = moment(firstSeen, 'DD-MM-YYYY hh:mm:ss').format(
    'DD/MM/YYYY hh:mm:ss',
  );

  if (answeredDateTime > firstSeenDateTime) return true;
  return false;
}

function validateSession(data: UserSessionIN[]) {
  const dataA = data[0].activities.map((el: any, index: number) => {
    activities: {
      if (validateDate(el.answered_at, el.first_seen_at)) {
        createNewSession([el]);
      }
    }
  });

  return dataA
}

function validateSeconds(answered: string, firstSeen: string) {
  var answeredDateTime = moment(answered, 'DD-MM-YYYY hh:mm:ss');
  var firstSeenDateTime = moment(firstSeen, 'DD-MM-YYYY hh:mm:ss');

  var duration = moment.duration(answeredDateTime.diff(firstSeenDateTime));
  var seconds = duration.asSeconds();

  return seconds;
}

function formatToPost(data: any[]) {
  return data.map((el: any) => ({
    user_id: el.user_id,
    duration_seconds: validateSeconds(el.answered_at, el.first_seen_at),
    started_at: el.first_seen_at,
    ended_at: el.answered_at,
  }));
}

async function createNewSession(userData: any[]) {
  console.log(userData)
  const testeee = formatToPost(userData);

  // console.log('here', testeee);
  // console.log('here',teste);

  /*These user session objects should:
- Be grouped by the user_id.
- Be ordered by their started_at.
- Have the list of activity ids that belong in the session
- Have a started_at (which corresponds to the first_seen_at of the first activity in the session)
- Have an ended_at (which corresponds to the answered_at of the last activity in the session)
- Have a duration in seconds (which should be the difference between the started_at and
ended_at).
- Pay close attention to the format of the sample JSON object below!*/

  // const response = await userService
  // .storeUser(data[])
  // .then((success: any) => {
  //   console.log(success?.data);
  // })
  // .catch((error: any) => {
  //   let errorStatus = error?.response?.status;
  //   if (errorStatus === ERROR.Unauthorized) {
  //     console.log('401 - Unauthorized');
  //   } else if (errorStatus === ERROR.BadRequest) {
  //     console.log('400 - Bad Request');
  //   } else if (errorStatus === ERROR.TooManyRequests) {
  //     console.log('429 - Too many requests ');
  //   } else if (errorStatus === ERROR.NoContent) {
  //     console.log('204 - Too many requests ');
  //   }else {
  //     console.log('error!');
  //   }
  // });
}
