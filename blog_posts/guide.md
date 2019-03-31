# Guide
Here I'll talk about each of the steps I took to get to this point and make notes so that they can be turned into sequential blog posts.
For completeness, we also include the commit hash of each blog post so that, in theory, the user could eventually view the blog at any specific commit. An MVP would allow them to view each post as it was at the time of writing (of course, this part only makes sense after there is a blog... [though it could just be a markdown file...]).
Template:

# Title
## Details
- Bullet points
## References
- 1 or more reference, tutorial, or source
## Commit hash
Commit hash after completed feature (or at end of blog post)



# The Idea
## Details
- The blog
- The site as a whole
- Eventual goals
- Rules
- First few posts were written after the fact, so they're retro-spective from a few spots further in


# Basics in React
## Details
- Create-React-App
- Basic site template
- Starting at the top (literally)
- To eject?
## References
- React app tutorial


# Handling state with Redux
## Details
- Why?
- Navbar state (with dropdowns)
- Back and forth of how to structure the things and where to handle the state
## References
- https://redux.js.org/basics/example
## Commit hash
058ddffb4d13d7a62856daccadb5a96c6fcec189


# Shipathon Deployment
## Details
- Madhacks 2019 Shipathon (12 hours, 9am to 9pm)
- That's when I started THIS document
- This is a quick-and-dirty version, soon I'll expand things
- Getting the server set-up
- Starting with Express serving stating files
- Google cloud (reasons)
  - Create a new account
  - Create micro instance with https-allowed
  - Requested static ip
  - Setup A (address) DNS record in 101Domains
  - SSH into server
  - Generate ssh key for github
  - Clone repo
  - Install yarn to build
  - `yarn install`, `yarn build`
  - Run server (fail)
  - Port only for https (but server not for https)
  - Got it working serving non-https over https port using sudo (port 443)
  - Decided to use tutorial for "local dev certs"
  - Let's Encrypt
    - Needed to allow http traffic to get cert
  - Then it works, with a very specific command and using sudo
  - Final requires: git pull, yarn build, sudo node server.js, inline environment commands
## References
- Google cloud deploy
- Express tutorial
- https://cloud.google.com/solutions/web-serving-overview
- Setup yarn: https://yarnpkg.com/lang/en/docs/install/#debian-stable
- https://timonweb.com/posts/running-expressjs-server-over-https/
- Standalone instructions at: https://certbot.eff.org/lets-encrypt/ubuntubionic-other
## Commit hash
9b844f5b76c33316a803d2ea27d7165c91e6b445


# Shipathon "shipping"
## Details
- I want to actually have some kind of body, even if it's mediocre
- First blog post
- Yay!
## References
- 
## Commit hash
Commit hash after completed feature (or at end of blog post)


# Automated? Deployment
## Details
- Goal: Full automation
- Eventually container based
- Automate environments, multiple servers
- CI (Cirle, Jenkins, Octo, etc?)
- Current, simplified version
- Secrets?
## References
- 
## Commit hash
Commit hash after completed feature (or at end of blog post)


