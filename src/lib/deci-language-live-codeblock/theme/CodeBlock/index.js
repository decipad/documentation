import React from 'react';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import CodeBlock from '@theme-init/CodeBlock';

const snapshotSeparator = '\n==> ';

const withLiveEditor = (Component) => {
  const WrappedComponent = (props) => {
    if (props.live) {
      const { children } = props;
      return (
        <Playground scope={ReactLiveScope} {...props}>
          {typeof children === 'string'
            ? children.split(snapshotSeparator)[0]
            : children}
        </Playground>
      );
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withLiveEditor(CodeBlock);
