const correctFeedback = [
  "Yeah Bitch!",
  "Yeah, science!",
  "It’s over. We’re safe. I won.",
  "Funyuns are awesome.",
  "Congratulations, you’ve just left your family a second-hand Subaru.",
  "Darth Vader had responsibilities. He was responsible for the Death Star.",
  "I did it for me. I liked it. I was good at it. And, I was really...I was alive",
  "A man provides. And he does it even when he’s not appreciated, or respected, or even loved. He simply bears up and he does it. Because he’s a man.",
  "You know the business and I know the chemistry.",
  "You’re the smartest guy I’ve ever met.",
  "Say my name.",
  "Ooooooh, wire.",
  "Tread lightly.",
  "I'm a blow fish! Yeah, Blow fishin' this up!",
  "Yeah, bitch! Magnets!",
  "Yo 148, 3-to-the-3-to-the-6-to-the-9. Representin’ the ABQ. What up, biatch? Leave it at the tone!",
  "You asked me if I was in the meth business or the money business. Neither. I am in the empire business",
  "S'all good, man.",
  "Never make the same mistake twice.",
  "I got dipping sticks!",
  "You know I, I just think, that ah, things have a way of working themselves out.",
  "I am the one who knocks!",
  "Well, at least this time he didn't shit himself... guess that's progress.",
  "Gatorade me bitch!",
  "It's just basic chemistry, yo.",
  "We'll just do it again... until we get it right.",
  "Is that a serious question?",
  "There's no honor among thieves... except for us of course.",
  "Don't drink and drive. But if you do, call me."
]

const incorrectFeedback = [
  "I’ve seen better answers in an epileptic whore house",
  "This kicks like a mule with its balls wrapped in duct tape!",
  "That’s what the kids call epic fail.",
  "You are not the guy. You’re not capable of being the guy. I had a guy, but now I don’t. You are not the guy.",
  "We tried to poison you. We tried to poison you because you are an insane, degenerate piece of filth and you deserve to die.",
  "I’m not saying it’s not bad. It’s bad. But it could be worse.",
  "Smoking marijuana, eating cheetos, and masturbating do not constitute plans in my book.",
  "Did you know that there’s an acceptable level of rat turds that can go into candy bars?",
  "Shut the fuck up and let me die in peace",
  "No they’re minerals, Jesus Marie!",
  "Stay out of my territory.",
  "What good is being an outlaw when you have responsibilities.",
  "You don’t need a criminal lawyer. You need a criminal lawyer",
  "Jesus Christ, Marie. They're minerals!",
  "My name is Skyler White, yo.",
  "Shut up! Shut up! Shut up!",
  "We're done when I say we're done.",
  "I can't remember the last time I was happy.",
  "Did you not plan for this contingency? I mean, the Starship Enterprise had a self-destruct button.",
  "Some people are immune to good advice.",
  "You know how they say, 'It's been a pleasure?' It hasn't.",
  "You two suck at peddling meth.",
  "You know what happened. The question is, can you live with it?",
  "I don't know what you think you're doing here, but trust me, this line of work doesn't suit you.",
  "Pain is my foot in your ass, Marie.",
  "If you don't know who you're talking to you better thread lightly.",
  "Someone has to protect this family from the man who protects this family.",
  "You may know a lot about chemistry, man. But you don't know jack about slangin' dope.",
  "I don't even know what to say to you. I don't even know where to begin. I feel so sorry for you.",
  "What have you got in your life? Nothing. Nobody. Oh, wait. Yes. Video games and go-carts."
]

export function getRandomFeedback(correct)
{
  const items = correct ? correctFeedback : incorrectFeedback
  return items[Math.floor(Math.random() * items.length)];
}