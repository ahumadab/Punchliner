import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return <View style={styles.container} />;
};

export default Header;
