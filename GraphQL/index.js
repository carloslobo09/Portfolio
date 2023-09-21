import { gql, ApolloServer } from "apollo-server";

const persons = [
  {
    name: "Carlos",
    apellido: "Lobo",
    calle: "Nose",
    edad: 24,
    id: 1,
  },
  {
    name: "Carlos",
    apellido: "Lobo",
    calle: "Nose",
    edad: 29,
    id: 2,
  },
  {
    name: "Eligna",
    apellido: "LSSSSS",
    calle: "AAAAAAAAAA",
    edad: 22,
    id: 3,
  },
  {
    name: "CarlosASDAS",
    apellido: "tUVIEJAS",
    calle: "NosSDASDSADe",
    edad: 12,
    id: 4,
  },
];

const typeDefinitions = gql`
  type Address {
    name: String!
    calle: String
  }

  type Person {
    name: String!
    apellido: String!
    calle: String
    edad: Int!
    id: ID!
    address: Address!
    canDrink: Boolean 
  }

  type Query {
    personasCount: Int!
    allPersons: [Person]!
    findPerson(name: String!): Person
  }
`;

const resolvers = {
  Query: {
    personasCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root,args) => {
      const {name} = args;
      return persons.find(person => person.name === name)
    },
  },
  Person: {
    address: (root) => {return {
      name: root.name,
      calle: root.calle,
    }},
    canDrink: (root) => root.edad >= 18,
  },
};

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server ready at " + url);
});