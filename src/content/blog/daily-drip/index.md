---
title: "The Daily Drip"
description: "a fansite dedicated to aggregating leaks and rumors and publishing best guess speculations of upcoming events for online gacha games Genshin Impact, Honkai: Star Rail, Wuthering Waves, and Zenless Zone Zero"
publishDate: "2024-01-15"
heroImage: 'daily-drip-main-1.png'
tags: ['astro','svelte', 'directus' ]
---

This started out as a simple message in a personal Discord server that was pinned and edited but eventually moved to the web when a similar carrd.co reference became unreliable. Currently in its third design iteration, I used this project to experiment with using a Directus backend to manage data and asset management along with learning to be more comfortable with making HTTP requests to an external API with both a server and static environment. I originally integrated imgproxy to manage asset transformations for the whole site but later switched to Directus' built in asset transformation endpoint and wrote a couple of extensions for Directus to extract and display color palettes from uploaded images. My main goal with this redesign was to create completely responsive card component that could be used regardless of the amount of slots in a grid. I also was able to fix the settings feature from v2 and the times display no longer require me hand caculating all the times for each server region.

![v1]('./daily-drip-main-2.png')