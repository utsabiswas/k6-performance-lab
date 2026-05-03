import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 10, // মানে ১০টা ইউজার একসাথে হিট করবে
  duration: '10s', // মানে এই হিট চলবে 10 সেকেন্ড
  iterations: 10,
};

export default function () {
  let res = http.get('https://chaldal.com');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1); // ইউজার গ্যাপ
}


export function handleSummary(data){
    return {
     'G:/K6/summary.json': JSON.stringify(data),
    };
}