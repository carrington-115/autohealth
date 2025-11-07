# Documentation

# 🩺 AutoHealth RAG — AI-Driven Medical Knowledge System

## 📘 Project Title

_AutoHealth RAG: Responsible AI for Self-Medication and Health Guidance_

---

## 🧩 Project Description

AutoHealth RAG (Retrieval-Augmented Generation) is an AI-based system designed to assist users in _safe self-medication, drug interaction awareness, and symptom analysis, specifically tailored for \*\*Sub-Saharan Africa and India_.  
The system provides _reliable, evidence-based medical insights_ using trusted health data from WHO, CDC, NHS, ICMR, and national health ministries.

---

## ⚠ Problem Statement

Many individuals in low-resource regions rely on _self-medication_ without access to professional healthcare advice, leading to:

- Incorrect drug use or dangerous combinations
- Delayed professional treatment
- Drug resistance and side effects

There is a lack of _AI tools trained on region-specific, verified medical guidelines_ that can safely assist users in these contexts.

---

## 💡 Solution Approach

AutoHealth RAG builds a _trusted medical knowledge base_ using authoritative open-access data.  
It applies a _4-stage AI workflow_:

1. _Auto Checker Workflow_ – Symptom-based diagnostic suggestions and self-medication analysis.
2. _Medication Checker_ – Drug information, safe usage verification, and interaction alerts.
3. _Live Agent Integration_ – Optional human-AI collaboration for personalized advice.
4. _RAG (Retrieval-Augmented Generation)_ – Combines generative AI with verified documents for factual accuracy.

Each medical source undergoes strict _quality validation_ based on:

- Authority (WHO, CDC, etc.)
- Accuracy & recency (within 5 years)
- Relevance to low-resource environments
- Accessibility and open-license availability

---

## 🧠 Technology Stack

| Component             | Technology Used                                    |
| --------------------- | -------------------------------------------------- |
| _AI Model_            | Gemini with RAG (Retrieval-Augmented Generation)   |
| _Data Layer_          | WHO, CDC, ICMR, NHS, Africa CDC open datasets      |
| _Backend_             | NodeJS (Express)                                   |
| _Database_            | MongoDB / MongoDB Vector database (for embeddings) |
| _Frontend_            | React + Vite + TailwindCSS + Shadcn                |
| _Knowledge Embedding_ | LangChain                                          |
| _Deployment_          | Heroku                                             |
| _Version Control_     | Git & GitHub                                       |


---
## More Resources
- Backend Repository: [Backend Repository](https://github.com/carrington-115/autohealth-backend)
- Presentation: [Presentation Slides](https://drive.google.com/file/d/1bWlld9eZFNTxO29U2AJPMylXEpCzpeJ6/view?usp=sharing)
