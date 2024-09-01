---
slug: dotfiles
title: Dotfiles
sourceLink: https://github.com/nmusey/dotfiles 
summary: Files to reproduce my development setup on any Unix-like computer
---

I recently started reevaluating my development setup. Since I spend my entire professional and part of my personal site with it, I decided to put some thought into how it is set up. 

## Requirements
There were two main requirements for the setup:
 1. I have to be able to access the exact same setup from any computer (work and personal).
 2. My hands must be able to stay on the keyboard (for the *speed*)

As a third less important requirement, I wanted to fiddle with some tools and learn something along the way, because I enjoy that kind of thing. With these requirements in mind, this article is what I decided to use as a development environment.

## Text Editor (Neovim)
In university I used Jetbrains editors with vim keybinds for faster navigation. I learned to love using the keyboard and hotkeys but found the products had a few shortcomings. Most importantly, the keybindings had more friction than using a mouse, so I was slow to learn them. Instead of figuring out file navigation with the keyboard, I would want to get working on whatever it was I was working on, and would reach for the mouse. I did grow quite accustomed to the vim keybinds however, and decided to start learning a bit more about vim itself. Without entering into the world of customization, vim is not suited for someone used to modern features in an IDE so I moved onto VSCode. Something about that program and my brain don't click however, it's not quite as full featured as Jetbrains products (even with twice as many extensions installed) and doesn't have the same feeling of speed that Vim has. Then I stumbled across Neovim and the world of customizing it. I grew comfortable with a set of configurations and started using them for work, becoming more productive than with previous editors. There were still some shortcomings, but after a month or two of using Neovim as a daily text editor in my personal and professional life I grew to love it. Having a public dotfiles repository even allowed me to have an identical experience across machines and virtual machines.

## TMUX
If Neovim was taking up the terminal screen, I needed to have multiple tabs open and be able to switch between them without touching the mouse. Along comes tmux, which streamlines that experience. I use it to have certain programs always set to certain keys. For example, I know without looking that my first tab will be a terminal open to the project I'm working on, the second will be Neovim, and the third will be the output from running what I'm working on. As an added bonus, this means I can use familiar tabs across an SSH connection, and am experimenting with extensions that will keep my session running between reboots of the computer. 

## The Shell
I like zsh with a custom theme as my shell. Learning to create a custom theme had two main advantages. First of all, it was fun to fiddle with and learn about how zsh themes work. At the end of the day, it's just a bash script that sets a few environment variables. Second, it is much lighter weight than using something like `oh-my-zsh`. The latter is a great option to quickly get started but anyone who spends enough time in a terminal should consider a custom theme simply for the speed. I still use plugins from the `oh-my-zsh` repository but load them using [antidote](https://github.com/mattmc3/antidote) instead, which also has a faster startup speed. As an added bonus, I like a minimal theme for my shell with only essential information, and this approach allows me to have exactly the experience I enjoy.
