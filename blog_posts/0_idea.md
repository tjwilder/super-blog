# The Idea
by T.J. Wilder (2019-03-30)

So I'm creating a blog...

I mean, obviously. In case you haven't noticed, this is the blog that I'm creating. Well, if you're reading it then it's already created to some extent but let's ignore that for now.

The purpose of the blog is not only to create a blog and write about stuff, but to write about the creation of the blog. That being the case, the natural first post should be about the blog itself.

The blog will focus on technical, logistical, operational, and stylistic-al challenges and directions in the creation of the blog itself. The first few posts (after this one) will be about actually setting up the blog itself. I'll talk about things like creating the basic website template, making a basic server, and hosting it in the cloud.

If you've done a lot of web development, then you'll probably find most of what I'm doing to be pretty basic stuff, but if you're new (or just new to the specific technologies), then I encourage you to stick around through my journey in learning about how to make a real website.

The whole project is open source (on [GitHub](https://github.com/tjwilder/super-blog)), so feel free to take a look at the current progress. 

## The Plan
So what exactly is the plan for the blog? Well there's a few main requirements, some complex additions, and numerous possible extensions. I'll talk about the technology choices in separate blog posts, but all the technologies in the main section are only the starting technologies.
Main Requirements (all the technologies are "for now"):
- Make _a_ front-end (React with Redux)
- Make a back-end (Node.js with Express)
- Deploy the website (Google's GCP)
- Make the website actually look decent (perhaps using Bootstrap)

So ok, that seems kind of standard. If anything, even Redux is probably a bit overkill for a simple blog. But the point is to learn the technologies. And not just those technologies.

The eventual goal is to have _everything_ implemented in multiple different ways, but in a way that they can work together. Many of them probably won't play nice so "work together" is fairly loose. But I should be able to, with a couple lines of code or a config change, run the same site on a different technology stack.

One simple version of this, is that I could have a staticly compiled React app, and serve it with different back-ends. When I deploy the server, I could change a flag to switch between "Express", "Rails", or "Static files in Amazon S3".

Depending on what I want to learn next (or based on reader suggestions), I will try to add new technologies to the existing codebase such that you can switch between them and compare them in as simple a way as possible. Along the way, the blog posts will not only talk about the specific technology, but also about the integration into the project as a whole. For some it may be as simple as a flag on the build command, but for others it may be very different.

If I want to try out something which wouldn't fit for the blog, I may also create alternate parts of the blog website to use other technologies on. This could mean that some "stacks" are only partially available on different parts of the site.

## The Goal

The origin of the blog is me wanting to have an excuse to learn lots of technologies. But I would also like to use this platform as a way to help and educate other people. If everything went perfectly, then anyone could look at the source code, and easily compare any two (or more) of the available technologies. Rather than looking up individual tutorials for everything, you could look at one source. If you already knew one of the technologies, then you could look at that, and quickly compare with the ones you don't know. It's a lofty goal, but I would love it if this would grow to be that kind of valuable resource.

## The "Rules"

- I will write at least one blog post on any addition I consider a "major" change/addition
  - This may not include minor updates and bug-fixes, but may if I think they're worth talking about
  - Some posts may just focus on the resources I found which helped me solve the problem
- All the code will be open source
  - I will try to make configuration and such available when possible as well
  - When I can't, I'll describe _why_ it's not available
- Whenever I change the site, I will, as much as possible, include the git commit SHA of that update at the end of the blog post so you can see exactly what I've changed
- I will try to write the posts as I make the changes to prevent loss of precision by my poor memory
  - Best case is that the commit with the change will also include the blog post about the change
  - The first several (~4) posts will be retrospectives, but I'll try to be as detailed as possible
- I will include any sources that I use at each step (code, tutorials, design guidelines, etc.)
  - Apart from libraries, I'll endover to avoid using outside code because the entire point is to write my own...
- In general, I will try to use a process which would work with (at minimum) a small team of developers
  - I'm working alone, but the code should be such that I could add someone to the team with a minimum of setup and no interuption to my own development pipeline
- I will standardize and automate where reasonable
  - Especially deploying different versions to different environments should be very simple
  - I should be able to wipe my computer and deploy a local version of the site within ~30 minutes
  - I should be able to deploy a non-local version within 15 minutes from anywhere (by carrier pigeon if necessary)
- I'll try to be responsive to real people (like you, the reader)

tldr: I'm making a blog about making a blog about making a blog about making a blog about...
