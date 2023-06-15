import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export  const client = createClient({
  projectId: '53dgsg10',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token: 'skHYFJkZYJhBXJb8RfYTUdQvXlCYZZVwBvwld4IaSOO04p2Awsar5h3p5Tv05Fbrqc4bDaYZMGheYegWp98VY9xrcaapXVxr3ftv8NjTwA8XXuWLl8ZrmQ7IKq2ha7stmGtvms77GzMxPeTP1IBdVjL7FZpFMKL1f1u7sekALHsQHE26QqX3',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);