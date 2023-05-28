export const transformMovieDetailsData = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => ({
  title,
  overview,
  year: release_date.substr(0, 4),
  userScore: `${(vote_average * 10).toFixed(0)}%`,

  genres: genres.length
    ? genres.map(item => item.name).join(', ')
    : "Unfortunately, we don't have information about the genres of this movie.",

  posterPath: poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/200x300',
});
