# 🚀 k6 Performance Testing Project

This repository contains my hands-on practice with **k6** for API performance and load testing. It demonstrates how to execute tests, analyze results, and generate detailed HTML reports to understand system behavior under load.

---

## 📌 Project Overview

- Tool: **k6**
- Purpose: API Performance & Load Testing
- Reporting: **k6-html-reporter**
- Language: JavaScript

This project focuses on measuring response time, validating API responses, and identifying performance bottlenecks.

---

## ⚙️ Features

- ✅ API Load Testing using k6  
- ✅ Response Validation (Status Code Checks)  
- ✅ Performance Metrics Analysis  
- ✅ HTML Report Generation  
- ✅ Beginner-Friendly Structure  

---

## 🧪 Test Summary

- ✔️ Total Requests: **10**
- ✔️ Pass Rate: **100%**
- ❌ Failed Requests: **0%**

---

## 📊 Performance Insights

| Metric                  | Value |
|------------------------|-------|
| Avg Response Time      | ~6.2 sec ⚠️ |
| Max Response Time      | ~12 sec 🚨 |
| Requests per Second    | ~0.68 |
| Data Received          | ~17 MB |
| Data Sent              | ~92 KB |

---

## 🔍 Detailed Analysis

### ⏱️ Response Breakdown

- **http_req_waiting (TTFB):** ~531 ms ✅  
- **http_req_receiving:** ~5704 ms ⚠️ (Main bottleneck)  
- **http_req_connecting:** ~378 ms  
- **TLS Handshaking:** ~735 ms  

👉 Most of the delay is caused during **data receiving**, indicating slow response delivery from the server.

---

## 🚨 Key Observations

- ✔️ API is stable (no failures)
- ⚠️ Performance is slow (high response time)
- ❗ Some requests take up to **12 seconds**
- 📉 Needs optimization for better user experience

---

## 📂 Project Structure
```
K6/
│── script.js # k6 test script
│── summary.json # Raw test result
│── generate-report.js # HTML report generator
│── report.html # Final report
│── package.json
```

---

## ▶️ How to Run

### 1️⃣ Install dependencies
```bash
npm install
```
```
k6 run script.js --summary-export=summary.json
```
``` 
Generate HTML report
node generate-report.js


Learning Outcomes
Understanding Performance Testing fundamentals
Analyzing response time breakdown
Identifying system bottlenecks
Generating readable reports
Working with real-world testing tools
```

