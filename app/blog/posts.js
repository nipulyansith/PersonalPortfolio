export const posts = [
  {
    "id": "1",
    "title": "What Working on a Production Application Taught Me About Software Engineering",
    "excerpt": "From a dropdown bug that took two days to a workflow redesign, these are the experiences that changed how I learn, debug, and build software.",
    "description": "Ten personal lessons from an internship and a Software Engineer role, covering debugging, existing codebases, delivery, AI, mentoring, code reviews, and teamwork.",
    "author": "Nipul Yansith",
    "publishedAt": "2026-11-20",
    "publishedLabel": "November 20, 2026",
    "readMinutes": 11,
    "category": "Engineering",
    "tags": [
      "Engineering",
      "Career",
      "Learning"
    ],
    "cover": null,
    "coverAlt": "",
    "intro": [
      {
        "type": "paragraph",
        "text": "When I started my journey as a software engineering intern, I had a few assumptions about what being a software engineer would be like."
      },
      {
        "type": "paragraph",
        "text": "I thought knowing programming languages and frameworks was one of the most important things. I also thought that if I didn't know a particular technology, adapting to a project that used it would be difficult."
      },
      {
        "type": "paragraph",
        "text": "But working on a production application changed quite a few of those assumptions."
      },
      {
        "type": "paragraph",
        "text": "I started with an internship, moved on to working as a Software Engineer, and got the opportunity to work on different parts of a real-world application. Along the way, I worked with unfamiliar codebases, implemented features, investigated bugs, dealt with unexpected behaviour, and learned from other engineers."
      },
      {
        "type": "paragraph",
        "text": "Looking back, some of the most valuable things I learned weren't about any particular programming language or framework."
      },
      {
        "type": "paragraph",
        "text": "Here are some of them."
      }
    ],
    "sections": [
      {
        "id": "learning-technologies",
        "label": "Learning new technologies",
        "title": "You Don't Need to Know Every Technology Before Joining a Project",
        "blocks": [
          {
            "type": "paragraph",
            "text": "One of my biggest concerns when starting my internship was working with technologies I hadn't used before."
          },
          {
            "type": "paragraph",
            "text": "I had no previous experience with AngularJS. Initially, I thought that not knowing the framework would make things difficult."
          },
          {
            "type": "paragraph",
            "text": "Surprisingly, I became familiar with it within about a week."
          },
          {
            "type": "paragraph",
            "text": "I didn't spend most of that time reading documentation from beginning to end. Instead, I started exploring the existing codebase, reading functions, debugging simple pieces of functionality, and trying to understand what was happening behind the scenes."
          },
          {
            "type": "paragraph",
            "text": "That experience changed how I approached unfamiliar technologies."
          },
          {
            "type": "paragraph",
            "text": "I realized that when you understand the fundamentals of programming and software development, adapting to a new framework becomes much easier."
          },
          {
            "type": "paragraph",
            "text": "You don't necessarily need to know every framework before joining a team. You need to know how to learn, how to read code, and how to understand what an existing implementation is doing."
          },
          {
            "type": "quote",
            "text": "One thing I discovered during this process was that debugging made me a better code reader."
          }
        ]
      },
      {
        "id": "debugging",
        "label": "The first debugging lessons",
        "title": "Debugging Is More Than Just Fixing Bugs",
        "blocks": [
          {
            "type": "paragraph",
            "text": "I still remember one of the first bugs I worked on during my internship."
          },
          {
            "type": "paragraph",
            "text": "It was a relatively simple UI issue. The requirement was to select the first option in a dropdown instead of leaving it unselected."
          },
          {
            "type": "paragraph",
            "text": "Sounds simple, right?"
          },
          {
            "type": "paragraph",
            "text": "It took me almost two days just to understand where the issue was."
          },
          {
            "type": "paragraph",
            "text": "I remember starting with a JSP file, following the execution flow to identify the relevant controller, and then searching for the function responsible for the behaviour."
          },
          {
            "type": "paragraph",
            "text": "Eventually, I found the relevant implementation and fixed it."
          },
          {
            "type": "paragraph",
            "text": "Today, I would probably approach the same issue differently. I'd inspect the element, identify the relevant function, and use a global search to trace its implementation."
          },
          {
            "type": "paragraph",
            "text": "But that first experience taught me something important."
          },
          {
            "type": "paragraph",
            "text": "When working with an unfamiliar application, the challenge isn't always writing the solution. Sometimes, understanding where the problem actually exists is the hardest part."
          },
          {
            "type": "paragraph",
            "text": "I also developed an interest in debugging APIs. I enjoy following how data travels from the frontend to the backend, inspecting what gets passed at each stage, and identifying where something goes wrong."
          },
          {
            "type": "paragraph",
            "text": "Rather than immediately changing code, I find it much more useful to understand the execution flow first."
          },
          {
            "type": "paragraph",
            "text": "The more I worked with unfamiliar modules, the more comfortable I became with exploring code I hadn't written myself."
          }
        ]
      },
      {
        "id": "existing-codebases",
        "label": "Working with existing systems",
        "title": "Working with an Existing Codebase Is Very Different from University Projects",
        "blocks": [
          {
            "type": "paragraph",
            "text": "University projects teach you a lot about software development. You learn how to build applications, implement requirements, work with databases, and collaborate with others."
          },
          {
            "type": "paragraph",
            "text": "However, working on an established production application introduces a different challenge."
          },
          {
            "type": "paragraph",
            "text": "In most university projects, you have a reasonable understanding of the entire codebase. You know what you implemented, how the modules connect, and why certain decisions were made."
          },
          {
            "type": "paragraph",
            "text": "In a professional environment, that's rarely the case."
          },
          {
            "type": "paragraph",
            "text": "You're working with an application that has evolved over time, with contributions from many developers. There are existing patterns, dependencies, business rules, and functionality that you might not even know exists."
          },
          {
            "type": "paragraph",
            "text": "A seemingly small modification can affect something that was already working perfectly."
          },
          {
            "type": "paragraph",
            "text": "I remember an interesting incident involving MongoDB during my internship."
          },
          {
            "type": "paragraph",
            "text": "I was working with a JSON configuration where the order of key-value pairs determined the order in which certain content appeared in the UI."
          },
          {
            "type": "paragraph",
            "text": "I needed to change that order, so I kept modifying the document in the database."
          },
          {
            "type": "paragraph",
            "text": "But nothing happened."
          },
          {
            "type": "paragraph",
            "text": "There were no errors, and the application wasn't behaving differently."
          },
          {
            "type": "paragraph",
            "text": "After spending quite some time investigating, I randomly started suspecting that the issue might be related to the database update mechanism. In that particular implementation, changing only the field order wasn't causing the document to be updated."
          },
          {
            "type": "paragraph",
            "text": "As a temporary workaround, I added a flag to make the document different, saved it with the correct ordering, and then removed the flag."
          },
          {
            "type": "paragraph",
            "text": "It was a small incident, but I remember it because it taught me something I wouldn't necessarily have learned from a university assignment."
          },
          {
            "type": "paragraph",
            "text": "Sometimes, the problem isn't where you initially expect it to be. You have to understand how the existing system behaves before deciding how to fix it."
          }
        ]
      },
      {
        "id": "smaller-deliverables",
        "label": "Smaller deliverables",
        "title": "Break Large Problems into Smaller Deliverables",
        "blocks": [
          {
            "type": "paragraph",
            "text": "One of the most challenging things I worked on was a major redesign of an existing workflow management feature."
          },
          {
            "type": "paragraph",
            "text": "The legacy implementation had a very large number of features. Looking at the amount of functionality that needed to be reimplemented was honestly overwhelming at first."
          },
          {
            "type": "paragraph",
            "text": "It was one of those situations where looking at the entire task at once could make you feel like you weren't going to finish it."
          },
          {
            "type": "paragraph",
            "text": "But I gradually realized that the most important thing was to approach it systematically."
          },
          {
            "type": "paragraph",
            "text": "Instead of thinking about the entire system as one enormous task, I started breaking it down."
          },
          {
            "type": "paragraph",
            "text": "The approach was to:"
          },
          {
            "type": "list",
            "items": [
              "Understand the core workflow first.",
              "Identify the essential functionality.",
              "Implement the basic parts before moving to more complicated requirements.",
              "Gradually introduce additional functionality based on priority.",
              "Compare the new implementation against the existing system.",
              "Work with QA to validate the behaviour."
            ]
          },
          {
            "type": "paragraph",
            "text": "This also helped make the redesign more manageable from a delivery perspective. Essential functionality could be tested and delivered before moving on to less critical parts, allowing users to transition gradually."
          },
          {
            "type": "paragraph",
            "text": "One thing this experience taught me is that engineering isn't always about finding the most complicated technical solution."
          },
          {
            "type": "paragraph",
            "text": "Sometimes, it's about understanding priorities and making a large problem manageable."
          },
          {
            "type": "quote",
            "text": "Breaking a complex task into smaller, deliverable pieces is an engineering skill in itself."
          }
        ]
      },
      {
        "id": "understand-the-behaviour",
        "label": "Understanding behaviour",
        "title": "Before Reimplementing Something, Understand What It Actually Does",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Another interesting experience was reimplementing an existing configuration management portal that had originally been built using vanilla JavaScript."
          },
          {
            "type": "paragraph",
            "text": "The task was to recreate its functionality using AngularJS."
          },
          {
            "type": "paragraph",
            "text": "Initially, looking at the amount of functionality made it seem like a huge task."
          },
          {
            "type": "paragraph",
            "text": "Instead of immediately starting to write AngularJS code, I spent time using the existing portal and exploring how it behaved."
          },
          {
            "type": "paragraph",
            "text": "I tried different interactions, observed what happened, and gradually built an understanding of the complete functionality."
          },
          {
            "type": "paragraph",
            "text": "Once I had a clearer picture, I started working on the new implementation."
          },
          {
            "type": "paragraph",
            "text": "This taught me an important lesson about working with existing applications."
          },
          {
            "type": "paragraph",
            "text": "Documentation and existing code are useful, but sometimes the best way to understand an application is to actually use it."
          },
          {
            "type": "paragraph",
            "text": "Before replacing or redesigning something, understand the behaviour you're trying to preserve."
          },
          {
            "type": "paragraph",
            "text": "Otherwise, you might successfully recreate what you think the application does while missing functionality that users already depend on."
          }
        ]
      },
      {
        "id": "using-ai-responsibly",
        "label": "Using AI responsibly",
        "title": "AI Can Make You Faster, But It Shouldn't Make You Careless",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This is something I think is particularly important for software engineers today."
          },
          {
            "type": "paragraph",
            "text": "When I started my internship, AI coding agents weren't part of my everyday development workflow. When I got stuck, I would Google errors, look through Stack Overflow, inspect the existing code, or ask senior developers for help."
          },
          {
            "type": "paragraph",
            "text": "Today, I also use AI when I get stuck."
          },
          {
            "type": "paragraph",
            "text": "There's no doubt that these tools can make development faster. They can help us understand unfamiliar code, explore possible solutions, and implement things more efficiently."
          },
          {
            "type": "paragraph",
            "text": "However, I've also noticed something concerning."
          },
          {
            "type": "paragraph",
            "text": "Sometimes developers ask AI to make a UI look better or improve an implementation without clearly understanding what they actually want."
          },
          {
            "type": "paragraph",
            "text": "The results might look impressive initially, but that doesn't mean they're necessarily good solutions."
          },
          {
            "type": "paragraph",
            "text": "For example, asking an AI tool to \"make this UI better\" is very different from understanding what needs improvement and explaining the expected behaviour, layout, and constraints clearly."
          },
          {
            "type": "paragraph",
            "text": "You need to understand the problem before you can give it good instructions."
          },
          {
            "type": "paragraph",
            "text": "And more importantly, you need to understand the code that comes back."
          },
          {
            "type": "paragraph",
            "text": "That has made me more deliberate about reviewing AI-generated implementations before accepting them."
          },
          {
            "type": "paragraph",
            "text": "We're working with production software. We cannot simply generate code, glance at the output, and push it without understanding what we're shipping."
          },
          {
            "type": "paragraph",
            "text": "AI-generated code can contain bugs, introduce unnecessary complexity, or solve the wrong problem entirely."
          },
          {
            "type": "paragraph",
            "text": "My personal philosophy is simple:"
          },
          {
            "type": "quote",
            "text": "AI should help developers build better, more reliable, and scalable software. It shouldn't help us produce software that even we don't understand."
          },
          {
            "type": "paragraph",
            "text": "Use AI as a tool. Don't trust it blindly. The responsibility for the code you ship still belongs to you."
          }
        ]
      },
      {
        "id": "mentorship",
        "label": "Learning from senior engineers",
        "title": "Good Senior Engineers Can Make a Huge Difference",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Something else I learned during my professional journey is how important the people you work with can be."
          },
          {
            "type": "paragraph",
            "text": "Helpful senior engineers are just as important as having access to a good AI model. Maybe even more important."
          },
          {
            "type": "paragraph",
            "text": "A good senior doesn't just give you the answer to a problem. They help you understand how to approach it."
          },
          {
            "type": "paragraph",
            "text": "They give you opportunities to explore different areas of the application, work with unfamiliar technologies, make mistakes, and learn from those experiences."
          },
          {
            "type": "paragraph",
            "text": "I believe this is particularly important for junior developers."
          },
          {
            "type": "paragraph",
            "text": "You cannot learn everything through documentation. At some point, you need hands-on experience."
          },
          {
            "type": "paragraph",
            "text": "You need the opportunity to experiment, investigate, and sometimes get things wrong."
          },
          {
            "type": "paragraph",
            "text": "Of course, this doesn't mean you should expect someone else to solve every problem for you. You should make an effort to investigate things independently before asking for help."
          },
          {
            "type": "paragraph",
            "text": "But having experienced people who are willing to guide you makes a huge difference in how quickly you grow."
          }
        ]
      },
      {
        "id": "code-reviews",
        "label": "What code reviews changed",
        "title": "Code Reviews Can Change the Way You Write Code",
        "blocks": [
          {
            "type": "paragraph",
            "text": "I used to think that if my implementation worked, I had done my job."
          },
          {
            "type": "paragraph",
            "text": "Code reviews taught me that there's more to writing good code than simply making something work."
          },
          {
            "type": "paragraph",
            "text": "I still remember having pull requests rejected because they didn't follow the expected coding standards."
          },
          {
            "type": "paragraph",
            "text": "Initially, it was frustrating. But over time, I started paying more attention to the feedback."
          },
          {
            "type": "paragraph",
            "text": "I began checking my implementations more carefully before pushing them for review."
          },
          {
            "type": "paragraph",
            "text": "I became more conscious of coding conventions, consistency, readability, and maintainability."
          },
          {
            "type": "paragraph",
            "text": "Eventually, I went from submitting code and waiting for someone to point out issues to trying to catch those issues myself before creating the pull request."
          },
          {
            "type": "paragraph",
            "text": "That change made me a much more careful developer."
          },
          {
            "type": "paragraph",
            "text": "I also realized that code reviews aren't just about approving or rejecting someone's work. They're an opportunity to learn different approaches and improve the quality of what we build as a team."
          }
        ]
      },
      {
        "id": "communication",
        "label": "Communication & teamwork",
        "title": "Communication and Teamwork Matter More Than You Think",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Before joining the professional environment, I thought being a software engineer would be an extremely stressful job."
          },
          {
            "type": "paragraph",
            "text": "There are deadlines, technical challenges, complicated requirements, and situations where things don't go as planned."
          },
          {
            "type": "paragraph",
            "text": "But something I didn't fully appreciate beforehand was how much the people around you influence the experience."
          },
          {
            "type": "paragraph",
            "text": "Having good teammates makes a huge difference."
          },
          {
            "type": "paragraph",
            "text": "Being able to ask questions, communicate blockers, clarify requirements, share ideas, and even have fun together makes the work much more enjoyable."
          },
          {
            "type": "paragraph",
            "text": "In some ways, working on a professional software project isn't entirely different from working on a university group project."
          },
          {
            "type": "paragraph",
            "text": "You still need to communicate with people, understand what others are doing, ask for help when necessary, and make sure everyone is moving in the same direction."
          },
          {
            "type": "paragraph",
            "text": "Technical skills are important, but being able to work effectively with other people is equally valuable."
          },
          {
            "type": "paragraph",
            "text": "I'm grateful for the people I've had the opportunity to learn and work with along the way."
          }
        ]
      },
      {
        "id": "continuous-learning",
        "label": "Staying willing to learn",
        "title": "You Should Always Be Willing to Learn",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If there's one thing that connects almost everything I've mentioned, it's the willingness to learn."
          },
          {
            "type": "paragraph",
            "text": "I started my internship thinking that not knowing a particular framework could be a major disadvantage."
          },
          {
            "type": "paragraph",
            "text": "Now, I'm much more comfortable exploring unfamiliar projects and technologies."
          },
          {
            "type": "paragraph",
            "text": "I've learned that you don't have to understand everything immediately. You need to be willing to investigate, experiment, ask questions, and gradually build your understanding."
          },
          {
            "type": "paragraph",
            "text": "If I were to give three pieces of advice to someone preparing for their first software engineering job, they would be:"
          },
          {
            "type": "subheading",
            "text": "1. Build strong fundamentals, but don't become attached to a particular technology."
          },
          {
            "type": "paragraph",
            "text": "Frameworks and tools change. Understanding programming concepts and knowing how to adapt to unfamiliar technologies will help you throughout your career."
          },
          {
            "type": "subheading",
            "text": "2. Learn to debug and explore existing code."
          },
          {
            "type": "paragraph",
            "text": "Don't always look for someone to give you the solution. Follow execution flows, inspect API requests, read unfamiliar functions, experiment, and understand why something works the way it does."
          },
          {
            "type": "subheading",
            "text": "3. Be curious, accept feedback, and take responsibility for what you build."
          },
          {
            "type": "paragraph",
            "text": "Learn from experienced engineers, take code reviews seriously, communicate with your teammates, and use AI responsibly. Never submit code that you don't understand."
          }
        ]
      },
      {
        "id": "final-thoughts",
        "label": "Final thoughts",
        "title": "Final Thoughts",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Looking back, working on production applications has changed the way I think about software engineering."
          },
          {
            "type": "paragraph",
            "text": "I used to associate being a good developer with knowing programming languages and being able to implement features."
          },
          {
            "type": "paragraph",
            "text": "Today, I think it's much more than that."
          },
          {
            "type": "paragraph",
            "text": "It's about being able to understand unfamiliar systems, investigate problems, make thoughtful decisions, work with other people, and take responsibility for the software you build."
          },
          {
            "type": "paragraph",
            "text": "You won't always know the answer. You won't always understand the codebase immediately. Sometimes, even a seemingly simple bug can take two days to figure out."
          },
          {
            "type": "paragraph",
            "text": "And that's okay."
          },
          {
            "type": "paragraph",
            "text": "Every unfamiliar project, every debugging session, every code review, and every challenging feature gives you an opportunity to improve."
          },
          {
            "type": "paragraph",
            "text": "I'm still learning, and I have a long way to go. But that's probably one of the things I enjoy most about this profession."
          },
          {
            "type": "quote",
            "text": "You never really stop learning, and that's what makes software engineering interesting."
          },
          {
            "type": "note",
            "text": "This article reflects my personal experiences and lessons learned while working on production software. Specific company, client, and internal implementation details have intentionally been omitted."
          }
        ]
      }
    ]
  }
];

export function getPost(id) {
  return posts.find((post) => post.id === String(id));
}
