import { combineReducers } from 'redux';

// Reducers
const partsReducer = () => {
  return [
    {
      title: 'God is the loving ruler and creator of the world.',
      description:
        'In the beginning, God created the world. He is the intelligent designer behind all that we see and know about the world. He also made us, mankind, in his likeness, and put us in charge of the world to take care of it and enjoy his blessing under his rule.',
      transition: "But this clearly isn't the way it is now...",
      image: './box1.jpg',
      imageAlt: '1'
    },
    {
      title: 'We have all rejected the ruler, God.',
      description:
        'Sadly, we all want to do things our own way. In disobeying his instructions for living in this world, or simply disregarding his existence, we rebel against the creator, God.',
      transition: 'What will God do about this rebellion?',
      image: './box2.jpg',
      imageAlt: '2'
    },
    {
      title: "God's punishment for rebellion is death and judgement.",
      description:
        "God won't let us rebel forever. In our rebellion, we are saying to God that we don't want him in our lives. His punishment is to give us precisely that, by cutting us off from him. Since God is the source of life and the giver of all things good, separation from him means eternal death and hell. This is a dreadful prospect that we all face for rejecting God.",
      transition: 'Not all hope is lost...',
      image: './box3.jpg',
      imageAlt: '3'
    },
    {
      title: 'In his love, God sent his son Jesus to die in our place.',
      description:
        "Because of his love and mercy, God did not leave us to suffer the consequences of our foolish rebellion. He sent his son Jesus into the world, who always lived under God's rule and authority. He thus did not deserve to die, but it was for this very purpose that he came into the world - to die in our place. In doing so, Jesus took upon himself the punishment for our rebellion, so that forgiveness is available for us.",
      transition: "That's not all.",
      image: './box4.jpg',
      imageAlt: '4'
    },
    {
      title: 'God raised Jesus to life as ruler of the world.',
      description:
        "God raised Jesus to life again, and Jesus now reigns in heaven with all authority. Jesus' resurrection demonstrates that God accepted his death as a complete payment for our sin of rebellion. It also displays his victory over death and gives us confidence to trust him. Jesus now offers forgiveness of sin, new life, and relationship with God. He will return to judge, and those who trust in him will not be condemned because of his death in our place.",
      transition: 'Where does that leave us?',
      image: './box5.jpg',
      imageAlt: '5'
    },
    {
      title: 'This leaves us with a choice to be made.',
      description:
        "We can choose to continue in rebellion against God, but this only leads to God's rightful punishment of death and condemnation. However, if we turn back to God and appeal for mercy, trusting in Jesus' death and resurrection, then everything changes. God accepts Jesus' death as payment for our sin, and we are forgiven and given new, eternal life.",
      transition: 'Which of these represents the way you want to live?', //TODO: add in the transition lines
      image: './box6.jpg',
      imageAlt: '6'
    }
  ];
};

// const defaultPart = {
//   title: 'God is the loving ruler and creator of the world.',
//   description:
//     'In the beginning, God created the world and all that we see in it. He also made us, people, in his likeness, and put us in charge of the world.',
//   transition: "But this clearly isn't the way it is now...",
//   image: './box1.jpg',
//   imageAlt: '1'
// };

const defaultPart = partsReducer()[0];

const selectedPartReducer = (selectedPart = defaultPart, action) => {
  if (action.type === 'PART_SELECTED') {
    return action.payload;
  } else if (action.type === 'DEFAULT_PART_SELECTED') {
    return defaultPart;
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
        "You'll find me on the football pitch on Sunday afternoons, scoring goals in mercurials.",
      image: './soccer.png',
      link: null
    },
    {
      title: 'bread',
      description:
        'I love bread and could survive on it. Shout out to gokuku, barcook, four leaves, etc.',
      image: './bread.png',
      link: null
    },
    {
      title: 'pasta',
      description: 'I could also survive on pasta.',
      image: './pasta.png',
      link: null
    },
    {
      title: 'books',
      description: 'Books are the best way to pass time.',
      image: './books.png',
      link: null
    },
    {
      title: 'music',
      description:
        'Depends on mood. But always in the mood for CityAlight, John Mayer, Shane and Shane, Tom Misch.',
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
