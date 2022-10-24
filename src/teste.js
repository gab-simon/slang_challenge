let userData = [
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
          answered_at: '2021-09-14T00:37:36.117-04:00',
          first_seen_at: '2021-09-14T00:31:25.117-04:00',
        },
        {
          id: 17133,
          user_id: 'brr5zqid',
          answered_at: '2021-09-14T00:37:36.117-04:00',
          first_seen_at: '2021-09-14T00:31:25.117-04:00',
        },
        {
          id: 27133,
          user_id: 'brr5zqid',
          answered_at: '2021-09-14T00:37:36.117-04:00',
          first_seen_at: '2021-09-14T00:31:25.117-04:00',
        },
  ];


// export function GroupBy(params) {
    
// }



export const teste = userData.reduce(function (previous, current) {
    if (!previous[current.user_id]) {
      previous[current.user_id] = [];
    }

    previous[current.user_id].push(current)
  
    return previous;
  }, {}); // tried to figure this out, help!!!!!
  console.log('aaaaa',teste);