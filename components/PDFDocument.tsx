import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { marked } from 'marked'

// Basic styling
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  paragraph: {
    marginBottom: 8,
    lineHeight: 1.4,
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 5,
  },
})

type Props = {
  content: string
}

export function PdfDocument({ content }: Props) {
  // Convert markdown to tokens (AST)
  const tokens = marked.lexer(content)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {tokens.map((token, i) => {
          if (token.type === 'heading') {
            return (
              <Text key={i} style={styles.heading}>
                {token.text}
              </Text>
            )
          } else if (token.type === 'paragraph') {
            return (
              <Text key={i} style={styles.paragraph}>
                {token.text}
              </Text>
            )
          } else if (token.type === 'list') {
            return (
              <View key={i}>
                {token.items.map((item : any, j : any) => (
                  <Text key={j} style={styles.listItem}>• {item.text}</Text>
                ))}
              </View>
            )
          } else if (token.type === 'space') {
            return <View key={i} style={{ marginBottom: 10 }} />
          } else {
            return null
          }
        })}
      </Page>
    </Document>
  )
}
