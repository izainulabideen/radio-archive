---
title: "The Transcriber Technology"
excerpt: "Early in the radio-archive project we were faced with the high market costs of transcribing millions of hours of continuous audio."
coverImage: "/assets/product/product-3.jpg"
date: "2020-03-16T05:35:07.322Z"
author: 
    name: Radio Archive
    picture: "/assets/product/product-3.jpg"
ogImage: 
    url: "/assets/product/product-3.jpg"
---

Early in the radio-archive project we were faced with the high market costs of transcribing millions of hours of continuous audio. Just for the first 500,000 hours we had already recorded it would have cost over $253,000 using AWS Transcribe (based on Amazon's own cost estimator). Over 50 cents per hour and that's just for the transcribe calls; not even the whole batch processing solution! We needed to figure out how to do this and keep the total costs closer to 1 cent / hour yet still do it quickly. And if we could leverage any old Nvidia gaming GPUs we had lying around perhaps we could bring this cost down even further.

So we set upon building a self managing (whisper based) distributed transcription processing appliance strictly to solve our own problem. The whisper part is in ()'s because the transcriber part is swappable but we have not found a faster/more accurate option than (OpenAI's) ***[Whisper](https://cdn.openai.com/papers/whisper.pdf)*** . This appliance saved us over $200,000 in processing costs! It even scales up and down automatically as we add/remove GPU hardware from our pool. If you need to transcribe 10's of thousands to hundreds of thousands of hours per month with high accuracy (from 86% - 96% depending on settings), it could save you too. (contact us directly for ***[details](https://s3.amazonaws.com/radio-archive.org.site/transcribe.html)*** )
