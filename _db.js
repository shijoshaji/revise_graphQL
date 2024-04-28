const games = [
  { id: 1, title: 'The Watcher 3: Wild Hunt', platform: ['PC', 'Xbox'] },
  { id: 2, title: 'The Last of Us Part II', platform: ['PlayStation', 'Switch'] },
  { id: 3, title: 'Grand Theft Auto V', platform: ['PC'] },
  { id: 4, title: 'Halo Infinite', platform: ['Xbox'] },
  { id: 5, title: 'Animal Crossing: New Horizons', platform: ['Switch'] },
];

const authors = [
  { id: 1, name: 'John Smith', verified: true },
  { id: 2, name: 'Jane Doe', verified: false },
  { id: 3, name: 'Michael Johnson', verified: true },
  { id: 4, name: 'Emily Brown', verified: true },
  { id: 5, name: 'David Wilson', verified: false },
];

const reviews = [
  { id: 1, rating: 8.5, content: 'Great game!', author_id: 1, game_id: 1 },
  { id: 2, rating: 9.2, content: 'Amazing graphics!', author_id: 2, game_id: 2 },
  { id: 3, rating: 7.8, content: 'Good storyline.', author_id: 3, game_id: 1 },
  { id: 4, rating: 6.5, content: 'Needs improvement.', author_id: 4, game_id: 3 },
  { id: 5, rating: 8.9, content: 'Highly recommended!', author_id: 5, game_id: 2 },
  { id: 6, rating: 7.2, content: 'Fun multiplayer!', author_id: 1, game_id: 4 },
  { id: 7, rating: 9.7, content: 'Incredible Gamepad!', author_id: 3, game_id: 5 },
  { id: 8, rating: 8.0, content: 'Addictive storyline.', author_id: 2, game_id: 3 },
  { id: 9, rating: 7.5, content: 'Great graphics!', author_id: 4, game_id: 1 },
  { id: 10, rating: 9.5, content: 'Must-play game!', author_id: 5, game_id: 4 },
];

export default { games, authors, reviews };
