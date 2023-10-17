import React from 'react';
import styled from 'styled-components';

import { UNDER_LINE_COLOR } from '../colors';

const Text = styled.span`
  color: ${UNDER_LINE_COLOR};
`;

const BluePoint = ({ children }: { children: React.ReactNode }) => {
  return <Text>{children}</Text>;
};

export default BluePoint;
