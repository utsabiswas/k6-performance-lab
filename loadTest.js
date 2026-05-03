import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 10, 
  duration: '10s', 
  iterations: 10,
};

export default function () {
  let res = http.get('https://chaldal.com');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1); 
}


export function handleSummary(data){
    return {
     'G:/K6/summary.json': JSON.stringify(data),
    };
}