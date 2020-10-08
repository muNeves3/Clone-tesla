import React, { useEffect, useRef } from 'react';
import useModel from '../UseModel';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({modelName, overlayNode, children, ...props}) => {
  const { registerModel } = useModel(modelName)

  const sectionReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(sectionReference.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionReference
      })
    }
  }, [])

  return (
    <Container ref={sectionReference} {...props}>
      <h1>{children}</h1>
    </Container>
  );
};

export default ModelSection;
