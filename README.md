# Better Than Steam: Game Recommendation Service

![Our landing page. The title has a simple typing effect made possible with a short Javascript function](/assets/landingPage.png "The landing page")

## Development Process

This is Andrew and Aaron's module 2 project for Flatiron School. It is a simple game recommendation service that uses an API that originally has 300,000+ titles
We used a loop and http/net params to slim the data down to 50 titles as this API was formatted in such a way in which we could not make more than a certain amount of requests per second.

![This is what our result page looks like.](/assets/results.png "Sample result")

Aaron wrestled with the API for about two days until we were finally able to attain a usable dataset, meanwhile Andrew designed the front end. This application filters the data pool by the genre and platform parameters. As this is such a small dataset, our originally planned optional search bar does not function. It would be nearly pointless to search by title in such way, as your result will likely not be shown. Aaron managed to get the filter working after a few hours as, again, unexpected results were occurring.

![Here's our search page, Andrew created a simple navbar so one could always return to the landing page](/assets/searchPage.png "The search page")

## Prerequisites
This is how you can get this page running yourself

### What To Install

``Rails, and a basic localhost server, lite-server is easy to use on a command line``



## Built With
<ul>
    <li>HTML, CSS, JavaScript - Frontend </li>
    <li>Ruby on Rails - Backend</li>
</ul>

## Video Example of Program Running
(Sorry about the name flashing at the end, we're experiencing a problem with fetch.)
Using the page we built [YouTube]("https://www.youtube.com/watch?v=f5hX6kgYKOY&feature=youtu.be")

This project has proven to be harder in someways, yet overall a lot easier and smoother as a process, compared to the module 1 project. This is the last duo project of the program and mods 3, 4, and 5 are all solo. 