# Broken Connections
A game for Hidden Heroes Jam 2023

# What is this?
March 1980.

Glenn Wichman and Michael Toy, students at the University of California, share an apartment in Santa Cruz, California.

The development of the first versions of rogue, a game that decades later would spawn an entire genre, and whose design would influence video games in general, is taking place here. Using a video terminal and a 300 baud modem, the two young friends connect to a computer located in a basement at the university, long nights of coding and design before the rise of the videogames industry.

And then, the unthinkable happened. The connection to the computer is broken, and the work done during the weekend is at risk of being lost. There is only one way to fix it: Glenn should venture into the depths of the communications center, and restore the connection before it's too late.

But on his way to the computer: humans. And within the interaction with them the opportunity of being a kind, honest person, or just brush them away. What will you do?

# Local Development Server

Local development can occur in two flavours: *web*, or *electron*. In both environments, changes to your source are hot-reloaded.

## Web

* `npm install`
* `npm run web:pixi`

## Electron

* `npm install`
* `npm run electron:pixi`

# Building and Distribution

Distribution files are also seperated by either *web* or *electron* targets.

## Web

* `npm run build:web:pixi`
* Directory `dist/web` will contain the web directory contents you can serve or FTP

## Electron

* `npm run package:<one of *win32*, *mac* or *linux*>:pixi`
* Directory `dist` will contain the distribution folders for the given platform


# Credits
* Created from JavaScript Roguelike Template https://github.com/slashman/jsrl
* Uses PIXI.JS for display

# LICENSE

MIT License

Copyright (c) 2017-2023 Santiago Zapata

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
