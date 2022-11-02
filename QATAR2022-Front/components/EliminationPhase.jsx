import { SingleEliminationBracket, Match, SVGViewer } from '@g-loot/react-tournament-brackets';

export default const SingleElimination = () => (
  <SingleEliminationBracket
    matches={matches}
    matchComponent={Match}
    svgWrapper={({ children, ...props }) => (
      <SVGViewer width={500} height={500} {...props}>
        {children}
      </SVGViewer>
    )}
  />
);