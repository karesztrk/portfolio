import React from 'react';
import VariantOne from 'assets/illustrations/separator_1.inline.svg';
import VariantTwo from 'assets/illustrations/separator_2.inline.svg';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const renderImage = variant => {
  switch (variant) {
    case 'dark':
      return <VariantTwo />;
    case 'light':
    default:
      return <VariantOne />;
  }
};

export const Separator = ({ variant = 'light' }) => <Wrapper>{renderImage(variant)}</Wrapper>;

Separator.propTypes = {
  variant: PropTypes.string,
};
