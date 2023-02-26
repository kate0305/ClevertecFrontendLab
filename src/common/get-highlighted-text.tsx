export const getHighlightedText = (searchText: string, text: string): JSX.Element[] =>
  searchText.split(new RegExp(`(${text})`, 'gi')).map((match: string) => (
    <span
      data-test-id={match.toLowerCase() === text.toLowerCase() && 'highlight-matches'}
      key={Math.random()}
      style={match.toLowerCase() === text.toLowerCase() ? { color: '#ff5253' } : {}}
    >
      {match}
    </span>
  ));
