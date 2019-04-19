import { combineReducers } from 'redux';

// Reducers
const partsReducer = () => {
  return [
    {
      title: 'God is the loving ruler and creator of the world.',
      description:
        'In the beginning, God created the world and all that we see in it. He also made us, people, in his likeness, and put us in charge of the world.',
      transition: "But this clearly isn't the way it is now...",
      image: '(link placeholder)',
      imageAlt: '1'
    },
    {
      title: 'We have all rejected the ruler, God.',
      description:
        'Sadly, we all want to do things our own way. In disobeying his instructions for living in this world, or simply disregarding his existence, we rebel against the creator, God.',
      transition: 'What will God do about this rebellion?',
      image: '(link placeholder)',
      imageAlt: '2'
    },
    {
      title: "God's punishment for rebellion is death and judgement.",
      description:
        "God won't let us rebel forever. In our rebellion, we are saying to God that we don't want him in our lives. This is precisely how he punishes us, by cutting us off from him. Since God is the source of life and the giver of all things good, separation from him means eternal death and hell. This is a dreadful prospect that we all face for rejecting God.",
      transition: 'Not all hope is lost...',
      image: '(link placeholder)',
      imageAlt: '3'
    },
    {
      title: 'In his love, God sent his son Jesus to die in our place.',
      description:
        "Because of his great love and mercy, God did not leave us to suffer the consequences of our foolish rebellion. He sent his son Jesus into the world, who always lived under God's rule and perfectly submitted to God's authority. He did not deserve to die, but it was for this very purpose that he came into the world, to die in our place. As a result, Jesus took upon himself the punishment for our rebellion, so that forgiveness is available for us.",
      transition: "That's not all.",
      image: '(link placeholder)',
      imageAlt: '4'
    },
    {
      title: 'God raised Jesus to life as ruler of the world.',
      description:
        "God raised Jesus to life again, and Jesus now reigns in heaven with all authority. Jesus' resurrection demonstrates that God accepted his death as a complete payment for our sin. It also displays his victory over death and gives us confidence to trust him. Jesus now offers forgiveness of sin, new life, and relationship with God. He will return to judge, and those who trust in him will not be condemned because we are pardoned through his death.",
      transition: 'Where does that leave us?',
      image: '(link placeholder)',
      imageAlt: '5'
    },
    {
      title: 'Two ways to live.',
      description:
        "We can choose to continue in rebellion against God, but this only leads to God's rightful punishment of death and condemnation. However, if we turn back to God and appeal for mercy, trusting in Jesus' death and resurrection, then everything changes. God accepts Jesus' death as payment for our sins, and we are forgiven and given new, eternal life.",
      transition: 'Which of these represents the way you want to live?',
      image: '(link placeholder)',
      imageAlt: '6'
    }
  ];
};

const selectedPartReducer = (selectedPart = partsReducer()[0], action) => {
  if (action.type === 'PART_SELECTED') {
    return action.payload;
  }
  return selectedPart;
};

const interestsReducer = () => {
  return [
    {
      title: 'cross',
      description:
        "I'm a Christian. Click on the cross emoji to find out about the Christian message. :)",
      image: './cross.png',
      link: '/twoways'
    },
    {
      title: 'soccer',
      description:
        "You'll find me on the football pitch on Sunday afternoons, wearing them mercurials.",
      image: './soccer.png',
      link: null
    },
    {
      title: 'bread',
      description:
        'I love bread and could survive on it. Shout out to gokuku, duke, four leaves, etc.',
      image: './bread.png',
      link: null
    },
    {
      title: 'pasta',
      description: 'I could also survive on pasta',
      image: './pasta.png',
      link: null
    },
    {
      title: 'books',
      description:
        'Books are the best way to pass time. Recommend me something to read on goodreads (click the book emoji).',
      image: './books.png',
      link: null
    },
    {
      title: 'music',
      description:
        'Coldplay, Cityalight, John Mayer, Eric Chou, Shane and Shane, Khalid depending on mood and occasion.',
      image: './headphones.png',
      link: null
    }
  ];
};

const selectedInterestReducer = (selectedInterest = null, action) => {
  if (action.type === 'INTEREST_SELECTED') {
    return action.payload;
  }
  return selectedInterest;
};
export default combineReducers({
  parts: partsReducer,
  interests: interestsReducer,
  selectedPart: selectedPartReducer,
  selectedInterest: selectedInterestReducer
});
