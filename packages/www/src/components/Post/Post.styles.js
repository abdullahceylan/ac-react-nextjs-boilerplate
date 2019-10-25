import { styled } from '@styles';

export const PostContainer = styled.div`
  cursor: pointer;
  height: 453px;
  margin-bottom: 48px;
`;

export const PostLink = styled.a`
  border-bottom: none;

  &:hover {
    border-bottom: none;
  }
`;

export const Text = styled.div`
  margin-top: -160px;
  padding: 24px;
  position: absolute;
`;

export const TextH2 = styled.div`
  color: white;
  font-size: 24px;
  margin-bottom: 0;
`;

export const TextH4 = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-weight: 500;
  margin-top: 8px;
`;
