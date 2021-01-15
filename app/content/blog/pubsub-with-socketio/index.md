---
title: Publish Subscribe with Socket.IO in Node JS
date: "2021-01-06T07:26:03.284Z"
description: "A quick tips how to use publish and subscribe design pattern in Node JS with Socket.IO"
categories: [code]
comments: true
---

In this post, I would like to share my experience/approach for my hack in applying Socket.io with EventEmitter in NodeJS

> **Attention!** This solution might **NOT be optimal and clean**. There are 2 reasons: 1) time constraint and stakeholders' pressure (common issues in this industry) that made me could not apply better architecture methods and practices. I put some my own reflections at the end of this post. 2) I am still learning :). I hope that you could share some ideas, questions, or feedback to my approach in the discussion below!

## Pre-requisites

- Read this [article](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf) OR Pub/sub layer architecture
- Basic of EventEmitter in NodeJS
- Basic of socket.io

## Motivations

- At that time, the architecture is following suggestions in this [article](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf)
- One day, the stakeholders request to build live-update communication from the server.
- Browsing internet and found socket.io
- Since this architecture has pubs/subs layer, it would be interesting to combine socket.io with it.

## 1) The Hack! (How it works)

### a. Prepare the sockets

### b. Prepare the pub/sub layer

### c. Connect the pub-sub

## 2) Examples

### Send notifications (server-side)

### Receive notification (client-side)

## 3) Self-reflections

- Might consider better approaches to make it a lot simpler and cleaner.
- Should have used Redis to cache and handle the pub/sub layers
