import { Children, ReactElement } from 'react';
import { useEffect, useState } from 'react';

const useChild = <T extends JSX.Element>(
  children: ReactElement | ReactElement[],
  childCandidate: any
): [boolean, T] => {
  const [matchedChild, setMatchedChild] = useState<T>(null);
  const [matched, setMatched] = useState(false);

  useEffect(() => {
    Children.forEach(children, child => {
      if (child.type === childCandidate) {
        setMatchedChild(child as T);
        setMatched(true);
      }
    });
  }, [children]);

  return [matched, matchedChild];
};

export default useChild;
