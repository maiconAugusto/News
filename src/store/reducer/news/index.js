const INITIAL_STATE = {
  news: [
    {
      id: 0,
      title: 'Covid-19',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Gil',
    },
    {
      id: 1,
      title: 'Covid-19',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Carlos Roupa Nova',
    },
    {
      id: 2,
      title: 'Covid-19',
      text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      author: 'Jean Dornelas',
    },
  ],
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'add': {
      const newState = {...state, action};
      newState.news = newState.news.push(action.payload);
      return newState;
    }
    case 'remove': {
      const newState = {...state, action};
      newState.news = action.payload;
      return newState;
    }
    case 'update': {
      const newState = {...state, action};
      newState.news = action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
}
