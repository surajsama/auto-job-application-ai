# CLAUDE.md

## Project Overview

Auto Job Application is an AI-powered system that helps users discover jobs, tailor resumes, and manage applications using modular agents.

---

## Core Rule (Non-Negotiable)

Always start in **Plan Mode** for:

* new features
* architecture changes
* agent creation
* database changes

---

## File Boundaries

### Safe to edit:

* /src/
* /docs/
* /tasks/

### NEVER touch:

* /node_modules/
* /.git/
* lock files
* environment configs (unless explicitly told)

---

## Architecture Rules

* Use **TypeScript only**
* Follow **modular structure**
* No large monolithic files
* Each feature must live in its own module

---

## Agent Design Rules

* Each agent has ONE responsibility
* Agents must be:

  * reusable
  * testable
  * isolated

### Example agents:

* job-scraper-agent
* matcher-agent
* resume-agent
* apply-agent

---

## AI Safety Rules

* NEVER fabricate user experience or credentials
* If unsure → mark as LOW CONFIDENCE
* Prefer omission over hallucination

---

## Workflow Rules

1. Plan first
2. Then implement
3. Then validate
4. Then document

---

## Coding Standards

* Descriptive file names
* Small functions
* Reusable utilities
* Shared types

---

## Permissions

* Plan Mode → architecture work
* Normal Mode → development
* Auto-Accept → only safe zones

---

## Review Checklist

Before finishing any task:

* [ ] Code compiles
* [ ] No fake data
* [ ] Follows CLAUDE.md rules
* [ ] Clean structure
* [ ] No unnecessary complexity
