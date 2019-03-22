import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Markdown, { getUniqueID } from 'react-native-markdown-renderer';
import PolicyContentMD from './PolicyContentMD';

const styles = StyleSheet.create({
    heading: {
      borderBottomWidth: 1,
      borderColor: '#000000',
    },
    heading1: {
      fontSize: 24, fontWeight: '900',
      backgroundColor: '#000000',
      color: '#FFFFFF',
    },
    heading2: {
      fontSize: 24, fontWeight: '400'
    },
    heading3: {
      fontSize: 18, fontWeight: '400'
    },
    heading4: {
      fontSize: 16,
    },
    heading5: {
      fontSize: 13,
    },
    heading6: {
      fontSize: 11,
    }
});

const rules = {
    // @ts-ignore
    heading1: (node, children, parent, styles) =>
      <Text key={getUniqueID()} style={[styles.heading, styles.heading1]}>
        {children}
      </Text>,
      // @ts-ignore
    heading2: (node, children, parent, styles) =>
      <Text key={getUniqueID()} style={[styles.heading, styles.heading2]}>
        {children}
      </Text>,
      // @ts-ignore
    heading3: (node, children, parent, styles) =>
      <Text key={getUniqueID()} style={[styles.heading, styles.heading3]}>
        {children}
      </Text>
}

const PolicyContent: React.FC = () => {
    return (
        <ScrollView style={{...StyleSheet.absoluteFillObject, margin: 30}} >
            <Markdown rules={rules}>{PolicyContentMD}</Markdown>
        </ScrollView>
    )
}

export default PolicyContent