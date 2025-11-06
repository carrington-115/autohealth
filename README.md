# Documentation
# 🩺 AutoHealth RAG — AI-Driven Medical Knowledge System

## 📘 Project Title
*AutoHealth RAG: Responsible AI for Self-Medication and Health Guidance*

---

## 🧩 Project Description
AutoHealth RAG (Retrieval-Augmented Generation) is an AI-based system designed to assist users in *safe self-medication, drug interaction awareness, and symptom analysis, specifically tailored for **Sub-Saharan Africa and India*.  
The system provides *reliable, evidence-based medical insights* using trusted health data from WHO, CDC, NHS, ICMR, and national health ministries.

---

## ⚠ Problem Statement
Many individuals in low-resource regions rely on *self-medication* without access to professional healthcare advice, leading to:
- Incorrect drug use or dangerous combinations  
- Delayed professional treatment  
- Drug resistance and side effects  

There is a lack of *AI tools trained on region-specific, verified medical guidelines* that can safely assist users in these contexts.

---

## 💡 Solution Approach
AutoHealth RAG builds a *trusted medical knowledge base* using authoritative open-access data.  
It applies a *4-stage AI workflow*:

1. *Auto Checker Workflow* – Symptom-based diagnostic suggestions and self-medication analysis.  
2. *Medication Checker* – Drug information, safe usage verification, and interaction alerts.  
3. *Live Agent Integration* – Optional human-AI collaboration for personalized advice.  
4. *RAG (Retrieval-Augmented Generation)* – Combines generative AI with verified documents for factual accuracy.

Each medical source undergoes strict *quality validation* based on:
- Authority (WHO, CDC, etc.)  
- Accuracy & recency (within 5 years)  
- Relevance to low-resource environments  
- Accessibility and open-license availability  

---

## 🧠 Technology Stack

| Component | Technology Used |
|------------|-----------------|
| *AI Model* | Gemini with RAG (Retrieval-Augmented Generation) |
| *Data Layer* | WHO, CDC, ICMR, NHS, Africa CDC open datasets |
| *Backend* | NodeJS (FastAPI) |
| *Database* | MongoDB / MongoDB Vector database (for embeddings) |
| *Frontend* | React + Vite + TailwindCSS + Shadcn |
| *Knowledge Embedding* | LangChain |
| *Deployment* | Heroku |
| *Version Control* | Git & GitHub |
