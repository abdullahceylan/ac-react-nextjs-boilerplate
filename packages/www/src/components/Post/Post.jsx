import React from 'react';
import PropTypes from 'prop-types';
import { PostContainer, PostLink, Text, TextH2, TextH4 } from './Post.styles';

const Post = ({ alt, date, image, title, url }) => {
  return (
    <PostContainer>
      <PostLink href={url}>
        <img alt={alt} src={url} />
      </PostLink>
      <Text>
        <TextH2>{title}</TextH2>
        <TextH4>{date}</TextH4>
      </Text>
    </PostContainer>
  )
}

export default Post;